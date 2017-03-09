<template>
    <div class="share">
        <div class="header" :style="styleObj">
            <div class="logo">
                <img src="../../../resource/img/share_logo.png" height="141" width="326">
            </div>
            <router-link :to="{ path: '/work' }" class="link">
                <i class="img"><img src="../../../resource/img/tiger.png" height="23" width="24"></i>
                <span class="text">个人主页</span>
            </router-link>
            <ul class="links">
                <li>分享给好友</li>
                <li>推荐好链</li>
            </ul>
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
                            <!-- {{tag.content | maxlength}} -->
                            {{tag.content.slice(0,50)}}
                        </div>
                    </a>
                </li>
            </ul>
            <div class="paging" v-show='total_pages>1'>
                <el-pagination layout="pager" :total="total" :page-size='per_count' :current-page="current_page" @current-change="changePage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
            this.$axios.get('tags?groups=share').then(result => {
                this.titles = result.data.data
                this.fetchDate(this.page);
            });

        },
        data() {
            return {
                titles: [],
                currentIndex: 0,
                page: 1,
                per_count: 28,
                total_pages: 0,
                current_page: 0,
                taglist: [],
                total: 0
            }
        },
        computed: {
            styleObj: function() {
                let winW = document.body.clientWidth,
                    setHeight = (winW * 400) / 1920 + 'px',
                    obj = {
                        height: setHeight,
                    }
                return obj;
            }
        },
        methods: {
            fetchDate(page) {
                let _this = this;
                this.$set(this, 'taglist', '');
                this.$loading();
                this.$axios.get('/shares', {
                    params: {
                        tags: this.titles[_this.currentIndex].name,
                        page: page,
                        per_count: _this.per_count
                    }
                }).then(result => {
                    this.taglist = result.data.data;
                    _this.total_pages = result.data.meta.pagination.total_pages;
                    _this.total = result.data.meta.pagination.total;
                    _this.$loading().close();
                });

            },
            changeIndex(value, index) {
                this.currentIndex = index;
                this.fetchDate(1);
            },
            changePage(e) {
                this.fetchDate(e);
                this.$set(this, 'current_page', e);
            }
        },
        filters: {
            maxlength: function(value) {
                let len = 0
                let i = 0,
                    maxlen = 50,
                    ellipsis = '...';
                for (i = 0; i < value.length && len <= maxlen; i++) {
                    if (value.charCodeAt(i) > 127 || value.charCodeAt(i) === 94) {
                        // 中文
                        len += 2
                    } else {
                        // 非中文
                        len++
                    }
                }
                if (i >= value.length) {
                    // 没有截取
                    return value
                } else if (!ellipsis || ellipsis === '') {
                    // 截取不补充
                    return value.substr(0, i - 1)
                } else {
                    // 截取并补充
                    return value.substr(0, i - 1 - ellipsis.length) + ellipsis
                }
            }
        }
}
</script>
<style lang="scss">
@import 'share.scss';
</style>
