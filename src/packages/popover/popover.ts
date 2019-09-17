import { Component, OnelineComponent, CreateElement, Prop, VNode, Vue, Watch } from "@core";
import { WayPopover, WayPopoverPlacementType, on, WayDomUtil } from "@utils";

function findChild(node: Node, target: Node, istrue: boolean = false): boolean {
  const childs = node.childNodes || [];
  const len = childs.length; 
  for (let i = 0; i < len; i++) {
    const child = childs.item(i); 
    if (child === target) { 
      istrue =  true; 
      break; 
    } else {
      istrue = findChild(child, target, istrue);
    } 
  }
   
  return istrue;
  
}
@Component
export default class Popover extends OnelineComponent {
  name: string = "popover";
  @Prop() title?: string;
  @Prop() content?: string;
  @Prop({ default: 'click' }) trigger?: "click" | "hover" | "focus" | "hands";
  @Prop({ default: 'bottom' }) placement?: string;
  @Prop() width?: string | number;
  @Prop({ default: true }) fixed?: boolean;
  @Prop() confirm?: Boolean;
  @Prop({ default: false }) show?: Boolean;

  reference?: Element;
  popover: WayPopover | null = null;
  titleElement?: Element;
  bodyElement?: Element;

  updated() {
    this.popover && this.popover.computed();
  }


  mounted() {
    this.$nextTick(() => {
      const options = {
        placement: WayPopoverPlacementType.bottomCenter,
        fixed: this.fixed !== undefined ? this.fixed : true,
        arrow: {
          size: 16,
          color: "#F5F5F9",
          style: 'solid'
        }
      };
      this.popover = new WayPopover(this.reference as Element, options);
      this.show ? this.popover.show() : this.popover.hide();
      this.updatePopover();



      on(window, 'click', (e) => {
          
        if (this.popover && this.popover.isShow() && this.trigger !== "hands") {
          let parent: Node = this.popover.target.popover.popover; 
          const ischild = findChild(parent,e.srcElement as Element);
           console.log(ischild, "======>")
          if (!ischild && e.target !== this.reference) {
            this.popover.hide();
          } else { 
            const parent = this.popover.el.parentElement as HTMLElement;
            const index = WayDomUtil.getElementComputedStyle(parent, 'z-index');
            if (WayPopover.index > index) {
              parent.style.zIndex = ++WayPopover.index + "";
            }
          }
        }
      })


    })

  }

  @Watch('content')
  updateContent() { 
    WayDomUtil.clearChild(this.bodyElement as Element);
    WayDomUtil.appendChild(this.bodyElement as Element, WayDomUtil.htmlToElements(this.content||""));  
  }

  @Watch('title')
  updateTitle() { 
    WayDomUtil.clearChild(this.titleElement as Element);
    WayDomUtil.appendChild(this.titleElement as Element, WayDomUtil.htmlToElements(this.title||""));  
  }


  updateBodyElement() {
    if (!this.content) { 
      if(this.$slots.content) {
        WayDomUtil.appendChild(this.bodyElement as Element, this.vnodeToNode(this.$slots.content)); 
        return true;
      } 
    } else {
      WayDomUtil.appendChild(this.bodyElement as Element, WayDomUtil.htmlToElements(this.content));  
      return true;
    }
    return false;
  }

  updateTitleElement() {
    if(!this.title) {
      if(this.$slots.title) {
        WayDomUtil.appendChild(this.titleElement as Element, this.vnodeToNode(this.$slots.title));
        return true;
      } 
    } else {
      WayDomUtil.appendChild(this.titleElement as Element, WayDomUtil.htmlToElements(this.title)); 
      return true;
    }

    return false;
  }

  updatePopover() {
    if (this.popover) {

      let content:Node[] = [];

      this.titleElement = document.createElement("div");
      this.titleElement.className = "oneline-popover__title";

      this.bodyElement = document.createElement('div');
      this.bodyElement.className = "oneline-popover__body"; 
       
      this.updateTitleElement() && content.push(this.titleElement);
      this.updateBodyElement() && content.push(this.bodyElement); 
 
      this.popover.setContent(content);
      this.popover.update();
    }

  }



  vnodeToNode(nodes: VNode[] | undefined) {
    const elements: any = [];
    nodes === undefined && (nodes = [])
    nodes.forEach(vnode => {
      elements.push(vnode.elm as Element);
    })
    return elements;
  }

  event(e: MouseEvent) {
    // e.stopPropagation(); 
    const type: string = e.type;  
    const target = e.target as Node;
    if (/^(input|textarea)$/i.test(target.nodeName)) {
      if (this.trigger === "focus" && this.popover) {
        if (type === "focusin") {
          this.popover.show();
        }
        if (type === "focusout") {
          this.popover.hide();
        }
      }
    } else {
      if (e.target === this.reference && type === "click" && (this.trigger === "click" || this.trigger === "hands")) {
        this.popover && this.popover.trigger();
      }

      if (this.trigger === "hover" && this.popover) {
        if (type === "mouseenter") {
          this.popover.show();
        }
        if (type === "mouseleave") {
          this.popover.hide();
        }
      }

      if (this.trigger === "focus" && this.popover) {
        if (type === "mousedown") {
          this.popover.show();
        }
        if (type === "mouseup") {
          this.popover.hide();
        }
      }
       
    }
 

  }

  render(create: CreateElement) {
    this.$nextTick(() => {
      if (this.$slots.default && !this.reference) {
        this.reference = this.$slots.default[0].elm as Element;
      }
    })

    const options: any = {
      class: "oneline-popover",
      on: {
        click: this.event,
        mouseleave: this.event,
        mouseenter: this.event,
        mousedown: this.event,
        mouseup: this.event,
        focusin: this.event,
        focusout: this.event
      }
    }

    const vnodes: (VNode | undefined | VNode[])[] = [this.$slots.default && this.$slots.default[0]];
    //内容优先 
    if (!this.content) {
      vnodes.push(this.$slots.content)
    }

    if (!this.title) {
      vnodes.push(this.$slots.title)
    }

    return create('div', options, vnodes)
  }

} 