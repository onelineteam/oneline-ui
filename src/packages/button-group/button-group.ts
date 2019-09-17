import { OnelineComponent, CreateElement, Component, Prop } from "@core";

@Component
export class OneLineButtonGroup extends OnelineComponent {
    name: string = "button-group";
    render(create: CreateElement) {

        return create('div', {
            class: ["oneline-button-group"],

        }, this.$slots.default
        )
    };
}