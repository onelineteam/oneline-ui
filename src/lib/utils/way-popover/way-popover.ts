
import { WayDomUtil } from './way-popover-domutil';
import { WayPopoverPlacementType, WayPopoverOption, WayKey } from './way-popover-type';
import { WayPopoverDom } from './way-popover-dom';
import { WayPopoverPlacement } from './way-popover-placement';
import { WayPopoverEvent } from './way-popover-event';

class WayPopoverTarget {
  target: Element;
  scrollEvent: WayPopoverEvent[] = [];
  popover: WayPopoverDom;
  placement: WayPopoverPlacement;
  direction: WayPopoverPlacementType;


  arrowStyle: any = { size: 10, color: "#000", style: "solid" };
  timeout: number = -1;
  fixed: Boolean;
  constructor(target: Element, options: WayPopoverOption) {
    this.target = target;
    this.popover = new WayPopoverDom();
    this.fixed = options.fixed;
    this.arrowStyle = options.arrow;
    this.direction = options.placement;


    if (this.fixed === false) {
      const position = WayDomUtil.getElementComputedStyle(this.target.parentElement as Element, "position");
      if (!position && position !== 'static') {
        (this.target.parentElement as HTMLElement).style.position = "relative"; //必须在插入之前设置其属性
      }

    }
    (<Element>this.target.parentElement).appendChild(this.popover.popover);
    this.placement = new WayPopoverPlacement(this.direction, this.target as HTMLElement, this.popover, this.arrowStyle);




  }

  update() {
    
    if (this.fixed) {
      this.popover.setStyle('popover', 'position', 'fixed');
      this.placement.update(this.direction);
      this.setFixed();
    } else {
       
      if(!this.isPosition()) {
        const parent = this.popover.popover.parentElement as HTMLElement;
        parent.style.position = "relative";
      }
      this.popover.setStyle('popover', 'position', 'absolute');
      this.placement.update(this.direction);
      this.setAbsolute();
      // this.popover.setStyle('popover', 'opacity', '1');
    }
  }

  isPosition() {
    const position = WayDomUtil.getElementComputedStyle(this.popover.popover.parentElement as Element, 'position');
      if("absolute|relative|fixed".indexOf(position) === -1) {
        return false;
      } 
      return true;
  }

  isShow() {
    const display = WayDomUtil.getElementComputedStyle(this.popover.popover, 'display');
    if(display === "none") {
      return false;
    }
    return true;
  }

  setFixed() { 
    this.initFixed(); 
  }

  setAbsolute() { 
    this.initAbsolute(); 
  }

  computed() {
    if(this.fixed) {
      this.computedFixed();
    } else {
      this.computedAbsolute();
    }
  }


  computedAbsolute() {
    this.placement.update();
    this.popover.setStyle("popover", "top", this.placement.position.top + "px");
    this.popover.setStyle("popover", "left", this.placement.position.left + "px");
    this.popover.setStyle("arrow", {
      ...this.placement.position.arrowStyle
    });
  }

  computedFixed() {
    const parents = WayDomUtil.getAllScrollParent(this.target, document.documentElement);
    const offsets = WayDomUtil.getAllOffsetParent(this.target);
    this.placement.update(); 
    const elementOffset = WayDomUtil.offsetPos(offsets as HTMLElement[], true);
    const top = WayDomUtil.scrollPos(parents, 'top');
    const left = WayDomUtil.scrollPos(parents, 'left');

    this.popover.setStyle("popover", "top", elementOffset.top + this.placement.position.top - top + "px");
    this.popover.setStyle("popover", "left", elementOffset.left + this.placement.position.left - left + "px");
    this.popover.setStyle("arrow", {
      ...this.placement.position.arrowStyle
    });

  }


  initAbsolute() {
    const scrollParent = WayDomUtil.getScrollParent(this.target);
    const callback = () => {
       this.computedAbsolute(); 
    }
    callback();
    const wayEvent = new WayPopoverEvent(scrollParent, "scroll", callback);
    this.scrollEvent.push(wayEvent);

  }

  initFixed() {
 
    const step = (parent: HTMLElement | Document) => {
      const callback = () => {
        clearTimeout(this.timeout); 
        this.timeout = window.setTimeout(() => {
          this.computedFixed();
          this.popover.setStyle('popover', 'opacity', '1');

        }, 10);
      }

      return callback;

    }

    step(WayDomUtil.getScrollParent(this.target) as HTMLElement)();

    const parents = WayDomUtil.getAllScrollParent(this.target, document.documentElement);
    for (let i = 0; i < parents.length; i++) {
      let parent: HTMLElement | Document = parents[i];
      parent = parent === document.documentElement ? document : parent; 
      const callback = step(parent);
      const event = new WayPopoverEvent(parent, "scroll", callback);
      this.scrollEvent.push(event);
      
    }

  }

  

  setContent(content: string | Node | Node[] | NodeListOf<ChildNode>) {
    this.popover.setContent(content); 
    this.update();
  }

  removeEvent() {
    let item: WayPopoverEvent | undefined;
    while (item = this.scrollEvent.pop()) {
      item.destroy();
    }
  }

  destroy() {
    let item: WayPopoverEvent | undefined;
    while (item = this.scrollEvent.pop()) {
      item.destroy();
    }
    this.popover.destroy();
  }



}




export class WayPopover {
  static index: number = 0;
  id: number = WayPopover.index++;
  target: WayPopoverTarget;
  el: Element;
  defaultOptions: WayPopoverOption = {
    placement: WayPopoverPlacementType.bottomCenter,
    fixed: false,
    arrow: {
      size: 10,
      color: "#000",
      style: 'solid'
    }
  }

  constructor(target: Element, public options: WayPopoverOption) {
    Object.keys(options).forEach((key: string) => {
      this.defaultOptions[key as WayKey] = options[key as WayKey];
    })
    this.target = new WayPopoverTarget(target, this.defaultOptions);
    this.el = this.target.popover.popoverBody;
   
  }

  update() {
    // this.target.destroy();
    this.target.removeEvent();
    this.target.update();
  }

  computed() {
    this.target.computed();
  }

  setContent(content: string | Node | Node[]) {
    this.target.setContent(content); 
  }
  trigger() {
     
    if(!this.target.isShow()) {
      this.show();
     
    } else {
      this.hide();
    }
    // 
   
  }
  show() {
    
    this.target.popover.setStyle('popover', 'display', 'inline-block');
    this.computed();
    this.target.popover.setStyle('popover', 'z-index', WayPopover.index++);
  }

  isShow() {
    return this.target.isShow();
  }

  hide() {
 
    this.target.popover.setStyle('popover', 'display', 'none');
  }


  destroy() {
    this.target.destroy();
  }
}






