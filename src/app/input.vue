<template>
   <div class="input-demo">
     <ol-input>
       <template slot="prefix">我们</template> 
       <span slot="suffix">hello</span>
     </ol-input>
     <ol-input>
        <template slot="prefix"><ol-icon type="alipay" size="20px"></ol-icon></template>
     </ol-input>

     <ol-input>
        <template slot="prefix"><ol-icon type="search" size="16px"></ol-icon></template>
     </ol-input>

     <ol-input>
       <template slot="prefix">
         <select class="">
           <option value="">1</option>
           <option value="">1</option>
           <option value="">1</option> 
         </select>
       </template>
     </ol-input>


     <ol-input>
       <template slot="suffix">
           <ol-button text type="secondary">按钮</ol-button>
       </template>
     </ol-input>
   </div>
</template>

<script>
export default {

}
</script>

<style>
 .input-demo {
   background-color: #fff;
   padding: 30px;
 }
</style>
