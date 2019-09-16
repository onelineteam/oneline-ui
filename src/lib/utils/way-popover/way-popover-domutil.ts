 

/**
 * @class Dom的相关操作
 */
export class WayDomUtil {


  static getAllScrollParent(element: Element, offsetParent: Element) {
    const parents = [];
    let parent = this.getScrollParent(element);
    // console.log(parent, getScrollParent(parent))
    while (parent.offsetParent !== offsetParent && parent && parent.offsetParent) {
      parents.push(parent);
      parent = this.getScrollParent(parent.parentNode);

    }
    parents.push(parent);
    return parents;
  }



  static getScrollParent(element: Node | null | Document | HTMLElement | Element): HTMLElement {

    if (!element) {
      return document.documentElement;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        if (element.ownerDocument === null) {
          return document.documentElement;
        }
        return element.ownerDocument.documentElement;
      case '#document':
        return (<Document>element).documentElement;
    }



    const computedStyle = this.getElementComputedStyle(element as Element);

    const overflow = computedStyle.overflow;

    const overflowX = computedStyle.overflowX;

    const overflowY = computedStyle.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element as HTMLElement;
    }

    return this.getScrollParent(element.parentNode);
  }

  static getElementComputedStyle(element: Element, property?: any): any {
    if (element.nodeType !== 1) {
      return [];
    }
    const css = getComputedStyle(element, null);
    return property ? css[property] : css;
  }


  static getOffsetParent(element: HTMLElement): Element | null {
    return element.offsetParent;
  }

  static getAllOffsetParent(element: Element) {
    const offsets: Element[] = [];
    let offset: Element | null = this.getOffsetParent(element as HTMLElement);
    while (offset != null) {
      offsets.push(offset);
      offset = this.getOffsetParent(offset as HTMLElement);
    }
    return offsets;
  }




  static offsetPos(offsets: HTMLElement[], border: Boolean = false): { left: number, top: number } {
    const offset = { left: 0, top: 0 };
    // console.log(offset)
    offsets.forEach( (item: HTMLElement) => {
      let borderLFWidth = 0;
      let borderTBWidth = 0
      if(border) {
        const lw = this.getElementComputedStyle(item, 'border-left-width').match(/\d+/)[0];
        const rw = this.getElementComputedStyle(item, 'border-right-width').match(/\d+/)[0];
        borderLFWidth = (parseInt(lw) || 0 );//+ (parseInt(rw) || 0);
        const tw = this.getElementComputedStyle(item, 'border-top-width').match(/\d+/)[0];
        // const bw = this.getElementComputedStyle(item, 'border-bottom-width').match(/\d+/)[0];
        borderTBWidth = parseInt(tw)||0;
      }

      offset.left += item.offsetLeft + borderLFWidth;
      offset.top += item.offsetTop + borderTBWidth;
    })
    // console.log(offset)
    return offset;
  }


  static scrollPos(parents: HTMLElement[], type: "left" | "top"): number {
    let p: number = 0;
    const key: { left: 'scrollLeft', top: 'scrollTop' } = {
      left: 'scrollLeft',
      top: 'scrollTop'
    }
    
    for (let i = 0; i < parents.length; i++) {
      let parent: HTMLElement = parents[i];
      if(parent === document.documentElement && navigator.userAgent.indexOf('Edge') > -1) {
        parent = document.body;
      }
      // console.log("parents size:", navigator.userAgent);
      p += parent[key[type]]
    }
    return p;
  }


  static htmlToElements(content: string): Node[] {
    var template = document.createElement('template');
    template.innerHTML = content;
    const nodes:Node[] = [];
    template.content.childNodes.forEach((node: Node) => {
      nodes.push(node);
    })
    return nodes;
  }

  static appendChild(element: Element, childs: Node[]) {
    childs.forEach(child => {
      element.appendChild(child);
    })
  }

  static clearChild(element: Element) {
    element.innerHTML = "";
  }

}