
import { OnelineComponent, CreateElement, Component, Prop } from "@core";
import { Icon } from '@/packages/icon';
@Component({
  components: {
    Icon
  }
})
export class OneLineInput extends OnelineComponent {
  @Prop({ default: 'oneline-input', type: String }) type?: String; //是否朴素按钮
  @Prop() value?: string;

  render(create: CreateElement) {
    const className: any = [
      this.type ==='textarea'?'oneline-textarea':'oneline-input'
    ]
    return create('div', {
      class: className,
    }, [create('input', {
      domProps: {
        value: this.value
      },
      on: {
        input: (event: { target: { value: string; }; }) => {
          this.$emit('input', event.target.value)
        }
      }
    })]
    )
  };
}