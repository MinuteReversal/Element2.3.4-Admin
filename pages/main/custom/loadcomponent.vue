<template>
    <div>
        <component :is="componentId"></component>
    </div>
</template>

<script>
let demoList= () => import("../demo/list.vue").then(m => m.default || m)

export default {
  data:()=>({
      componentId:'demo-list'
  }),
  components:{
      'demo-list':demoList
  }
}
</script>

