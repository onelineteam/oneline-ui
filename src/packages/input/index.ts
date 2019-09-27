import { OnelineComponent, CreateElement, Component, Prop, VNode } from "@core";

@Component
export class OneLineInput extends OnelineComponent {
  static cname: string = "ol-input";
  render(createElement: CreateElement) {
    const childs:any = [];
    if(this.$slots.prefix) {
      const prefix = createPrefix(createElement, this.$slots.prefix);
      childs.push(prefix);
    }
    const input = createInput(createElement);
    childs.push(input);
    if(this.$slots.suffix) {
      const suffix = createSuffix(createElement, this.$slots.suffix);
      childs.push(suffix);
    }
    return createElement('div', {class: 'ol-input-wrapper'}, childs)
  }
}


function createInput(createElement: CreateElement) {
  return createElement('input', {class: ['ol-input']}, null);
}

function createSuffix(createElement: CreateElement, nodes: VNode[]) {
  return createElement('div', { class: "ol-input-suffix"}, nodes);
}

function createPrefix(createElement: CreateElement, nodes: VNode[]) {
  return createElement('div', {class: 'ol-input-prefix'}, nodes);
}