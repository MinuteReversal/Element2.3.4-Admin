<template>
 <div class="padding-l">
    <demo-list />
    <demo-list />
    <demo-form />
  </div>
</template>
<script>

import list from "./list.vue"
import form from "./form.vue"

export default {
    components:{
        'demo-list':list,
        'demo-form':form
    }
}
</script>

