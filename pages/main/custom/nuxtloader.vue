<template>
  <div>
      <!--<nuext-loader path="/main/demo/list"></nuext-loader>-->
      <el-input v-model="name"></el-input>
      
  </div>
</template>
<script>
import nuextLoader from '~/components/nuxt-loader'
import list from "../demo/list.vue"

export default {
  data:()=>({
    name:list
  }),
  components:{
      nuextLoader
  }
}
</script>

