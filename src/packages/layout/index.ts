import { OnelineComponent, CreateElement, Component, Prop, VNode } from "@core";



function doWith(nodes: VNode[], gutter: number) {
  const len = nodes.length;
  const w = (100 / len).toFixed(8) + '%';
  nodes.forEach((item: VNode) => {
    if (item.data) {
      item.data.style = { width: w, flex: `0 0 calc(${w} - ${gutter})` }
    } else {
      item.data = { style: { width: w, flex: `0 0 calc(${w} - ${gutter})` } };
    }
  });
}

function doGutter(nodes: VNode[], gutter: number) {
  nodes.forEach((item: VNode, index: number) => {
     
    if (item.data) {
      if (index != nodes.length - 1) {
        if (item.data.style) {
          const style = item.data.style as any;
          style["margin-right"] = gutter + 'px';
        } else {
          item.data.style = { marginRight: gutter + 'px' };
        }
      }
      
    }
  })
}



@Component
export class OneLineRow extends OnelineComponent {
  static cname: string = "ol-row";
  @Prop({ default: 0 }) gutter?: number;
  @Prop({ default: true }) span?: boolean;
  @Prop({ default: ()=>['md'] }) break?: string[];
  @Prop({ default: false}) block?:boolean;
  @Prop({ default: 'nowrap'}) wrap?: "nowrap"|"wrap";

  render(createElement: CreateElement) {
    const classes = ['ol-row']
    const styles:any = {flexWrap: this.wrap};
    const child = this.$slots.default;

    if (child) {
      const nodes: VNode[] = [];
      child.forEach(item => {
        if (item.tag) {
          nodes.push(item)
        }
      })


      if (this.span) {
        doWith(nodes, this.gutter || 0);
      }


      doGutter(nodes, this.gutter || 0);

      if (this.break) {
        this.break.forEach((item) => {
          const bk: any[] = ['ol-row', item];
          classes.push(bk.join("-"))
        })
      }
    }


    if(this.block) {
      styles.height = '100%';
    }

    return createElement('div', { class: classes.join(' '), style: styles }, [this.$slots.default])
  }

}


@Component
export class OneLineCol extends OnelineComponent {
  static cname: string = "ol-col";
  @Prop({ default: 0}) width?: number|string;
  @Prop({default: 'flex'}) type?: "flex";
  @Prop({default: 'center'}) cent?: 'vertical'|'horizontal'|'center';
  @Prop({ default: 'left'}) align?: 'center'|'left'|'right';

  render(createElement: CreateElement) {
    const parent = this.$parent as any;

    const style:any = {textAlign: this.align};
    if(!parent.span && this.width) {
      style.width = typeof this.width === "number" ? this.width + "px" : this.width;
      style.flex = "0 0 auto";
    }

    //////////////
    if(this.type == "flex") {
      style.display = "flex";
    }
    if(this.cent == "vertical") {
       style.alignItems = "center";
    } 
    if(this.cent == "center") {
      style.alignItems = "center";
      style.justifyContent = "center";
    } 
    if(this.cent == "horizontal") {
      style.justifyContent = "center";
    } 


    const classes = ['ol-col']; 
    return createElement('div', { class: classes.join(' '), style }, [this.$slots.default])
  }
}