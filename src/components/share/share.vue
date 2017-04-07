<template>
    <div class="share">
     <div class="header" :style="styleObj" >
        <div class="content">
            <div class="logo">
                <img src="../../../resource/img/share_logo.png" :style='imgStyle'>
                <!-- height="141" width="326" -->
            </div>
            <router-link :to="{ path: '/works' }" class="link">
                <i class="img"><img src="../../../resource/img/tiger.png" height="23" width="24"></i>
                <span class="text">个人主页</span>
            </router-link>
            <ul class="links">
                <li>分享给好友</li>
                <li>推荐好链</li>
            </ul>
        </div>
    </div>
    <div class="content_lm">
        <ul class="titles">
            <li :class="{'current':currentIndex===index}" @click="changeIndex(value,index)" v-for="(value,index) in titles">
                <span> {{value.name}}</span>
            </li>

        </ul>
        <div class="hr"></div>
        <ul class="taglist">
            <li v-for='tag in taglist'>
                <a :href="tag.link">
                    <div class="top">
                        <div class="img">
                            <img :src="tag.logo">
                        </div>
                        <h4 class="title">{{tag.title.slice(0,20)}}</h4>
                    </div>
                    <div class="text">
                        {{tag.content.slice(0,50)}}
                    </div>
                </a>
            </li>
            <div class='null' v-show='!taglist.length'><img src="./null.png" alt=""></div>
        </ul>
        <div class="paging" v-show='total_pages>1'>
            <el-pagination layout="pager" :total="total" :page-size='per_count' :current-page="current_page" @current-change="changePage">
            </el-pagination>
        </div>
    </div>
</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        created() {
            this.$store.dispatch('getShare')
        },
        data() {
            return {
                current_page: 0,
            }
        },

        computed: {
             ...mapState({  
                titles: state => state.share.titles,
                currentIndex: state => state.share.currentIndex,
                page: state => state.share.page,
                per_count: state => state.share.per_count,
                total_pages: state => state.share.total_pages,
                taglist: state => state.share.taglist,
                total: state => state.share.total,
                metas: state => state.share.metas
            }), 
            styleObj: function() {
                let winW = document.body.clientWidth,
                setHeight = (winW * 400) / 1920 ,
                obj = {
                    height: setHeight<300?'300px':setHeight+'px'
                }
                return obj;
            },
            imgStyle:function(){
                let heightH= (parseInt(this.styleObj.height) * 141) / 400;
                let obj = {
                    height: (parseInt(this.styleObj.height) * 141) / 400 + 'px' ,
                    'margin-bottom':(parseInt(this.styleObj.height) * 40) / 400 + 'px',
                }
                return obj;
            }
        },
        methods: {
            changeIndex(value, index) {
                this.$store.state.share.currentIndex = index;
                this.$store.dispatch('getShare')
            },
            changePage(e) {
                this.$store.dispatch('getShare',e)
            }
        }
    }
</script>
<style lang="scss">
    @import 'share.scss';
</style>
