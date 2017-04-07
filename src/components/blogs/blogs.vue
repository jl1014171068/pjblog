<template>
    <div class="blog">
        <div class="content_lm">
            <div class="content" style="min-height: 600px;">
                <ul class="blog_list">
                    <li v-for='(article,id) in articles' class='blog-list'>
                        <router-link :to="{name: 'slug', params: { slug: article.slug }}">
                            <div class="img">
                                <img v-lazy="article.cover" width="241" height="161">
                            </div>
                            <div class="info">
                                <h3 class="title">{{article.title}}</h3>
                                <p class="text">
                                    {{article.description | maxlength}}
                                </p>
                                <span class="time">{{article.created_at}}</span>
                            </div>
                        </router-link>
                    </li>
                    <div class='null' v-show='!articles.length'><img src="./article_null.png" alt=""></div>
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
import Vue from 'vue';
import { mapState } from 'vuex'

export default {
    created() {
            this.$store.dispatch('getBlogs')
        },
         computed: mapState({
                links: state => state.blogs.links,
                currentIndex: state => state.blogs.currentIndex,
                articles: state => state.blogs.articles,
                page: state => state.blogs.page,
                per_count: state => state.blogs.per_count,
                total_pages: state => state.blogs.total_pages,
                current_page: state => state.blogs.current_page,
                total: state => state.blogs.total,
                
            }),
        methods: {
            changeIndex(value, index) {
                this.$store.state.blogs.currentIndex = index;
                this.$store.state.blogs.articles = '';
                this.$store.dispatch('getBlogs')
            },
            changePage (e) {
                this.$store.dispatch('getBlogs',e)
            },
            allShow(){
                this.$store.state.blogs.currentIndex = '';
                this.$store.dispatch('getBlogs')
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
@import 'blogs.scss';
</style>
