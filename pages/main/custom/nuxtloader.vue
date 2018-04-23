<template>
  <div>
    <el-select v-model="path">
        <el-option value="/main/demo/list?id=123">list</el-option>
        <el-option value="/main/demo/form?id=456">form</el-option>
    </el-select>
    <nuxt-loader :path="path"></nuxt-loader>
  </div>
</template>
<script>
import nuxtLoader from '~/components/nuxt-loader'

export default {
  data:()=>({
    path:"/main/demo/list?id=123"
  }),
  components:{
      nuxtLoader
  }
}
</script>