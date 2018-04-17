<template>
<div class="padding-l">
  <el-button @click="push1">1</el-button>
  <el-button @click="push2">2</el-button>
  <el-button @click="push3">3</el-button>
  <el-button @click="push4">4</el-button>
  <el-button @click="push5">5</el-button>
</div>
</template>
<script>
export default {
  methods:{
      push1(){
          this.$router.push('/main/demo/urlQuery');
      },
      push2(){
          this.$router.push({path:'/main/demo/urlQuery'});
      },
      push3(){
          this.$router.push({name:'main-demo-urlParams-id',params:{id:123}});
      },
      push4(){
          this.$router.push({path:`/main/demo/urlParams/123`});
      },
      push5(){
          this.$router.push({path:'/main/demo/urlQuery',query:{plan:'private'}});
      }
  }
}
</script>

