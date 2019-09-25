<template>
  <div class="pager">
    <div class="pager-head">
      <ol-row :span="false" :block="true">
        <ol-col :width="200" cent="center">
          <h3>One Line</h3>
        </ol-col>
        <ol-col align="right" cent="vertical">
          <ol-row :block="false" :span="true" :gutter="20" width="auto" gutter-point="right">
            <ol-col><ol-icon type="liebiao" size="22px"></ol-icon></ol-col>
            <ol-col><ol-icon type="time" size="22px"/></ol-col>
             
            <ol-col align="right" cent="vertical">
              <a href="https://github.com/onelineteam/oneline-ui" target="_blank" class="link-light"><ol-icon type="github-fill" size="22px"></ol-icon></a>
            </ol-col>
          </ol-row>
        </ol-col>
      </ol-row>
    </div>
    <div class="pager-side">
      <h4>基本</h4>
      <ul>
        <li>
         <router-link to="/layout"><ol-icon type="shu_o" size="22px" color="#7c92a7"/> 布局（Layout）</router-link>
        </li>
        <li>
          <router-link to="/text"><ol-icon type="jianpan_o" size="22px" color="#7c92a7"/> 文字（Text）</router-link>
        </li>
        <li>
          <router-link to="/color"><ol-icon type="shitujuzhen_o" size="22px" color="#7c92a7"/> 颜色（Color）</router-link>
        </li>
        <li>
          <router-link :to="{name: 'icon'}"><ol-icon type="bianji_o" size="22px" color="#7c92a7"/> 图标（icon）</router-link>
        </li>
        <li>
          <router-link to="/animation"><ol-icon type="jiqiren_o" size="22px" color="#7c92a7"/>  动画（animation）</router-link>
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
