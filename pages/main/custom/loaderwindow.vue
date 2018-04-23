<template>
  <div>
      <el-input v-model="path"/>
      <el-button @click="onOpen">打开窗口</el-button>
  </div>
</template>
<script>
export default {
  data:()=>({
      path:"/main/demo/form?id=123"
  }),
  methods:{
      onOpen(){
          this.$loaderwindow(this.path).then((evt)=>{this.$alert(JSON.stringify(evt))}).catch(()=>{this.$alert("catch")});
      }
  }
}
</script>

