<template>
<div class="padding-l">
        <el-row class="padding-l">
            <el-col :span="12">
                <span class="font-weight-blder">列表</span>
            </el-col>
            <el-col :span="12">
                <el-breadcrumb separator="/" class="float-right">
                    <el-breadcrumb-item to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-form :inline="true" v-model="search" class="background-color-minor margin-bottom-m padding-m">
            <el-form-item prop="name">
                <el-input placeholder="审批人" v-model="search.name"></el-input>
            </el-form-item>
            <el-form-item prop="area">
                <el-select placeholder="活动区域" v-model="search.area">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="getData">查询</el-button>
                <el-button type="primary" icon="el-icon-plus">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="list.tableData"
                  border highlight-current-row
                  :default-sort="{prop: 'name', order: 'descending'}"
                  class="col-12">
            <el-table-column type="selection"
                             width="55">
            </el-table-column>
            <el-table-column prop="date"
                             label="日期"
                             width="180">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             sortable
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             label="地址">
            </el-table-column>
            <el-table-column label="操作"
                             fixed="right"
                             width="400">
                <template slot-scope="scope">
                    <el-button size="small" icon="el-icon-edit" @click="onEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" icon="el-icon-delete"  @click="onDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="clear"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="list.currentPage"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="400">
        </el-pagination>
    </div>
</template>
<script>
    import axios from "axios"
    export default{
        data:() =>({
            search: {
                name: "",
                area: ""
            },
            list: {
                tableData: [],
                currentPage: 1
            }
        }),
        sync(){
            this.getData();
        },
        methods: {
            /*
            * 改变
            */
            handleSizeChange () {

            },
            handleCurrentChange() {

            },
            onEdit (i, m) {
                var me = this;

            },
            onDelete (i, m) {
                var me = this;
                me.$confirm("确定删除？", "确定");
            },
            getData () {
                axios.get("/data/demolist.json").then(response=>{
                    this.list.tableData=response.data.Data;
                })
            }
        },
        mounted () {
            var me = this;
            console.log("list mounted");
            me.getData();
            this.$alert(JSON.stringify(this.$route.query));
        }
    };
</script>
    