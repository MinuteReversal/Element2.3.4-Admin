<template>
  <div id="index" class="page">
        <header class="background-color-main">
            <span class="color-white font-size-xxl padding-xl menu-width">{{systemName}}</span>
            <nav class="color-white user-info">
                <div class="padding-left-right-xl">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link color-white">
                            <span>{{userName}}<img class="avatar margin-left-l" src="images/avatar.jpg" /></span>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="ChangePassword">修改密码</el-dropdown-item>
                            <el-dropdown-item command="a">修改资料</el-dropdown-item>
                            <el-dropdown-item command="Exit">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </nav>
        </header>
        <aside class="menu">
            <el-col :span="24">
                <el-menu :default-active="menuIndex" ref="elMenu">
                    <template v-if="menus.length" v-for="(menu,i) in menus">
                        <el-submenu v-if="menu.ChildrenModels.length" :index="i.toString()" :key="i">
                            <template slot="title">
                                <i :class="[menu.Icon]"></i>{{menu.DisplayName}}
                            </template>
                            <el-menu-item v-for="(child,j) in menu.ChildrenModels" :index="i+'-'+j" :key="j" @click="nav(child)">
                                {{child.DisplayName}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="i.toString()" :key="i"><i :class="[menu.Icon]"></i>{{menu.DisplayName}}</el-menu-item>
                    </template>
                </el-menu>
            </el-col>
        </aside>
        <div class="subPage">
            <nuxt-child/>
        </div>
    </div>
</template>
<script>
import webConfig from "~/static/webConfig"
import apiConfig from "~/static/apiConfig"
import md5 from "~/static/javascript/md5"
import $f from "~/static/javascript/framework"

export default {
    data() {
        return {
            systemName: webConfig.systemName,
            userName: "",
            menus: [],
            menuIndex: "",
            history: []
        };
    },
    mounted() {
        this.loadMenu();
    },
    methods: {
        loadMenu () {
            var me = this;
            me.$http.get(apiConfig.user_info).then(response=> {
                me.menus = response.data.Data.UserMenuModels;
                me.selectMenuByUrl(me.$route.path);
            });
        },
        nav(model){
            this.$router.push(model.ActionUrl);
        },
        getMenuIndexByUrl (url, menus,index) {
            var me = this;
            for (var i = 0, m; m = menus[i];i++) {
                var idx= index.length=== 0 ? `${i}` : `${index}-${i}`;
                if(url===m.ActionUrl)return idx;
                if (m.ChildrenModels.length) {
                   var path= me.getMenuIndexByUrl(url, m.ChildrenModels,idx);
                   if(path!=="") return path;
                }
            }
            return "";
        },
        selectMenuByUrl (url) {
            var index=this.getMenuIndexByUrl(url,this.menus,"");
            this.menuIndex=index;
        },
        handleCommand (command) {
            var me=this;
            switch (command) {
                case "ChangePassword":
                    this.loadPage("/wwwroot/Account/ChangePassword.html");
                    break;
                case "Exit":
                    this.$confirm('确定退出登录？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(()=> {
                        me.$router.push("/");
                    }).catch( ()=> {

                    });
                    break;
                default:
                    break;
            }
        }
    }
}
</script>