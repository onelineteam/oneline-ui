<template>
  <div>
    <!-- <icon type="piaofang"></icon>
    <icon type="arrows-alt" pre="fa" family="fa"></icon> -->
    <one-line-button-group>
      <one-line-button type="primary" icon="piaofang"  @click="clicka">这是文字按钮</one-line-button>
      <one-line-button type="primary" icon="piaofang"  @click="clicka">这是文字按钮</one-line-button>
    </one-line-button-group>
    
  </div>
</template>

<script>
// import Hello from './hello';
import {Icon} from '@/packages/icon';
import {OneLineButton} from '@/packages/button';
import {OneLineButtonGroup} from '@/packages/button-group';
 
export default {
  components: {Icon,OneLineButton,OneLineButtonGroup},
  
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
