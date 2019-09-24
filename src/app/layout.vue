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
    <p>固定左边的宽度。 这时候需要设定<code>row</code>的<code>span</code>为<code>false</code>, 设置左边<code>col</code>的<code>width</code>为固定的宽度。 右边不设定， 则自适应。</p>
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

       <h4>Row属性说明</h4>
       <table>
          <thead>
            <tr>
              <th>属性</th>
              <th>类型</th>
              <th>默认值</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>span</td>
              <td>boolean</td>
              <td>true</td>
              <td>行下面的所有列是否平分宽度</td>
            </tr>
            <tr>
              <td>gutter</td>
              <td>number</td>
              <td>0</td>
              <td>列之间的间隙的宽度</td>
            </tr>
            <tr>
              <td>gutterPoint</td>
              <td>'all'|'left'|'right'|'zero'</td>
              <td>zero</td>
              <td>两端间隙的控制. all两端都有间隙， left左端间隙， right右端间隙， zero左右两端没有间隙</td>
            </tr>
            <tr>
              <td>break</td>
              <td>string[]</td>
              <td>[]</td>
              <td>目前为预留功能.(作为响应式处理)</td>
            </tr>
            <tr>
              <td>block</td>
              <td>boolean</td>
              <td>false</td>
              <td>行是否为inline或者block.</td>
            </tr>
            <tr>
              <td>wrap</td>
              <td>'nowrap'|'wrap'</td>
              <td>nowrap</td>
              <td>是否断行。（所有列铺满后是否断行。）</td>
            </tr>
            <tr>
              <td>width</td>
              <td>number/string</td>
              <td>100%</td>
              <td>行的宽度设置。</td>
            </tr>
          </tbody>
       </table>
       <hr>
       <h4>Col属性说明</h4>
       <!-- @Prop({ default: 0}) width?: number|string;
  @Prop({default: 'flex'}) type?: "flex";
  @Prop({default: 'center'}) cent?: 'vertical'|'horizontal'|'center';
  @Prop({ default: 'left'}) align?: 'center'|'left'|'right'; -->
       <table>
         <thead>
           <tr>
             <th>属性</th>
             <th>类型</th>
             <th>默认值</th>
             <th>说明</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>width</td>
             <td>number/string</td>
             <td>0</td>
             <td>设置列的宽度。</td>
           </tr>
           <tr>
             <td>type</td>
             <td>'flex'</td>
             <td>flex</td>
             <td>目前默认为flex. 也是一个固定值。</td>
           </tr>
           <tr>
             <td>cent</td>
             <td>'vertical'|'horizontal'|'center'</td>
             <td>center</td>
             <td>水平/垂直居中方式</td>
           </tr>
           <tr>
             <td>align</td>
             <td>'center'|'left'|'right'</td>
             <td>left</td>
             <td>水平内容的左、右、居中。</td>
           </tr>
         </tbody>
       </table>
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
