<template>
  <div class="layout-demo">
    <h4>平分</h4>
    <ol-row class="layout-row" :gutter="20">
      <ol-col>1111111</ol-col>
      <ol-col>11111111</ol-col>
      <ol-col>11111111</ol-col>
      <ol-col>11111111</ol-col>
      <ol-col>11111111</ol-col>
      <ol-col>11111111</ol-col>
    </ol-row>
    <h4>不平分</h4>
    <ol-row class="layout-row" :span="false" :gutter="20">
      <ol-col>1111111</ol-col>
      <ol-col>
        111111111111111
        <div>fsdljfklsdkjflksdjlfjsdlfjlksdjflsjdlkfjsdljflsdjl</div>1111111111111111111
      </ol-col>
      <ol-col>11111111</ol-col>
      <ol-col>11111111</ol-col>
      <ol-col>11111111</ol-col>
      <ol-col>11111111</ol-col>
    </ol-row>
    <h4>固定左边</h4>
    <ol-row :span="false" class="layout-row">
      <ol-col :width="300">左边</ol-col>
      <ol-col>右边</ol-col>
    </ol-row>
    <h4>固定左边，固定右边</h4>
    <ol-row :span="false" class="layout-row" :gutter="20">
      <ol-col :width="300">左边</ol-col>
      <ol-col>中间</ol-col>
      <ol-col :width="300">右边</ol-col>
    </ol-row>
    <h3>上下</h3>
    <ol-row :span="false" class="layout-row" :break="['sm']" wrap="wrap">
      <ol-col width="100%">上</ol-col>
      <ol-col width="100%">下</ol-col>
    </ol-row>
    <h4>上下</h4>
    <ol-row :span="false" class="layout-row" :break="['sm']" wrap="wrap">
      <ol-col width="100%">上</ol-col>
      <ol-col width="20%">左</ol-col>
      <ol-col>中kgjfdlkgjdlfkjgldfkjglkdfjglkdjflgjdflk<br>gjdlfkjgldfkjglkdf<br>jglkdjfglkdf<br>jglkjdflgkjdlfkjgldkfjl</ol-col>
      <ol-col width="20%" style="margin-right:0!important">右边</ol-col>
      <ol-col width="100%">下边</ol-col>
    </ol-row>
    <h4>响应式</h4>
    <ol-row class="layout-row" :span="false" :gutter="20" :break="['sm']">
      <ol-col>1111111</ol-col>
      <ol-col>11111111</ol-col>
      <ol-col>11111111</ol-col>
      <ol-col>11111111</ol-col>
    </ol-row>
    <!-- 
        break: [], 默认， sm(576), md(768), lg(992), xl(1200)
        span: 0, 默认， 1-12
       -->
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .layout-demo {
    .layout-row {
      margin-bottom: 50px;
      .ol-col {
        height: 8rem;
        // border-radius: 5px;
      }
    }
    .layout-row>*:nth-child(odd) {
      background-color: #80bdff;
    }
    .layout-row>*:nth-child(even) {
      background-color: #957bbe;
    }
  }
</style>
