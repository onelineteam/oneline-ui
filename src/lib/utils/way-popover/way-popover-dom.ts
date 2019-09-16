
export class WayPopoverDom {
  
  popover: HTMLDivElement = document.createElement("div");
  popoverBody: HTMLDivElement = document.createElement('div');
  popoverArrow: HTMLDivElement = document.createElement('div');
  constructor() {
    this.popover.className = "way-popover";
    this.popoverArrow.className = "way-popover__arrow";
    this.popoverBody.className = "way-popover__body";
    this.popover.appendChild(this.popoverArrow);
    this.popover.appendChild(this.popoverBody);  
   
  }

  setStyle(type: string = "popover", style: any, value?: any) {
    const types:any = {
      popover: this.popover,
      arrow: this.popoverArrow,
      body: this.popoverBody
    }
    if (value !== undefined) {
      types[type].style[style] = value;
    } else {
      Object.keys(style).forEach((key: any) => {
        types[type].style[key] = style[key];
      })
    }
  }
  
  setContent(html: string|Node|Node[]|NodeListOf<ChildNode>) {
    this.popoverBody.innerHTML = "";
    if(typeof html === "string") {
      this.popoverBody.innerHTML = html;
    } else {
       let nodes:any = [];
       nodes = nodes.concat(html);
       if(html instanceof NodeList) {
         nodes = html;
       }
       nodes.forEach((node:any) => {
         this.popoverBody.appendChild(node);
       })
    }
  }
  update() {

  }

  destroy() {
    (<HTMLElement>this.popover.parentElement).removeChild(this.popover);
  }
}
