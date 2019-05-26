
import { OnelineComponent, CreateElement, Component, Prop, Watch } from '@core';
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
  @Prop() prefixIcon?: String; //前置图标
  @Prop() suffixIcon?: String; //后置图标
  @Prop({ default: false, type: Boolean }) disabled!: boolean; //是否禁用
  @Prop({ default: false, type: Boolean }) readonly!: boolean; //是否只读

  // 事件属性
  @Prop({ default: false, type: Boolean }) clearable!: boolean; //是否可清空

  isMouse: boolean = false;//是否聚焦

  mounted() {

  }
  get clearVisible(): boolean {
    return this.clearable &&
      !this.disabled &&
      !this.readonly &&
      this.isMouse;
  }

  @Watch('value')
  updateContent() {

  }
  vnodesAfterClick(e: MouseEvent) {
    if (this.value && this.clearable && this.clearVisible)
      this.$emit('input', '');
  }

  iconVisible() {
    this.isMouse = true;
  }

  iconHide() {
    this.isMouse = false;
  }

  render(create: CreateElement) {
    this.$nextTick(() => {
      if (this.$slots.prepend) {
      }
    })
    //最外层标签
    const divClassName: any = [
      this.type === 'textarea' ? 'oneline-textarea' : 'oneline-input',
      this.size && this.type != 'textarea' ? 'oneline-input--' + this.size : '',
      {
        'is-disabled': this.disabled,
        'oneline-input--prefix': this.prefixIcon || this.$slots.prefix,
        'oneline-input--suffix': this.clearable || this.suffixIcon || this.$slots.prefix,
        'oneline-input-group': this.$slots.prepend || this.$slots.append,
        'oneline-input-group--append': this.$slots.append,
        'oneline-input-group--prepend': this.$slots.prepend,
      }
    ];
    const inputClassName: any = [
      this.type === 'textarea' ? 'oneline-textarea__inner' : 'oneline-input__inner',
    ];
    const attrOption: any = {
      disabled: this.disabled ? true : false,
      readonly: this.readonly ? true : false,
      placeholder: this.placeholder,
      autoComplete: this.autocomplete,
      type: this.type,
    }
    let inputNode: any = [];
    let contentBefore: any = [];//前置内容
    let contentAfter: any = [];//后置内容
    let vnodesBefore: any[] = [];//前置icon
    let vnodesAfter: any[] = [];//后置icon
    let iconNode: any[] = [];//后置icon类别

    if (this.$slots.prepend) {
      contentBefore = [
        create('div', {
          class: 'oneline-input-group__prepend',
        }, this.$slots.prepend)
      ]
    }
    if (this.$slots.append) {
      contentAfter = [
        create('div', {
          class: 'oneline-input-group__append',
        }, this.$slots.append)
      ]
    }

    //可清空icon
    if (this.value && this.clearable && this.clearVisible) {
      iconNode = [
        create(Icon, {
          class: 'oneline-input__icon',
          props: {
            type: 'close-circle',
            size: '16px',
            color: '#ccc'
          }
        })
      ]
    }
    //后置icon
    if (this.suffixIcon) {
      iconNode = [
        create(Icon, {
          class: 'oneline-input__icon',
          props: {
            type: this.suffixIcon,
            size: '16px',
            color: '#ccc'
          }
        })
      ]
    }
    //前置icon
    if (this.prefixIcon) {
      vnodesBefore = [
        create('span', {
          class: 'oneline-input__prefix',

        }, [
            create(Icon, {
              class: 'oneline-input__icon',
              props: {
                type: this.prefixIcon,
                size: '16px',
                color: '#ccc'
              }
            })
          ])
      ]
    } else if (this.$slots.prefix) {
      vnodesBefore = [
        create('span', {
          class: 'oneline-input__prefix',

        }, this.$slots.prefix
        )
      ]
    }
    //后置icon
    if (this.suffixIcon || this.clearable) {
      vnodesAfter = [
        create('span', {
          class: 'oneline-input__suffix',

        }, [create('span', {
          class: 'oneline-input__suffix-inner',
          on: {
            click: this.vnodesAfterClick,
          }
        }, iconNode)
          ])
      ]
    }
    //判断是否文本框
    if (this.type === 'textarea') {
      inputNode = [
        create('textarea', {
          class: 'oneline-textarea__inner',
          attrs: attrOption,
        })
      ]
    }
    else {
      inputNode = [
        contentBefore,
        vnodesBefore,
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
          },
        })], vnodesAfter, contentAfter
      ]
    }
    return create('div', {
      class: divClassName,
      on: {
        mouseleave: this.iconHide,
        mouseenter: this.iconVisible,
      }
    }, inputNode
    )
  };
}