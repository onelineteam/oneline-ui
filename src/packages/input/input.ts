
import { OnelineComponent, CreateElement, Component, Prop } from "@core";
import { Icon } from '@/packages/icon';
@Component({
  components: {
    Icon
  }
})
export class OneLineInput extends OnelineComponent {
  @Prop() value?: string;
  render(create: CreateElement) {

    return create('div', {
      class: ["oneline-input"],
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