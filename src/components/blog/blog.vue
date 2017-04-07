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
        <!-- <comments :comments='content'></comments> -->
        
    </template>
    <script>
        import { mapState } from 'vuex'
        import comments from 'components/comments/comments'
        export default {
            created() {
                let slug = this.$route.params.slug;
                this.$store.state.blog.slug=slug;
                this.$store.dispatch('getBlog')
            },
            computed: mapState({
                content: state => state.blog.content,
                types: state => state.blog.types,
                prevDisabld: state => state.blog.prevDisabld,
                nextDisabld: state => state.blog.nextDisabld
            }),
            methods: {
                prevPage(slug) {
                 if(slug===null){
                    this.$set(this, 'prevDisabld', false);
                    return false;
                } 
                this.$store.state.blog.slug=slug;
                this.$set(this, 'prevDisabld', true);
                this.$store.dispatch('getBlog')
            },
            nextPage(slug) {
             if(slug===null){
                this.$set(this, 'nextDisabld', false);
                return false;
            } 
            this.$store.state.blog.slug=slug;
            this.$set(this, 'nextDisabld', true);
            this.$store.dispatch('getBlog')
        }
    },components:{
        comments
    }
}
</script>
<style lang="scss">
 @import "~common/style/markdown.scss";
 @import 'blog.scss';
</style>
