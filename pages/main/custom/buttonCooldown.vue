<template>
<div class="padding-xl">
    <button-cooldown @click="$alert('短信已发送')">发送短信</button-cooldown>
    <button-cooldown type="primary" @click="$alert('短信已发送')">发送短信</button-cooldown>
    <el-button type="success" @click="$alert('world')">hello</el-button>
</div>
</template>
<script>
import ButtonCooldown from "~/components/ButtonCooldown.vue"
export default {
    components:{
        'button-cooldown':ButtonCooldown
    }
}
</script>