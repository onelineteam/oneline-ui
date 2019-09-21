<template>
  <div class="pager">
    <div class="pager-head">
      <ol-row :span="false" :block="true">
        <ol-col :width="200" cent="center">
          <h3>One Line</h3>
        </ol-col>
        <ol-col></ol-col>
      </ol-row>
    </div>
    <div class="pager-side">
      <h4>基本</h4>
      <ul>
        <li>
          <router-link to="/layout">布局（Layout）</router-link>
        </li>
        <li>
          <router-link to="/text">文字（Text）</router-link>
        </li>
        <li>
          <router-link to="/color">颜色（Color）</router-link>
        </li>
        <li>
          <router-link :to="{name: 'icon'}">图标（icon）</router-link>
        </li>
      </ul>
      <h4>表单</h4>
      <ul>
        <li>
          <router-link to="/button">button</router-link>
        </li>
        <li>
          <router-link to="/input">input</router-link>
        </li>
      </ul>
      <h4>定位</h4>
      <ul>
        <li>
          <router-link to="/popover">popover</router-link>
        </li>
      </ul>
    </div>
    <div class="pager-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
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
  html {
    height: 100%;
    width: 100%;
  }
</style>
