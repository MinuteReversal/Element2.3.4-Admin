<template>
    <div>
        <div>
            <button @click="type=0">0</button>
            <button @click="type=1">1</button>
            <button @click="type=2">2</button>
            <div v-if="type===0">
                0
            </div>
            <div v-else-if="type===1">
                1
            </div>
            <div v-else>
                other
            </div>
        </div>
    </div>
</template>
<script>

//data,tempate
export default {
    data(){
        return {
            type:0
        }
    }
}
</script>

