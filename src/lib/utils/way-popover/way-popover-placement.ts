import {WayPopoverDom} from './way-popover-dom';
import {WayPopoverPlacementType, WayPopoverPosition} from './way-popover-type';
import {WayDomUtil} from './way-popover-domutil';
export class WayPopoverPlacement {
  place: WayPopoverPlacementType; 
  position: WayPopoverPosition;
  target: HTMLElement;
  popover: WayPopoverDom;
  arrowSize: number;
  arrowStyle: string;
  arrowColor: string;

  constructor(place: WayPopoverPlacementType = WayPopoverPlacementType.bottomCenter, target: HTMLElement, popover: WayPopoverDom, arrowStyle: any) {
    this.place = place;
    this.target = target;
    this.popover = popover;
    this.arrowSize = arrowStyle.size;
    this.arrowColor = arrowStyle.color;
    this.arrowStyle = arrowStyle.style;
    this.position = {
      left: 0,
      top: 0,
      offsetLeft: 0,
      offsetTop: 0,
      scrollTop: 0,
      scrollLeft: 0,
      width: 0,
      height: 0
    }
    // this.update(place);
  }

  _setArrowStyle(color: string) {
    return `${this.arrowSize/2}px ${color} ${this.arrowStyle}`
  }

  update(place?:WayPopoverPlacementType) {
    place && (this.place = place);  
    this[this.place]();
  }
  
  ['bottom-left']() {
    this.position.top = this.target.offsetTop + this.target.clientHeight + this.arrowSize / 2;
    this.position.left = this.target.offsetLeft;
    this.position.arrowStyle = {
      left: 0,
      top: -this.arrowSize + 'px',
      borderRight: this._setArrowStyle('transparent'),
      borderLeft: this._setArrowStyle('transparent'),
      borderTop: this._setArrowStyle('transparent'),
      borderBottom: this._setArrowStyle(this.arrowColor)
    }
  }
  ['bottom-center']() {
    this.position.top = this.target.offsetTop + this.target.clientHeight + this.arrowSize / 2;
    this.position.left = this.target.offsetLeft + (this.target.clientWidth - this.popover.popover.clientWidth)/2;
    this.position.arrowStyle = {
      left: (this.popover.popover.clientWidth - this.arrowSize)/2 + 'px',
      top: -this.arrowSize + 'px',
      borderRight: this._setArrowStyle('transparent'),
      borderLeft: this._setArrowStyle('transparent'),
      borderTop: this._setArrowStyle('transparent'),
      borderBottom: this._setArrowStyle(this.arrowColor)
    }
    
  }
  ['bottom-right']() {
    this.position.top = this.target.offsetTop + this.target.clientHeight + this.arrowSize / 2;
    this.position.left = this.target.offsetLeft + (this.target.clientWidth - this.popover.popover.clientWidth);
    this.position.arrowStyle = {
      left: this.popover.popover.clientWidth - this.arrowSize + 'px',
      top: -this.arrowSize + 'px',
      borderRight: this._setArrowStyle('transparent'),
      borderLeft: this._setArrowStyle('transparent'),
      borderTop: this._setArrowStyle('transparent'),
      borderBottom: this._setArrowStyle(this.arrowColor)
    }
  }
  ['top-left']() {
    this.position.top = this.target.offsetTop - this.popover.popover.clientHeight - this.arrowSize/2;
    this.position.left = this.target.offsetLeft;
    this.position.arrowStyle = {
      left: 0,
      top: this.popover.popover.clientHeight + 'px',
      borderRight: this._setArrowStyle('transparent'),
      borderLeft: this._setArrowStyle('transparent'),
      borderTop: this._setArrowStyle(this.arrowColor),
      borderBottom: this._setArrowStyle('transparent')
    }
  }
  ['top-center']() {
    this.position.top = this.target.offsetTop - this.popover.popover.clientHeight - this.arrowSize/2;
    this.position.left = this.target.offsetLeft + (this.target.clientWidth - this.popover.popover.clientWidth)/2;
    this.position.arrowStyle = {
      left: (this.popover.popover.clientWidth - this.arrowSize)/2 + 'px',
      top: this.popover.popover.clientHeight + 'px',
      borderRight: this._setArrowStyle('transparent'),
      borderLeft: this._setArrowStyle('transparent'),
      borderTop: this._setArrowStyle(this.arrowColor),
      borderBottom: this._setArrowStyle('transparent')
    }
  }
  ['top-right']() {
    this.position.top = this.target.offsetTop - this.popover.popover.clientHeight - this.arrowSize/2;
    this.position.left = this.target.offsetLeft + (this.target.clientWidth - this.popover.popover.clientWidth);
    this.position.arrowStyle = {
      left: this.popover.popover.clientWidth - this.arrowSize + 'px',
      top: this.popover.popover.clientHeight + 'px',
      borderRight: this._setArrowStyle('transparent'),
      borderLeft: this._setArrowStyle('transparent'),
      borderTop: this._setArrowStyle(this.arrowColor),
      borderBottom: this._setArrowStyle('transparent')
    }
  }
  ['left-top']() {
    this.position.left = this.target.offsetLeft - this.popover.popover.clientWidth - this.arrowSize/2;
    this.position.top = this.target.offsetTop;
    this.position.arrowStyle = {
      left: this.popover.popover.clientWidth + 'px',
      top: 0,
      borderRight: this._setArrowStyle('transparent'),
      borderLeft: this._setArrowStyle(this.arrowColor),
      borderTop: this._setArrowStyle('transparent'),
      borderBottom: this._setArrowStyle('transparent')
    }
  }
  ['left-center']() {
    this.position.left = this.target.offsetLeft - this.popover.popover.clientWidth - this.arrowSize/2;
    this.position.top =  this.target.offsetTop + ( this.target.clientHeight-this.popover.popover.clientHeight)/2;;
    this.position.arrowStyle = {
      left: this.popover.popover.clientWidth + 'px',
      top: (this.popover.popover.clientHeight - this.arrowSize)/2 + 'px',
      borderRight: this._setArrowStyle('transparent'),
      borderLeft: this._setArrowStyle(this.arrowColor),
      borderTop: this._setArrowStyle('transparent'),
      borderBottom: this._setArrowStyle('transparent')
    }
  }
  ['left-bottom']() {
    this.position.left = this.target.offsetLeft - this.popover.popover.clientWidth - this.arrowSize/2;
    this.position.top = this.target.offsetTop + this.target.clientHeight - this.popover.popover.clientHeight;
    this.position.arrowStyle = {
      left: this.popover.popover.clientWidth + 'px',
      top: this.popover.popover.clientHeight - this.arrowSize + 'px',
      borderRight: this._setArrowStyle('transparent'),
      borderLeft: this._setArrowStyle(this.arrowColor),
      borderTop: this._setArrowStyle('transparent'),
      borderBottom: this._setArrowStyle('transparent')
    }
  }

  ['right-top']() {
    this.position.left = this.target.offsetLeft + this.target.clientWidth + this.arrowSize/2;
    this.position.top = this.target.offsetTop;
    this.position.arrowStyle = {
      left: -this.arrowSize + 'px',
      top: 0,
      borderRight: this._setArrowStyle(this.arrowColor),
      borderLeft: this._setArrowStyle('transparent'),
      borderTop: this._setArrowStyle('transparent'),
      borderBottom: this._setArrowStyle('transparent')
    }
  }

  ['right-center']() {
    console.log(WayDomUtil.getOffsetParent(this.target), this.target.offsetLeft + this.target.clientWidth + this.arrowSize);
    this.position.left = this.target.offsetLeft + this.target.clientWidth + this.arrowSize/2;
    this.position.top = this.target.offsetTop + ( this.target.clientHeight-this.popover.popover.clientHeight)/2;
    this.position.arrowStyle = {
      left: -this.arrowSize + 'px',
      top: (this.popover.popover.clientHeight - this.arrowSize)/2 + 'px',
      borderRight: this._setArrowStyle(this.arrowColor),
      borderLeft: this._setArrowStyle('transparent'),
      borderTop: this._setArrowStyle('transparent'),
      borderBottom: this._setArrowStyle('transparent')
    }
  }

  ['right-bottom']() {
    this.position.left = this.target.offsetLeft + this.target.clientWidth + this.arrowSize/2;
    this.position.top = this.target.offsetTop + this.target.clientHeight - this.popover.popover.clientHeight;
    this.position.arrowStyle = {
      left: -this.arrowSize + 'px',
      top: this.popover.popover.clientHeight - this.arrowSize + 'px',
      borderRight: this._setArrowStyle(this.arrowColor),
      borderLeft: this._setArrowStyle('transparent'),
      borderTop: this._setArrowStyle('transparent'),
      borderBottom: this._setArrowStyle('transparent')
    }
  }
}

export class WayPopoverPlacementFixed extends WayPopoverPlacement {
 
}
