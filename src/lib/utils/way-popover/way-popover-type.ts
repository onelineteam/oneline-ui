
export enum WayPopoverPlacementType {
  bottomLeft =  'bottom-left', 
  bottomCenter = 'bottom-center',
  bottomRight =  'bottom-right', 
  leftCenter = 'left-center', 
  leftTop = 'left-top', 
  leftBottom =  'left-bottom', 
  topLeft =  'top-left',
  topCenter =  'top-center',
  topRight =  'top-right',
  rightTop =  'right-top', 
  rightCenter =  'right-center',
  rightBottom =  'right-bottom'
};
export type WayPopoverPosition = {
  left: number,
  top: number,
  arrowStyle?: any,
  scrollLeft: number,
  scrollTop: number,
  offsetLeft: number,
  offsetTop: number,
  width: number,
  height: number,
  scrollHeight?: number,
  scrollWidth?: number
}

export type WayPopoverOption = {
  placement: WayPopoverPlacementType,
  fixed: Boolean,
  arrow?: {
    size?: number,
    color?: string,
    style?: string
  }
}


export type WayKey = "placement" | "fixed" | "arrow";