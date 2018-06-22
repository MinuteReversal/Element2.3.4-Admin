<template>
    <div>
        <el-input type="text" v-model="ruleForm.title" />
        <div>
            <el-button icon="plus" @click="onAdd">添加</el-button>
        </div>
<el-form v-for="(item,index) in ruleForm.list" :key="index" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="item.name"></el-input>
    </el-form-item>
    <el-form-item label="生日">
      <el-date-picker type="date" placeholder="选择日期" v-model="item.birthday" style="width: 100%;"></el-date-picker>
    </el-form-item>
    <el-form-item label="身高">
      <el-input-number v-model="item.stature"></el-input-number>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio class="radio" v-model="item.gender" label="female">女</el-radio>
      <el-radio class="radio" v-model="item.gender" label="male">男</el-radio>
    </el-form-item>
    <el-form-item label="婚否">
      <el-checkbox v-model="item.isMarried">已婚</el-checkbox>
    </el-form-item>
    <el-form-item label="爱好">
      <el-checkbox-group v-model="item.favorite">
        <el-checkbox label="音乐"></el-checkbox>
        <el-checkbox label="足球"></el-checkbox>
        <el-checkbox label="篮球"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="item.region" placeholder="请选择活动区域">
        <el-option label="昆明" value="kunming"></el-option>
        <el-option label="呈贡" value="chenggong"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="item.language" multiple placeholder="掌握的编程语言">
        <el-option value="Basic">Basic</el-option>
        <el-option value="C">C</el-option>
        <el-option value="C++">C++</el-option>
        <el-option value="C#">C#</el-option>
        <el-option value="Java">Java</el-option>
        <el-option value="Javascript">Javascript</el-option>
        <el-option value="Python">Python</el-option>
        <el-option value="Ruby">Ruby</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动区域">
        <el-button type="danger" @click="onDelete(item,index)">删除</el-button>
    </el-form-item>
</el-form>
  <div>
      <el-button @click="onShow">显示数据</el-button>
      <el-button @click="onSave">保存数据</el-button>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ruleForm:{
            title:"abcdef",
            list:[
                       {name: '反转的分针',
                        birthday: new Date('1985-04-06'),
                        stature: 173,
                        gender: 'male',
                        isMarried: false,
                        favorite: ['音乐'],
                        region: 'chenggong',
                        language: ['C', 'Java',"C++"]
                        }
            ]
}
        }
    },
      methods: {
        onShow () {
        this.$alert(JSON.stringify(this.$data))
        },
        onSave(){
        this.ruleForm={"title":"abcdef","list":[{"name":"反转的分针","birthday":"1985-04-06T00:00:00.000Z","stature":173,"gender":"male","isMarried":false,"favorite":["音乐"],"region":"chenggong","language":["C","Java","C++"]},{"name":"elme","birthday":"1985-04-06T00:00:00.000Z","stature":172,"gender":"female","isMarried":false,"favorite":["音乐","足球"],"region":"kunming","language":["C","Java"]}]}
        },
        onAdd(){
            this.list.push({name: '反转的分针',
                        birthday: new Date('1985-04-06'),
                        stature: 173,
                        gender: 'male',
                        isMarried: false,
                        favorite: ['音乐'],
                        region: 'chenggong',
                        language: ['C', 'Java',"C++"]
                        });
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
  },
}
</script>

<style>

</style>
