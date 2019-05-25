<template>
  <div>
    <icon type="piaofang"></icon>
    <one-line-input  v-model="text" clearable placeholder="请输入内容"></one-line-input>
  </div>
</template>

<script>
// import Hello from './hello';
import {Icon} from '@/packages/icon';
import {OneLineInput} from '@/packages/input';
export default {
  components: {Icon,OneLineInput},
  
  data() {
    return {
      title: 'hello',
      text:""
    }
  }, 
  mounted() {
    // console.log(Hello)
    setTimeout(()=>{
      this.title = "this is test"
    },5000)
  }
}
</script>

<style>

</style>
