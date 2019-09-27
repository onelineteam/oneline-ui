import { Component, OnelineComponent, CreateElement, Prop, VNode, Vue, Watch,Emit} from "@core";
@Component
export class Radio extends OnelineComponent {
    // @Prop({ default: 'iconfont' }) family?: string;
    // @Prop({ default: 'icon' }) pre?: string;

    // @Prop() type?: string;

    // @Prop({ default: "12px" }) size?: string;

    // @Prop({ default: "#000000" }) color?: string;
    // @Prop() model?
    @Prop() value!:string|number|boolean  
    //
    render(create: CreateElement,context:any) {
        const options:any = {
            class:'ol-radio',
            role:"radio"
        }
        return create(
            'label',
            options,
            [this.inputTag(create,context), [this.spanTag(create,context)]]
        )
        
    }
    // labelTag(create:CreateElement){
    //     const that = `
    //     return create(
    //         'label',{

    //         },
    //         [
    //             that.inputTag(create,this)
    //         ]
    //     )
    // }
    //组建中vue的实例
    //单选框
    inputTag(create:CreateElement,context:any){
        const options = {
            domProps:{
                type:'radio',
                value:this.value
            },
            on:{
                change:(event:any)=>{
                    this.change(event)
                }
            }
        }
        return create(
            'input',
            options,
        )
    }
    spanTag(create:CreateElement,context:any){
        const options= {
            'class':{
                radio__label:true
            }
        }
        return create(
            'span',
            options,
            [this.$slots.default]
       )
    }  
    @Emit()
    change(event:any){
        return event.target.value
    }
    
}