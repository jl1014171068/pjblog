<template>
    <div>
        <silder></silder>
        <div class="types">
            <div class="content_lm">
                <ul class="titles">
                    <li :class="{'current':currentIndex===index}" @click="changeIndex(value,index)" v-for="(value, index) in types"><span>{{value.name}}</span></li>
                </ul>
                <ul class="article-wrapper">
                    <li v-for='(article,id) in articles' class='article-list'>
                        <router-link :to="{name: 'workArticle', query: { slug: article.slug }}">
                            <img v-lazy='article.qrcode' width="311" height="228">
                        </router-link>
                    </li>
                </ul>
                <el-button type="primary" plain class="more" @click='more' v-show='current_page<total_pages'>查看更多</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    import silder from 'components/silder/silder';
    const types = ['界面', '动态', '图标', '壁纸'];
    export default {
        created() {

            this.$axios.get('/tags?groups=works').then(result => {
                this.types = result.data.data
                this.fetchDate(this.page);
            });
        },
        data() {
            return {
                types: [],
                currentIndex: 0,
                articles: [],
                page: 1,
                per_count: 9,
                total_pages: 0,
                current_page: 0
            }
        },
        components: {
            silder
        },
        methods: {
            changeIndex(value, index) {
                this.currentIndex = index;
                this.fetchDate(1);
                this.$set(this, 'articles', '');
            },
            fetchDate(page) {
                let _this = this;
                this.$loading();
                this.$axios.get('/articles', {
                    params: {
                        tags: _this.types[_this.currentIndex].name,
                        page: page,
                        per_count: _this.per_count
                    }
                }).then(result => {
                    if (this.articles.length) {
                        let array = this.articles.concat(result.data.data);
                        _this.$set(_this, 'articles', array);
                    } else {
                        this.articles = result.data.data;
                    }
                    _this.$set(_this, 'total_pages', result.data.meta.pagination.total_pages);
                    _this.$set(_this, 'current_page', result.data.meta.pagination.current_page);
                    _this.$loading().close();
                });
                
            },
            more() {
                if (this.total_pages <= this.current_page) {
                    return false;
                }
                this.$set(this, 'page', this.page + 1);
                this.fetchDate(this.page);
            }
        },
        mounted: function() {
            this.$nextTick(function() {})
        }
    }
</script>
<style lang="scss">
    @import 'work.scss';
</style>
