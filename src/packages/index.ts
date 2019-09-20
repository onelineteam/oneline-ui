import {OnelineComponent} from '@core';
export * from './button';
export * from './button-group';
export * from './popover';
export * from './icon';
export * from './layout';
// export * from './input';


export default function installComponent(Vue:any, components:Array<any>) {
   components.forEach((item:any) => {
     console.log("============》item.cname", item.cname);
     Vue.component(item.cname, item);
   })
}