<template>
    <div class="padding-xl">
        <biz-dictionary src="/api/Dictionary/StoreType/Constant" v-model="ruleForm.storeType" placeholder="选择网点类型"></biz-dictionary><br />
        <biz-dictionary src="/api/Dictionary/StoreStaffType/Constant" v-model="ruleForm.storeStaff" placeholder="选择网点人员职务类型"></biz-dictionary><br />
        <biz-dictionary src="/api/Dictionary/CustomerGroupType/Constant" v-model="ruleForm.customerGroupType" placeholder="选择客户群类型"></biz-dictionary><br />
        <biz-dictionary src="/api/Dictionary/CompetitorType/Constant" v-model="ruleForm.competitorType" placeholder="选择同业机构"></biz-dictionary><br />
        <biz-area-tree v-model="ruleForm.areaCode1" mode="array" placeholder="返回为数组"></biz-area-tree><br />
        <biz-area-tree v-model="ruleForm.areaCode2" mode="six" placeholder="返回为六位字串"></biz-area-tree><br />
        <biz-area-tree v-model="ruleForm.areaCode3" mode="variable" placeholder="返回为可变字串"></biz-area-tree><br />
        <biz-muddled v-model="ruleForm.store1" src="/Data/Stores" :show-columns="['Name','SerialNumber']" display-field="Name" value-field="Uid" placeholder="门店列表绑定Uid"></biz-muddled><br />
        <biz-muddled v-model="ruleForm.store2" src="/Data/Stores" :show-columns="['Name','SerialNumber']" display-field="Name" value-field="model" placeholder="门店列表绑定模型"></biz-muddled><br />
        <biz-muddled v-model="ruleForm.store3" src="/Data/Stores" :show-columns="['Name']" display-field="Name" value-field="Name" placeholder="只显示一个列"></biz-muddled><br />
        <el-button @click="submit">展示数据</el-button><el-button @click="setData">设置数据</el-button>
    </div>
</template>
<script>
import ELEMENT from "element-ui"
import BizDictionary from "~/components/BizDictionary.vue"
import BizAreaTree from "~/components/BizAreaTree.vue"
import BizMuddled from "~/components/BizMuddled.vue"

export default {
    data:()=> ({
        ruleForm: {
            storeType: "邮储自助服务区",
            storeStaff: "理财经理",
            customerGroupType: "企业员工户",
            competitorType: "ICBC",
            areaCode1: ["53", "01", "11"],
            areaCode2: "530302",
            areaCode3: "532530",
            store1: "",
            store2: null
        }
    }),
    methods: {
        submit: function () {
            this.$alert(JSON.stringify(this.ruleForm));
        },
        setData: function () {
            this.ruleForm = {
                storeType: "邮政自助服务区",
                storeStaff: "营业员",
                customerGroupType: "务工客户",
                competitorType: "ABC",
                areaCode1: ["53", "04", "03"],
                areaCode2: "530600",
                areaCode3: "53",
                store1: ""
            };
        }
    },
    components: {
        "biz-dictionary": BizDictionary,
        "biz-area-tree": BizAreaTree,
        "biz-muddled": BizMuddled,
        "el-button": ELEMENT.Button
    },
    mounted: function () {

    }
}
</script>

