<template>
  <el-dialog :title="title" :visible.sync="visible" :modal="true" @close="onClose">
    <nuxt-loader :path="path"></nuxt-loader>
  </el-dialog>
</template>
<script>
import nuxtloader from "../nuxt-loader"

export default {
  data:()=>({
      title:"window",
      visible:false,
      path:""
  }),
  methods:{
    onClose(){
      this.$emit("cancel",{target:this,model:null})
    },
    onConfirm(evt){
        this.$emit("confirm",evt)
    },
    onCancel(evt){
        this.$emit("cancel",evt)
    }
  },
  components:{
    'nuxt-loader':nuxtloader
  },
  mounted(){
    console.log("mounted");
    this.$nextTick(()=>{
      this.visible=true
    })
  }
}
</script>