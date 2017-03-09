<template>
  <div>
    <el-carousel indicator-position="outside" :height="silderH">
    <el-carousel-item>
      <img src="../../../resource/img/silder.jpg">
    </el-carousel-item>
  </el-carousel>
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
<style>
</style>