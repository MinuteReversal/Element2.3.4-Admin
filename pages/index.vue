<template>
 <div id="login" class="loginBody">
        <div class="login">
            <el-form :model="form" :rules="rules" ref="form" label-position="top">
                <header class="text-align-center">
                    <h3>用户登录</h3>
                </header>
                <div>
                    <el-form-item label="帐号" prop="username">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="passwords">
                        <el-input type="password" v-model="form.passwords" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="form.isRemember">记住密码</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @keydown.13="login" @click="login" class="col-12" :loading="loading">登录</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
import webConfig from "~/static/webConfig"
import apiConfig from "~/static/apiConfig"
import md5 from "~/static/javascript/md5"
export default {
  data() {
    return {
      loading: false,
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        passwords: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ]
      },
      form: {
        username: "114233763",
        passwords: "12345678",
        isRemember: true
      }
    };
  },
  methods: {
    login() {
      var me = this;
      console.log(me.$refs.form);
      me.$refs.form.validate(valid => {
        if (valid) {
          me.authUser();
          return true;
        } else {
          return false;
        }
      });
    },
    authUser() {
      var me = this;
      var postData = {
        userName: me.form.username,
        passwordMd5: md5(me.form.passwords)
      };
      me.$http.get(apiConfig.user_login, postData).then(response => {
        me.$router.push("/main");
      });
    }
  },
  mounted() {
    document.title = webConfig.systemName;
  }
}
</script>