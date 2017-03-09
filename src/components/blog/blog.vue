<template>
    <div class="blog">
        <div class="content_lm">
            <div class="content">
                <ul class="blog_list">
                    <li v-for='(article,id) in articles' class='blog-list'>
                        <router-link :to="{name: 'blogArticle', query: { slug: article.slug }}">
                            <div class="img">
                                <img :src="article.cover" width="241" height="161">
                            </div>
                            <div class="info">
                                <h3 class="title">{{article.title}}</h3>
                                <p class="text">
                                    {{article.body | maxlength}}
                                </p>
                                <span class="time">{{article.created_at}}</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="paging" v-show='total_pages>1'>
                    <el-pagination layout="pager" :total="total" :page-size='per_count' :current-page="current_page" @current-change="changePage">
                    </el-pagination>
                </div>
            </div>
            <div class="nav">
                <h2 class="title" @click='allShow' :class="{'current':currentIndex===''}">全部文章</h2>
                <ul class="links">
                    <li :class="{'current':currentIndex===index}" @click="changeIndex(value,index)" v-for="(value, index) in links"><span>{{value.name}}<i class="count">({{value.count}})</i></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
const links = ['界面', '动态', '图标', '壁纸'];
import Vue from 'vue';

export default {
    created() {
            this.fetchDate(this.page);
        },
        data() {
            return {
                links: [],
                currentIndex: '',
                articles: [],
                page: 1,
                per_count: 10,
                total_pages: 0,
                current_page: 1,
                total: 0
            }
        },
        methods: {
            changeIndex(value, index) {
                this.currentIndex = index;
                this.fetchDate();
                this.$set(this, 'articles', '');
                console.log();
            },
            fetchDate(page) {
                let _this = this;
                this.$loading();
                this.$axios.get('/articles', {
                    params: {
                        tags: links[_this.currentIndex],
                        page: page,
                        per_count: _this.per_count
                    }
                }).then(result => {
                    this.articles = result.data.data;
                    _this.total_pages=result.data.meta.pagination.total_pages;
                    _this.total=result.data.meta.pagination.total;
                    _this.$loading().close();
                });
                this.$axios.get('/tags?groups=blog').then(result => {
                    this.links = result.data.data
                });
            },
            changePage (e) {
                this.fetchDate(e);
            },
            allShow () {
                let _this = this,page=_this.page;
                this.$set(this, 'articles', '');
                this.$set(this, 'currentIndex', '');
                this.$loading();
                this.$axios.get('/articles', {
                    params: {
                        page: page,
                        per_count: _this.per_count
                    }
                }).then(result => {
                    this.articles = result.data.data;
                    _this.total_pages=result.data.meta.pagination.total_pages;
                    _this.total=result.data.meta.pagination.total;

                    _this.$loading().close();
                });
            }
        },
        filters: {
            maxlength: function(value) {
                let len = 0
                let i = 0,
                    maxlen = 120,
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
@import 'blog.scss';
</style>
