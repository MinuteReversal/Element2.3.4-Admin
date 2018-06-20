<template>
    <div>
        <button @click="onAdd">添加人</button>
        <div v-for="(item,index) in totalRow" :key="index" >
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        totalRow:[
            {name: "张三"},
            {name:"李四"},
            {name:"王五"}
        ]
    }),
    methods:{
        onAdd(){
            this.totalRow.push({
                name:new Date().getTime()
            });
        }
    }
}
</script>

<style>

</style>
