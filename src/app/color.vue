<template>
  <div class="color-example">
    <h3>颜色（Color)</h3>
    <hr>
    <p class="lead">颜色设定了：primary, secondary, success, warning, danger, info, dark, pink, purple, light. </p>

    <h4>色块</h4>
    <p>
      <span class="color background-primary">primary</span>
      <span class="color background-secondary">secondary</span>
      <span class="color background-success">success</span>
      <span class="color background-warning">warning</span>
      <span class="color background-danger">danger</span>
      <span class="color background-info">info</span>
      <span class="color background-dark">dark</span>
      <span class="color background-pink">pink </span>
      <span class="color background-purple">purple</span>
      <span class="color background-light">light</span>
    </p>
    <h4>文字颜色</h4>
    <p>
      <span class="color color-text-main"></span>
      <span class="color color-text-secondary"></span>
      <span class="color color-text-normal"></span>
    </p>
    <h4>边框颜色</h4>
    <p>
      <span class="color color-border">主要边框颜色</span>
    </p>
  </div>
  <!-- primary: #4d79f6 -> #fff
             secondary: #4ac7ec -> #fff
             success: #1ecab8 -> #fff
             warning: #f3c74d -> #fff
             info: #9ba7ca -> #fff
             danger: #f1646c -> #fff
             dark: #2f4686 -> #fff
             light: #f1f5fa -> #50649c
             link: #fff -> #8997bd
              pink: rgba(255,93,160,.1) -> #ff5da0
              purple: #7551e9 -> #fff -->
</template>

<script>
  export default {};
</script>

<style lang="scss">
  @import "@/style/_oneline-color.scss";
  .color-example {
    margin-top: 20px;
  }
  .color {
    // display: inline-block;
    width: 80px;
    height: 80px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    // color: #fff;
    // &-primary {
    //   background-color: $color-primary;
    // }
    // &-secondary {
    //   background-color: $color-secondary;
    // }
    // &-success {
    //   background-color: $color-success;
    // }
    // &-warning {
    //   background-color: $color-warning;
    // }
    // &-danger {
    //   background-color: $color-danger;
    // }
    // &-info {
    //   background-color: $color-info;
    // }
    // &-pink {
    //   background-color: $color-pink;
    // }
    // &-dark {
    //   background-color: $color-dark;
    // }
    // &-light {
    //   background-color: $color-light;
    //   color: $color-muted;
    // }
    // &-purple {
    //   background-color: $color-purple;
    // } // display
    &-border {
      background-color: $color-border-main;
    }
    &-text {
      &-main {
        background-color: $color-text-main;
      }
      &-secondary {
        background-color: $color-text-secondary;
      }
      &-normal {
        background-color: $color-text-normal;
      }
    }
  }
</style>
