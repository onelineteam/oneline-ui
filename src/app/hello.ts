/**
 * @file  测试例子
 * @author towaywu@gmail.com
 * @date 2019-03-15
 */
import {CreateElement} from 'vue';
import {OnelineComponent, Component, Model, Prop, Watch } from '@core';

/**
 * @class 用来测试title的prop和内部变量
 */
class TestTitle extends OnelineComponent {
  @Prop() readonly outtitle?: string;
  title: string = this.outtitle || "";
}
 


/**
 * @class helloworld组件 演示了watch的用法
 */
@Component
class  HelloWorld extends TestTitle {


  @Watch('outtitle')
  watchOuttitle(newval:string, oldval:string) {
    console.log(newval)
    this.title = newval;
  }

  mounted() {
    setTimeout(()=>{
       this.title = "test"
    }, 3000)
  }

  render(h: CreateElement) {
   
    return h("h3", {class: this._class('button')}, "hello!" + this.title);
  }
}

export default  HelloWorld