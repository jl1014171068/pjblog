<template>
  <div>
      <!-- sadsadsd -->
      <!-- {{result}} -->
  </div>
</template>
<script>
    export default {
        created() {
            this.fetchDate();
        },
        data(){
            return {
                result:[]
            }
        },
        methods: {
            fetchDate(){
                Document.domain = 'baidu.com';
                
                this.$axios.get('http://api.fanyi.baidu.com/api/trans/vip/translate', {
                    params: {
                        q:'apple',
                        from:'en',
                        to:'zh',
                        appid:20170309000041852,
                        salt:1435660288,
                        sign:'1866879b8329237459874480fac2e9b4'
                    }
                }).then(result => {
                    console.lgo(result)
                }).catch(function (error) {
                    console.log(error);
                });;
            }
        }
    }
</script>

