<template>
    <div>
       <img :src="focused?seletedImg:normalImg" class="imgstyle">
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{
        focused:false,
        seletedImg:{default:""},
        normalImg:{default:""}
    }
}
</script>
<style scoped>
.imgstyle{
    width:30px;
    height:30px;
}
</style>



