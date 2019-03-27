<template>
  <div>
    <!-- <icon type="piaofang"></icon>
    <icon type="arrows-alt" pre="fa" family="fa"></icon> -->
    <one-line-button type="success" round plain size="mini" disabled @click="clicka">默认按钮</one-line-button>
  </div>
</template>

<script>
// import Hello from './hello';
import {Icon} from '@/packages/icon';
import {OneLineButton} from '@/packages/button';
 
export default {
  components: {Icon,OneLineButton},
  
  data() {
    return {
      title: 'hello'
    }
  }, 
  mounted() {
    // console.log(Hello)
    setTimeout(()=>{
      this.title = "this is test"
    },5000)
  },
  methods:{
    clicka() {
      console.log(11111);
      
    }
  }
}
</script>

<style>

</style>
