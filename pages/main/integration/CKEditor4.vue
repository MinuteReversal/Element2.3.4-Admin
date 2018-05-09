<template>
  <div class="padding-l">
    <ckeditor v-model="html" height="300px"/>
    <el-button @click="onShow">显示值</el-button>
    <el-button @click="onSet">设置值</el-button>
  </div>
</template>
<script>
import CKEditor from "~/components/CKEditor4.vue"

export default {
    data:()=>({
        html:"<p>hello world</p>"
    }),
    components:{
        'ckeditor':CKEditor
    },
    methods:{
        onShow(){
            this.$alert(this.html);
        },
        onSet(){
            this.html="1234567890";
        }
    }
}
</script>

