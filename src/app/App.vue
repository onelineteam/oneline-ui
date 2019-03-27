<template>
  <div>
    <!-- <icon type="piaofang"></icon> -->
    <icon type="arrows-alt" pre="fa" family="fa"></icon>
    <radio></radio>
  </div>
</template>

<script>
// import Hello from './hello';
import { Icon } from "@/packages/icon";
import { Radio } from "@/packages/radio";

export default {
  // components: { Icon },
  components: { Radio, Icon },
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
</style>
