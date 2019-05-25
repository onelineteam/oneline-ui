
import { OnelineComponent, CreateElement, Component, Prop } from "@core";
import { Icon } from '@/packages/icon';
@Component({
  components: {
    Icon
  }
})
export class OneLineInput extends OnelineComponent {
  @Prop() value?: string;//内容
  @Prop() placeholder?: string;
  @Prop() size?: string;  //尺寸
  @Prop({ default: 'text', type: String }) type?: String; //input类型
  @Prop({ default: 'off', type: String }) autocomplete?: String; //是否自动补齐
  @Prop({ default: false, type: Boolean }) disabled!: boolean; //是否禁用

  // 事件属性
  @Prop({ default: false, type: Boolean }) clearable!: boolean; //是否可清空

  event(e: MouseEvent) {
    const type: string = e.type;
    const target = e.target as Node;
    if (/^(input|textarea)$/i.test(target.nodeName)) {
      console.log(e.target, 11);//鼠标事件
    } else {
    }
  }
  render(create: CreateElement) {
    //最外层标签
    const divClassName: any = [
      this.type === 'textarea' ? 'oneline-textarea' : 'oneline-input',
      this.size && this.type != "textarea" ? "oneline-input--" + this.size : "",
      this.clearable ? "oneline-input--suffix" : ""
    ];
    const inputClassName: any = [
      this.type === 'textarea' ? 'oneline-textarea__inner' : 'oneline-input__inner'
    ];
    const attrOption: any = {
      disabled: this.disabled ? true : false,
      placeholder: this.placeholder,
      autoComplete: this.autocomplete,
      type: this.type,
    }
    let vnodesBefore: any[] = [];
    let vnodesAfter: any = [
      create('span', {
        class: 'oneline-input__suffix',

      }, [create('span', {
        class: 'oneline-input__suffix-inner',

      }, [create(Icon, {
        class: 'oneline-input__icon',
        props: {
          type: "shanchu",
          size: "16px",
          color: "#000"
        }
      })])]),
    ];
    return create('div', {
      class: divClassName,
    }, [
        [create('input', {
          class: inputClassName,
          domProps: {
            value: this.value
          },
          attrs: attrOption,
          on: {
            input: (event: { target: { value: string; }; }) => {
              this.$emit('input', event.target.value)
            },
            click: this.event,
            mouseleave: this.event,
            mouseenter: this.event,
            mousedown: this.event,
            mouseup: this.event,
            focusin: this.event,
            focusout: this.event
          },
        })], vnodesAfter

      ],

    )
  };
}