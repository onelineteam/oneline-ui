<template>
  <div>
    <icon type="piaofang"></icon>
    <icon type="arrows-alt" pre="fa" family="fa"></icon>
  </div>
</template>

<script>
// import Hello from './hello';
import {Icon} from '@/packages/icon';
 
export default {
  components: {Icon},
  
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
  }
}
</script>

<style>

</style>
