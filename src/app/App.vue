<template>
  <div>hello, world! test

    <hello :outtitle="title"/>
  </div>
</template>

<script>
// import Hello from './hello';
 
export default {
  components: {Hello: ()=> import('./hello')},
  
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
