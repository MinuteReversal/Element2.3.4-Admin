<template>
    <div>
        <el-select v-model="name">
          <el-option value="demo-list">list</el-option>
          <el-option value="demo-form">form</el-option>
        </el-select>
        <component :is="name"></component>
    </div>
</template>

<script>
import demoList from "../demo/list.vue"
import deomForm from "../demo/form.vue"
export default {
  data:()=>({
      name:"demo-form"
  }),
  methods:{
  },
  components:{
    'demo-list':demoList,
    'demo-form':deomForm
  }
}
</script>

