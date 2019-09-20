<template>
<div>
  <ol-popover trigger="focus" :content="title">
    <!-- <button>{{title}}</button> -->
    <textarea  />
     
  </ol-popover>


   <ol-popover trigger="click">
    <button>goggogogogog</button>
    <div slot="title">hello</div>
    <div slot="content" @click="hello">come on</div>
    <div slot="content">引用的内容2=<br><br> <br>kadjsfljasdljfakldsjflkasdjf;lasd</div>
  </ol-popover>


  <ol-popover trigger="hands" :fixed="true" title="this is hand">
    <button>我是另外一个按钮</button>
 
    <div slot="content" @click="hello">引用的内容</div>
    <div slot="content">引用的内容2fsdfsdfdsfdfakj<br>fla;dsjflakdjsflkjadslkfjlakdsjfl<br>kadjsfljasdljfakldsjflkasdjf;lasd</div>
  </ol-popover>


</div>
</template>

<script>
export default {
  data() {
   return {
     title: "我是按钮",
     count: 0,
     date: new Date()
   }
  },
  components: {
    
  },
  mounted() {
    setInterval(()=>{
      this.title = "hello" + this.count;
      this.count++;
      this.date = new Date();
    }, 2000)
  },
  methods: {
    hello() {
      
    }
  }
}
</script>

<style>

</style>
