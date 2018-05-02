<template>
    <div class="padding-xl">
        <biz-dictionary src="/data/Dictionary/StoreStaffType/Constant.json" v-model="ruleForm.storeStaff" placeholder="选择网点人员职务类型"></biz-dictionary><br />
        <biz-dictionary src="/data/Dictionary/CustomerGroupType/Constant.json" v-model="ruleForm.customerGroupType" placeholder="选择客户群类型"></biz-dictionary><br />
        <biz-area-tree src="/data/Region.json" v-model="ruleForm.areaCode1" mode="array" placeholder="返回为数组"></biz-area-tree><br />
        <biz-area-tree src="/data/Region.json" v-model="ruleForm.areaCode2" mode="six" placeholder="返回为六位字串"></biz-area-tree><br />
        <biz-area-tree src="/data/Region.json" v-model="ruleForm.areaCode3" mode="variable" placeholder="返回为可变字串"></biz-area-tree><br />
        <biz-muddled v-model="ruleForm.store1" src="/data/Stores.json" :show-columns="['Name','SerialNumber']" display-field="Name" value-field="Uid" placeholder="门店列表绑定Uid"></biz-muddled><br />
        <biz-muddled v-model="ruleForm.store2" src="/data/Stores.json" :show-columns="['Name','SerialNumber']" display-field="Name" value-field="model" placeholder="门店列表绑定模型"></biz-muddled><br />
        <biz-muddled v-model="ruleForm.store3" src="/data/Stores.json" :show-columns="['Name']" display-field="Name" value-field="Name" placeholder="只显示一个列"></biz-muddled><br />
        <biz-select v-model="ruleForm.store4" src="/data/Stores.json" :show-columns="['Name']" display-field="Name" value-field="Name" placeholder="只显示一个列"></biz-select><br />
        <el-button @click="submit">展示数据</el-button><el-button @click="setData">设置数据</el-button>
    </div>
</template>
<script>
import ELEMENT from "element-ui"
import BizDictionary from "~/components/BizDictionary.vue"
import BizAreaTree from "~/components/BizAreaTree.vue"
import BizMuddled from "~/components/BizMuddled.vue"
import BizSelect from "~/components/BizSelect.vue"

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
                "storeType":"邮储自助服务区",
                "storeStaff":"理财经理",
                "customerGroupType":"企业员工户",
                "competitorType":"ICBC",
                "areaCode1":["53","01","11"],
                "areaCode2":"530302",
                "areaCode3":"532530",
                "store1":"b89c55ae-012a-4b82-89a4-01e24e68759a",
                "store2":{"Id":359,"Uid":"7d15297d-4f09-4f86-a210-05b9b9e58e68","AreaCode":"530102","Name":"昆瑞路营业所","Title":"昆瑞路营业所","BrandName":"PSBC","CompanyId":0,"SerialNumber":"53000709","ParentSn":"","Type":"邮政网点","LatitudeE6":25060780,"LongitudeE6":102677150,"ParentName":"","ParentId":0,"IsEnabled":true,"IsDeleted":false,"CompanyName":"","ExtProperties":"","Province":"云南省","City":"昆明市","County":"五华区","Area":"昆明市五华区","Address":"五华区昆瑞路273号云安阳光城18栋一楼商铺","TimeCreated":"2017-07-14T16:39:53.4228724"},
                "store3":"春晖营业所"
            };
        }
    },
    components: {
        "biz-dictionary": BizDictionary,
        "biz-area-tree": BizAreaTree,
        "biz-muddled": BizMuddled,
        "biz-select":BizSelect,
        "el-button": ELEMENT.Button
    },
    mounted: function () {

    }
}
</script>