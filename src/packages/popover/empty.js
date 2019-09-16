export const EmptyComponent = {
  props:["node"],
 render(h) {
     return h('div',{},[this.node ? this.node : '']);
 }
}