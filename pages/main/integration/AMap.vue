<template>
    <div>
        <amap amap-key="9594c8dad9ede5935c38d750ed93d8b0" @load="onAmapLoad" style="position:absolute;width:100%;height:100%;"/>
    </div>
</template>
<script>
import AMap from '~/components/AMap.vue'

export default {
    components:{
        'amap':AMap
    },
    methods:{
        onAmapLoad(evt){
            var AMap = evt.AMap;
            var map  = evt.map;
            var infoWindow=null;

            var marker = new AMap.Marker({
                position: map.getCenter()
            });
            marker.setMap(map);

            //在指定位置打开信息窗体
            function openInfo() {
                //构建信息窗体中显示的内容
                var info = [];
                info.push("<div><div><img style=\"float:left;\" src=\" http://webapi.amap.com/images/autonavi.png \"/></div> ");
                info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>傲城珠宝汇</b>");
                info.push("电话 : <a href='tel:63618691'>63618691</a>   邮编 : 100102");
                info.push("地址 :云南省昆明市人民中路傲城大厦B2座8楼211室</div></div>");
                infoWindow = new AMap.InfoWindow({
                    content: info.join("<br/>"), //使用默认信息窗体框样式，显示信息内容
                    offset: new AMap.Pixel(5, -25)
                });
                infoWindow.open(map, map.getCenter(102.711664, 25.041005));
            }
            openInfo();
        }
    }
}
</script>

