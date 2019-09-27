<template>
  <div style="height: 3000px; position: relative; border: #999 30px solid;">
    <!-- <icon type="piaofang"></icon>
    <icon type="arrows-alt" pre="fa" family="fa"></icon>
    <div style="margin: 80px; height: 500px; overflow: auto;border: #eee 20px solid; ">
      
       <h4 style="height: 300px;"></h4>
    </div> -->

    <radio v-model="radio" label='1'>单选框</radio>
    
  </div>
</template>

<script>
// import Hello from './hello';
import {Icon} from '@/packages/icon';
// import Popover from './popover.vue';
import {Radio} from '@/packages/radio' 
export default {
  components: {Icon,Radio},
  
  data() {
    return {
      title: "hello",
      radio:"1"
    };
  },
  mounted() {
    // console.log(Hello)
    setTimeout(() => {
      this.title = "this is test";
    }, 5000);
  }
};
</script>

<style>
html {
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>
