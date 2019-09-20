import { OnelineComponent, CreateElement, Component, Prop } from "@core";


@Component
export class OneLineIcon extends OnelineComponent {
  static cname: string = "ol-icon";
  @Prop({default: 'iconfont'}) family?: string;
  @Prop({default: 'icon'}) pre?: string;
  
  @Prop() type?: string;

  @Prop({default: "12px"}) size?: string;

  @Prop({default: "#000000"}) color?: string; 

  render(create: CreateElement) {
  
    return create('i', {
      class:[this.family, this.pre + "-" + this.type],
      style: {fontSize: this.size, color: this.color}
    }, "")
  }
}