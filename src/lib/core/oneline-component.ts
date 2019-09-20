import {Vue} from '@core';
export class OnelineComponent extends Vue {
  static cname?: string;
  prefix:string = "oneline-";
  _class(name:string) {
    return this.prefix + name;
  }
}