<template>
  <div :height="silderH">
    <!-- <el-carousel indicator-position="outside" :height="silderH"> -->
      <!-- <el-carousel-item> -->
        <img src="../../../resource/img/silder.jpg" class='img'>
      <!-- </el-carousel-item> -->
    <!-- </el-carousel> -->
  </div>
</template>
<script>
  export default {
    data () {
     return {
       silders:[],
     }
   },
   computed: {
    silderH () {
     return (document.body.clientWidth*1080)/1920 +'px'
   }
 }
}
</script>
<style lang='scss' scoped>
  .img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>