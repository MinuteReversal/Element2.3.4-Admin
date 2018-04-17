<template>
      <p>欢迎使用{{systemName}},点击左侧菜单进行导航。</p>
</template>
<script>
import webConfig from "~/static/webConfig"

export default {
    data:()=>({
        systemName:webConfig.systemName        
    })
}
</script>