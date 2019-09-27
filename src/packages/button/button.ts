
import { OnelineComponent, CreateElement, Component, Prop, Vue } from "@core";
// import { OneLineIcon as Icon } from '../icon';
@Component
export class OneLineButton extends OnelineComponent {
  static cname: string = "ol-button";
  @Prop({ default: 'default' }) type?: string;  //类型


  @Prop({ default: false, type: Boolean }) plain!: boolean; //是否朴素按钮
  @Prop({ default: false, type: [Boolean,Number] }) round!: boolean|number; //是否圆角按钮
  @Prop({ default: false, type: Boolean }) circle!: boolean; //是否圆形按钮
  @Prop({ default: false, type: Boolean }) disabled!: boolean; //是否禁用
  @Prop({ default: false, type: Boolean }) loading!: boolean; //是否加载状态
  @Prop({ default: false, type: Boolean }) shadow!: boolean; //是否有阴影
  @Prop({ default: false, type: Boolean }) hollow!: boolean; //是否空心方式
  @Prop({ default: false, type: Boolean }) text!: boolean; //是否文本

   
   
  @Prop() width?: string;
  @Prop() size?: 'small'|'medium'|'big';  //尺寸
  @Prop() icon?: string;  //类型
  @Prop() leftIcon?: string; //
  @Prop() rightIcon?: string; //

  render(create: CreateElement) {
     
    const btnNode = createButton.call(this, create)
    return btnNode;
  };
}


/**
 * 处理基本的样式
 * @param this 
 * @param style 
 */
function buttonStyle(this:any, style: any) {
  if(this.round) {
    style.borderRadius = this.round === true?'3px': this.round;
  }

  if(this.circle) {
    style.borderRadius = '100%';
    style.width = this.width || '38px';
    style.height = this.width || '38px';

    if(this.size === 'big') {
      style.width = this.width || '70px';
      style.height = this.width || '70px';
    }

    if(this.size === 'medium') {
      style.width = this.width || '34px';
      style.height = this.width || '34px';
    }

    if(this.size === 'small') {
      style.width = this.width || '32px';
      style.height = this.width || '32px';
    }

  }



  return style;
}

/**
 * 创建主要的按钮， 包含左右图标， 中间图标
 * @param this 
 * @param create 
 */
function createButton(this: any, create: CreateElement) {
  const style:any = buttonStyle.call(this, {});
  const classes = ['ol-btn'];
  const nodes:any = [createDisabled.call(this, create)];

  //
  if(this.hollow) {
    classes.push(`ol-btn-${this.type}--hollow`)
  } else {
   classes.push(`ol-btn-${this.type}`)
  }
  if(this.shadow) {
    classes.push('ol-btn-' + this.type + '--shadow');
  }

  if(this.size) {
    classes.push('ol-btn--' + this.size)
  }

  if(this.text) {
    classes.push(`ol-btn-${this.type}--hollow`, 'ol-btn--text');
  }

  //
  if(this.leftIcon) {
    const leftIcon = createIcon.call(this, create, this.leftIcon, 'right');
    nodes.push(leftIcon);
  }
  
  
  if(this.icon) {
    const icon = createIcon.call(this, create, this.icon, 'center');
    nodes.push(icon);
  }  else {
    if(this.$slots.default) {
      const defaultNode = create('div', {}, this.$slots.default)
      nodes.push(defaultNode);
    }
    
  }

  if(this.rightIcon) {
    const rightIcon = createIcon.call(this, create, this.rightIcon, 'left');
    nodes.push(rightIcon);
  }

  return create('button', {class: classes, style}, nodes);
}

/**
 * 创建图标
 * @param this 
 * @param create 
 * @param icon 
 * @param direct 
 */
function createIcon(this:any, create: CreateElement, icon: string, direct: 'left'|'right'|'center') {
    const style:any = {};
    if(['left','right'].indexOf(direct) > -1) {
       style[`margin-${direct}`] =  '2px';
    }
    return create('ol-icon', {props: {type: icon, size: '18px', color: '#fff'}, style}, null);
}

/**
 * 创建禁用层
 * @param this 
 * @param create 
 */
function createDisabled(this:any, create: CreateElement) {
  if(this.disabled) {
    const style:any = {};
    if(this.circle) {
      style.borderRadius = '100%';
    }
    if(this.round) {
      style.borderRadius = this.round === true?'3px': this.round;
    }
    return create('span', {class: 'ol-btn-disabled', style}, '')
  }
  return null;
}
