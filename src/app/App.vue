<template>
  <!-- <div style="width:180px;"> -->
  <div>
    
    <!-- <one-line-input size="mini" v-model="text" maxlength="4" placeholder="请输入内容">
      <template slot="prepend">Http://</template>
      <template slot="append">com</template>
      <icon type="close-circle" class="oneline-input__icon" slot="prefix"></icon>
    </one-line-input> -->
    <one-line-input placeholder="请输入内容" maxlength="4"  type="textarea" v-model="text">

    </one-line-input>
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
  },
}
</script>

<style>
html {
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>
