<template>
  <div>
    <el-select v-model="path">
        <el-option value="/main/demo/list">list</el-option>
        <el-option value="/main/demo/form">form</el-option>
    </el-select>
    <nuxt-loader :path="path"></nuxt-loader>
  </div>
</template>
<script>
import nuxtLoader from '~/components/nuxt-loader'

export default {
  data:()=>({
    path:"/main/demo/list"
  }),
  components:{
      nuxtLoader
  }
}
</script>