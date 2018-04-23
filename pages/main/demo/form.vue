<template>
<div class="padding-l">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="生日">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
    </el-form-item>
    <el-form-item label="身高">
      <el-input-number v-model="form.stature"></el-input-number>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio class="radio" v-model="form.gender" label="female">女</el-radio>
      <el-radio class="radio" v-model="form.gender" label="male">男</el-radio>
    </el-form-item>
    <el-form-item label="婚否">
      <el-checkbox v-model="form.isMarried">已婚</el-checkbox>
    </el-form-item>
    <el-form-item label="爱好">
      <el-checkbox-group v-model="form.favorite">
        <el-checkbox label="音乐"></el-checkbox>
        <el-checkbox label="足球"></el-checkbox>
        <el-checkbox label="篮球"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="昆明" value="kunming"></el-option>
        <el-option label="呈贡" value="chenggong"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.language" multiple placeholder="掌握的编程语言">
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
    <div>
      <el-button @click="onShow">显示数据</el-button>
      <el-button @click="onSave">保存数据</el-button>
    </div>
  </el-form>
</div>
</template>
<script>
export default {
  props:{
      params:{
        type:Object,
        default:()=>({})
      }
  },
  data:()=>({
      form: {
        name: '反转的分针',
        birthday: new Date('1985-04-06'),
        stature: 173,
        gender: 'male',
        isMarried: false,
        favorite: ['音乐'],
        region: 'chenggong',
        language: ['C', 'Java',"C++"]
      }
  }),
  methods: {
    onShow () {
      this.$alert(JSON.stringify(this.form))
    },
    onSave(){
      this.$emit("confirm",this.form);
    }
  },
  mounted(){
    console.log("mounted");
    this.$alert(JSON.stringify(this.$route.query));
  }
}
</script>