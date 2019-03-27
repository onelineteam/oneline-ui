import { OnelineComponent, CreateElement, Component, Prop } from "@core";
@Component
export class Radio extends OnelineComponent {

    // @Prop({ default: 'iconfont' }) family?: string;
    // @Prop({ default: 'icon' }) pre?: string;

    // @Prop() type?: string;

    // @Prop({ default: "12px" }) size?: string;

    // @Prop({ default: "#000000" }) color?: string;
    // @Prop() model?
    render(create: CreateElement) {

        return create('label', {
            'class': {
                radio: true
            }
        }, [create('span', {}, [create('span', {
            'class': {
                radio__inner: true
            }
        }), create('input', { domProps: { type: 'radio', value:} })]), create('span', {
            'class': {
                radio__label: true
            }
        }, [])])
    }
}