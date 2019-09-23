<template>
  <div class="layout-demo">
    <h3>布局（Layout）</h3>
    <hr>
    <p>布局，我们没有遵循以往的栅格化形式去处理。 这种形式个人在实际运用中， 代码过于臃肿。需要更多的代码来处理内部的结构样式。所以我们做了不一样的处理方式。</p>
    
    <h4>平分</h4>
    <p><code>col</code>在<code>row</code>中， 会根据<code>col</code>的数量来决定<code>col</code>的宽度(平分<code>row</code>的宽度）。</p>
    <ol-row class="layout-row" :gutter="20">
      <ol-col></ol-col>
      <ol-col></ol-col>
      <ol-col></ol-col>
      <ol-col></ol-col>
      <ol-col></ol-col>
      <ol-col></ol-col>
    </ol-row>

    <h4>不平分</h4>
    <p>如果<code>col</code>的宽度由开发者自定义处理， 我们需要将<code>span</code>设置为<code>false</code>. 如果不设置<code>col</code>宽度。他们为自适应</p>
    <ol-row class="layout-row" :span="false" :gutter="20">
      <ol-col> </ol-col>
      <ol-col>
        Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

If you’d like to learn more about Vue before diving in, we created a video walking through the core principles and a sample project.

If you are an experienced frontend developer and want to know how Vue compares to other libraries/frameworks, check out the Comparison with Other Frameworks.
      </ol-col>
      <ol-col></ol-col>
      <ol-col></ol-col>
      <ol-col> </ol-col>
      <ol-col> </ol-col>
    </ol-row>


    <h4>固定左边</h4>
    <p>固定左边的宽度。 这时候需要设定row的span为false, 设置左边col的width为固定的宽度。 右边不设定， 则自适应。</p>
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
      <ol-col></ol-col>
      <ol-col></ol-col>
      <ol-col></ol-col>
      <ol-col></ol-col>
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
        overflow: auto;
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
