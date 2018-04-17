<template>
  <div class="padding-l">
        <el-table :data="tableData5">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <demo-list :paramaters="props"/>
                    <demo-form :paramaters="props"/>
                </template>
            </el-table-column>
            <el-table-column label="商品 ID"
                             prop="id">
            </el-table-column>
            <el-table-column label="商品名称"
                             prop="name">
            </el-table-column>
            <el-table-column label="描述"
                             prop="desc">
            </el-table-column>
        </el-table>
  </div>
</template>
<script>
import list from "./list.vue"
import form from "./form.vue"

export default {
  data:()=>({
      tableData5: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }]
  }),
  components:{
      'demo-list':list,
      'demo-form':form
  }
}
</script>
<style scoped>
.demo-table-expand {
                font-size: 0;
            }

                .demo-table-expand label {
                    width: 90px;
                    color: #99a9bf;
                }

                .demo-table-expand .el-form-item {
                    margin-right: 0;
                    margin-bottom: 0;
                    width: 50%;
                }
</style>
