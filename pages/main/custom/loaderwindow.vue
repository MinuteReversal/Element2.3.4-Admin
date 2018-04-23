<template>
  <div>
      <el-input v-model="path"/>
      <el-button @click="onOpen">打开窗口</el-button>
  </div>
</template>
<script>
export default {
  data:()=>({
      path:"/main/demo/list?id=123"
  }),
  methods:{
      onOpen(){
          this.$loaderwindow(this.path).then(()=>{this.$alert("then")}).catch(()=>{this.$alert("catch")});
      }
  }
}
</script>

