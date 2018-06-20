<template>
    <div>
        <div>
            <input id="isCheck" type="checkbox" v-model="isCheck"/><label for="isCheck">勾中我</label>
            <div v-if="isCheck">
                大家好
                <fieldset>
                    <legend>这里有个表单</legend>
                </fieldset>
            </div>
            <div v-else>
                hello
            </div>
        </div>
    </div>
</template>
<script>

//data,tempate
export default {
    data(){
        return {
            isCheck:false
        }
    }
}
</script>

