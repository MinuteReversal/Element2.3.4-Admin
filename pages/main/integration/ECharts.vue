<template>
  <div class="padding-l">
    <echarts />
  </div>
</template>
<script>
import ECharts from "~/components/ECharts.vue"

export default {
    data:()=>({
        
    }),
    components:{
        'echarts':ECharts
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
