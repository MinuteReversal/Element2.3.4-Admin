<template> 
    <div class="padding-l">
        <span>{{text}}</span>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                text:""
            };
        },
        mounted(){
            let r= this.$route;
            this.text=JSON.stringify({
                path:r.path,
                query:r.query,
                hash:r.hash,
                params:r.params
            });
        }
    }
</script>
