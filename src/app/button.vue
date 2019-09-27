<template>
  <div>

    <p>
      <ol-button type="primary" round shadow>primary</ol-button>
      <ol-button type="secondary" round shado>secondary</ol-button> 
      <ol-button type="success" round>success</ol-button>
      <ol-button type="danger" round>danger</ol-button>
      <ol-button type="warning" round>warning</ol-button>
      <ol-button type="info" round>info</ol-button>
      <ol-button type="pink" round>pink</ol-button>
      <ol-button type="purple" round>purple</ol-button>
      <ol-button type="light" round>light</ol-button>
      <ol-button type="white" round>white</ol-button>
      <ol-button type="dark" round>dark</ol-button>
    </p>

      <p>
      <ol-button type="primary" round hollow>primary</ol-button>
      <ol-button type="secondary" round hollow>secondary</ol-button> 
      <ol-button type="success" round hollow>success</ol-button>
      <ol-button type="danger" round hollow>danger</ol-button>
      <ol-button type="warning" round hollow>warning</ol-button>
      <ol-button type="info" round hollow>info</ol-button>
      <ol-button type="pink" round hollow>pink</ol-button>
      <ol-button type="purple" round hollow>purple</ol-button>
      <ol-button type="light" round hollow>light</ol-button>
      <ol-button type="white" round hollow>white</ol-button>
      <ol-button type="dark" round hollow shadow>dark</ol-button>
    </p>

    <p>
      <ol-button type="success" left-icon="alipay" hollow size="big">大按钮（big）</ol-button>
      <ol-button type="success" left-icon="alipay">按钮（normal）</ol-button>
      <ol-button type="secondary" right-icon="alipay" round hollow size="medium">中按钮（medium）</ol-button>
      <ol-button type="danger" left-icon="alipay" round hollow shadow size="small">小按钮(small)</ol-button>

    </p>
    <p>
      <ol-button type="primary" left-icon="piaofang"  @click="clicka" round>这是文字按钮</ol-button>
      <ol-button type="success" icon="alipay"  @click="clicka" circle>这是文字按钮</ol-button>
      <ol-button type="primary" left-icon="piaofang" right-icon="alipay" @click="clicka" round>这是文字按钮</ol-button>
      <ol-button type="danger" right-icon="piaofang"  @click="clicka">这是文字按钮</ol-button>
      <ol-button type="purple" left-icon="piaofang" right-icon="piaofang" icon="piaofang"  @click="clicka"></ol-button>
      <ol-button type="pink" icon="search" round disabled/>
      <ol-button type="success" icon="alipay"  @click="clicka" circle disabled>这是文字按钮</ol-button>
      <ol-button type="success" icon="alipay"  @click="clicka" circle shadow>这是文字按钮</ol-button>
    </p>

    <p>
      <ol-button type="dark" icon="github-fill" size="big" circle/>
      <ol-button type="primary" icon="alipay" circle size="medium"/>
      <ol-button type="danger" icon="weibo" circle/>
      <ol-button type="warning" icon="taobao" circle hollow/>
      <ol-button type="pink" icon="twitter" circle size="small"/>
      
    </p>

    <p>
       <ol-button text type="primary" left-icon="alipay">支付</ol-button>
       <ol-button text type="secondary">按钮</ol-button>
       <ol-button text type="danger">按钮</ol-button>
       <ol-button text type="success">按钮</ol-button>
       <ol-button text type="info">按钮</ol-button>
       <ol-button text type="pink">按钮</ol-button>
       <ol-button text type="purple">按钮</ol-button>
       <ol-button text type="dark">按钮</ol-button>
       <ol-button text type="warning">按钮</ol-button>
    </p>

  </div>
</template>

<script>
export default {
 methods: {
   clicka: function() {

   }
 }
}
</script>

<style>

</style>
