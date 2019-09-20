
import { OnelineComponent, CreateElement, Component, Prop } from "@core";
import { OneLineIcon as Icon } from '../icon';
@Component({
  components: {
    Icon
  }
})
export class OneLineButton extends OnelineComponent {
  static cname: string = "ol-button";
  @Prop({ default: 'default' }) type?: string;  //类型
  @Prop({ default: false, type: Boolean }) plain!: boolean; //是否朴素按钮
  @Prop({ default: false, type: Boolean }) round!: boolean; //是否圆角按钮
  @Prop({ default: false, type: Boolean }) circle!: boolean; //是否圆形按钮
  @Prop({ default: false, type: Boolean }) disabled!: boolean; //是否禁用
  @Prop({ default: false, type: Boolean }) loading!: boolean; //是否加载状态
  @Prop() size?: string;  //尺寸
  @Prop() icon?: string;  //类型

  render(create: CreateElement) {
    const className: any = [
      "oneline-button",
      "oneline-button--" + this.type,
      this.size ? "oneline-button--" + this.size : "",
      this.plain ? "is-plain" : "", this.round ? "is-round" : "",
      this.circle ? "is-circle" : "", this.disabled ? "is-disabled" : "",
      this.loading ? "is-loading" : ""
    ]
    let vnodes :any[]= [];
    if (this.loading) {
      vnodes = [create(Icon, {
        props: {
          type: "loading",
          size: "16px",
          color: "#FFFFFF"
        }
      }), create('span', this.$slots.default)]
    } else if (this.icon) {
      vnodes = [create(Icon, {
        props: {
          type: this.icon,
          size: "16px",
          color: "#FFFFFF"
        }
      }), create('span', this.$slots.default)]
    } else {
      vnodes = [create('span', this.$slots.default)]
    }
    return create('button', {
      class: className,
      on: { click: () => { this.$emit('click') } }
    },
      vnodes
    )
  };
}