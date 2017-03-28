<template>
    <div>
        <a href="https://github.com/login/oauth/authorize?client_id=8f1c3815edf781530961&state=pjblogsuijizifuchuan&redirect_uri=http://spblog.minist.cn/">點擊</a>
    </div>
</template>
<script>
export default {
    created() {
            this.tecthData();
            console.log(1)
        },
        data() {
            return {

            }
        },
        methods: {
            tecthData() {
                this.$axios.get('https://github.com/login/oauth/authorize', {
                        params: {
                            client_id: '8f1c3815edf781530961',
                            redirect_uri: 'http://spblog.minist.cn/',
                            state: 'pjblogsuijizifuchuan'
                        }
                    })
                    .then(response => {
                        console.log(response + '1233')
                    });
            }
        }
}
</script>
<style lang="scss" scoped>
</style>
