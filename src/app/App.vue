<template>
<<<<<<< HEAD
  <div>
    <!-- <icon type="piaofang"></icon> -->
    <icon type="arrows-alt" pre="fa" family="fa"></icon>
    <radio></radio>
=======
  <div style="height: 3000px; position: relative; border: #999 30px solid;">
    <icon type="piaofang"></icon>
    <icon type="arrows-alt" pre="fa" family="fa"></icon>
    <div style="margin: 80px; height: 500px; overflow: auto;border: #eee 20px solid; ">
       <popover> </popover>
       <h4 style="height: 300px;"></h4>
    </div>

    <div style="position: absolute;">fsdklfjsdlkfjslkdjflskdjflksjdlfdsfsdfsd</div>
    
>>>>>>> wutongwei_popover
  </div>
</template>

<script>
// import Hello from './hello';
<<<<<<< HEAD
import { Icon } from "@/packages/icon";
import { Radio } from "@/packages/radio";

export default {
  // components: { Icon },
  components: { Radio, Icon },
=======
import {Icon} from '@/packages/icon';
import Popover from './popover.vue';
 
export default {
  components: {Icon, Popover},
  
>>>>>>> wutongwei_popover
  data() {
    return {
      title: "hello"
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
<<<<<<< HEAD
=======
html {
  position: fixed;
  height: 100%;
  width: 100%;
}
>>>>>>> wutongwei_popover
</style>
