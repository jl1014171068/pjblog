<template>
    <div class='blogArticle'>
        <div class="content_lm">
            <div class="content">
                <h2 class="title">{{content.title}}</h2>
                <ul class="taglist">
                    <li v-for='item in types'>{{item.name}}</li>
                </ul>
                <div class="hr"></div>
                <!-- <p class="text">{{content.body}}</p> -->
                <div class="markdown-body" v-html='content.body'>
                    <!-- {{content.body}} -->
                </div>
            </div>
            <div class="nav">
                <div class="top">
                	<!-- <router-link></router-link> -->
                	<span class="link share">分享给朋友</span>
                	<span class="link prev"  @click="prevPage
(content.prev_slug)"  :disabled='prevDisabld' :class="content.prev_slug===null?'':'active'">上一篇文章</span>
                    <span class="link next"  @click="nextPage(content.next_slug)"   :disabled='nextDisabld'  :class="content.next_slug===null?'':'active'">下一篇文章</span>
                </div>
                <div class="hr"></div>
                <div class="bottom">
                	<div class="img">
                		<img :src="content.qrcode" width="128" height="128">
                	</div>
                	<span class="text">轻扫随时阅读</span>
                </div>
            </div>
        </div>
    </template>
    <script>
        const types = ['界面', '动态', '图标', '壁纸'];
        export default {
            created() {
                    let slug = this.$route.params.slug;
                    this.tecthData(slug);
                },
                data() {
                    return {
                        content: '',
                        types: [],
                        disabled: false,
                        prevDisabld: false,
                        nextDisabld: false
                    }
                },
                methods: {
                    prevPage(slug) {
                        if (slug === null) {
                            this.$set(this, 'prevDisabld', true);
                            return false;
                        }
                        this.tecthData(slug);
                    },
                    nextPage(slug) {
                        if (slug === null) {
                            this.$set(this, 'nextDisabld', true);
                            return false;
                        }
                        this.tecthData(slug);
                    },
                    tecthData(slug) {
                        this.content = '';
                        this.$loading();
                         console.log(this.$route)
                        this.$axios.get('/articles/' + slug).then(response => {
                            let result = response.data.data;
                            this.content = result;
                            this.$loading().close();

                        });
                        this.$axios.get('/articles/' + slug + '?include=tags').then(response => {
                            let result = response.data.data.tags;
                            this.types = result;
                            // console.log(this.content)
                            // this.$loading().close();
                        });

                    }
                }
        }
</script>
<style lang="scss">
   @import "~common/style/markdown.scss";
   @import 'blogArticle.scss';
</style>
