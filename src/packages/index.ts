export * from './button';
export * from './button-group';
export * from './popover';
export * from './icon';
// export * from './input';


export default function installComponent(Vue, components) {
   components.forEach(item => {
     Vue.component(item.name, item);
   })
}