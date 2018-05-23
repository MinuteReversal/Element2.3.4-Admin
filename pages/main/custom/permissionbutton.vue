<template>
    <div>
        <el-button @click="onShow" v-permission="'showData1'">显示</el-button>
        <el-button v-if="canAdd()" @click="onAdd" >加入权限</el-button>
        <el-button v-else @click="onRemove" >删除权限</el-button>
        <el-button @click="onShowPermissions">显示权限集</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            permissionName:"showData1"
        };
    },
    methods:{
        canAdd(){
            return !this.$store.getters["modules/permission/contains"](this.permissionName);
        },
        onShow(){
            this.$alert("show");
        },
        onAdd(){
            this.$store.commit("modules/permission/add",this.permissionName);
        },
        onRemove(){
            this.$store.commit("modules/permission/delete",this.permissionName);
        },
        onShowPermissions(){
            this.$alert(JSON.stringify(this.$store.state.modules.permission.list));
        }
    },
    mounted(){
        window.vm=this;
    }
}
</script>
