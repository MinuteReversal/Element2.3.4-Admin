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
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table v-bind:data="list.tableData"
                  border highlight-current-row
                  v-bind:default-sort="{prop: 'name', order: 'descending'}"
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
                    <el-button size="small"
                               v-on:click="onEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small"
                               type="danger"
                               v-on:click="onDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="clear"
                       v-on:size-change="handleSizeChange"
                       v-on:current-change="handleCurrentChange"
                       v-bind:current-page="list.currentPage"
                       v-bind:page-sizes="[100, 200, 300, 400]"
                       v-bind:page-size="100"
                       layout="total, sizes, prev, pager, next, jumper"
                       v-bind:total="400">
        </el-pagination>
    </div>
</template>
<script>
    export default{
        data() {
            return {
            search: {
                name: "",
                area: ""
            },
            list: {
                tableData: [],
                currentPage: 1
            }
            };
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
                this.list.tableData = [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }];
            }
        },
        mounted () {
            var me = this;
            me.getData();
        }
    };
</script>
    