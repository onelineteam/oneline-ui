<template>

  <div>
    <router-link path="/icon">icon</router-link>
    <router-link path="/button">button</router-link>
    <router-link path="/input">input</router-link>
    <router-link path="/popover">popover</router-link>
    
    <router-view></router-view> 

  
  </div>
</template>

<script>
 
 
 
export default {
   
  
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
html {
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>
