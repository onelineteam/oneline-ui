
import { OnelineComponent, CreateElement, Component, Prop } from "@core";
import {Icon} from '@/packages/icon';
 @Component({
  components: {
    Icon
   }
 })
export class OneLineButton extends OnelineComponent {
  @Prop({default:'default'}) type?: string;  //类型
  @Prop({ default: false, type: Boolean }) plain!: boolean; //是否朴素按钮
  @Prop({ default: false, type: Boolean }) round!: boolean; //是否圆角按钮
  @Prop({ default: false, type: Boolean }) circle!: boolean; //是否圆形按钮
  @Prop({ default: false, type: Boolean }) disabled!: boolean; //是否禁用
  @Prop({ default: false, type: Boolean }) loading!: boolean; //是否加载状态
  @Prop() size?: string;  //尺寸
  @Prop() icon?: string;  //类型
  render(create: CreateElement) {
    
    return create('button', {
      class:["oneline-button","oneline-button--"+this.type,this.size?"oneline-button--"+this.size:"",this.plain?"is-plain":"",this.round?"is-round":"",this.circle?"is-circle":"",this.disabled?"is-disabled":"",this.loading?"is-loading":""],
      on: {click: () => { this.$emit('click')}}
    }, 
    this.loading?[create(Icon,{
        props:{
          type:"loading",
          size:"16px",
          color:"#FFFFFF"
        }
      }),create('span',this.$slots.default)]:this.icon?[create(Icon,{
        props:{
          type:this.icon,
          size:"16px",
          color:"#FFFFFF"
        }
      }),create('span',this.$slots.default)]:[create('span',this.$slots.default)],
    )
  };
}