
import { OnelineComponent, CreateElement, Component, Prop } from "@core";
import {Icon} from '@/packages/icon';
 @Component({
  components: {
    Icon
   }
 })
export class OneLineButton extends OnelineComponent {
  @Prop({default:'default'}) type?: string;  
  @Prop({ default: false, type: Boolean }) plain!: boolean;
  @Prop({ default: false, type: Boolean }) round!: boolean;
  @Prop({ default: false, type: Boolean }) disabled!: boolean;
  @Prop() size?: string;  
  render(create: CreateElement) {
    return create('button', {
      class:["oneline-button","oneline-button--"+this.type,"oneline-button--"+this.size,this.plain?"is-plain":"",this.round?"is-round":"",this.disabled?"is-disabled":"",],
      on: {click: () => { this.$emit('click')}}
    }, [create('span',this.$slots.default)]
    // [create(Icon,{
    //   props:{
    //     type:"piaofang"
    //   }
    // })]
    )
  };
}