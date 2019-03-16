import {Vue} from '@core';
export class OnelineComponent extends Vue {
  prefix:string = "oneline-";
  _class(name:string) {
    return this.prefix + name;
  }
}