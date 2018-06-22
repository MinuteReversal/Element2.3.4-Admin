<template>
    <div>
        <button @click="onAdd">添加人</button>
        <div v-for="(item,index) in totalRow" :key="index" >
            <el-input v-model="item.name" />
            <el-input v-model="item.age" />
            <el-button @click="onDelete">删除</el-button>
        </div>
            <div>
      <el-button @click="onShow">显示数据</el-button>
      <el-button @click="onSave">保存数据</el-button>
    </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        totalRow:[
            {name: "张三",age:18},
            {name:"李四",age:38},
            {name:"王五",age:11}
        ]
    }),
    methods:{
        onAdd(){
            this.totalRow.push({
                name:new Date().getTime(),
                age:Math.random()
            });
        },
                onShow () {
        this.$alert(JSON.stringify(this.$data))
        },
        onSave(){
        this.totalRow=[];
        },
        onDelete(item,index){
            this.$confirm(`确定删除${item.name}`)
            .then(()=>{
                this.list.splice(index,1);
            })
            .catch(()=>{
                this.$message({message:"用户取消了删除"})
            });
        }
    }
}
</script>

<style>

</style>
