import { OnelineComponent, CreateElement, Component, Prop } from "@core";

@Component
export class OneLineButtonGroup extends OnelineComponent {
    render(create: CreateElement) {

        return create('div', {
            class: ["oneline-button-group"],

        }, this.$slots.default
        )
    };
}