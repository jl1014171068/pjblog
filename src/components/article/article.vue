<template>
	<div class='workArticle'>
		<div class="content_lm ">
			<div class="control">
				<el-tooltip content="已经是第一个了" :disabled='prevDisabld'  effect="light" placement="top" class="el-icon-arrow-left prev"    :class="content.prev_slug===null?'':'active'">
					<span  @click="prevPage(content.prev_slug)"></span>
				</el-tooltip>
				<el-tooltip content="已经是最后一个了" :disabled='nextDisabld' effect="light" placement="top" class="el-icon-arrow-right next"  :class="content.next_slug===null?'':'active'">
					<span  @click="nextPage(content.next_slug)"></span>
				</el-tooltip>
			</div>
			<h2 class="title">{{content.title}}</h2>
			<span class="time">{{content.created_at}}</span>
			<div class="hr"></div>
			<div class="markdown-body" v-html='content.body'></div>
		</div>
        <comments :comments='content'></comments>
	</div>
</template>

<script>
    import comments from 'components/comments/comments'
    import { mapState } from 'vuex'
	export default {
		created () {
            let slug = this.$route.params.slug;
			this.$store.state.article.slug=slug;
			this.$store.dispatch('getArticle')
		},
		computed: mapState({
                slug: state => state.article.slug,
                content: state => state.article.content,
                prevDisabld: state => state.article.prevDisabld,
                nextDisabld: state => state.article.nextDisabld
        }),
		methods: {
			prevPage (slug) {
				if(slug===null){
					this.$set(this, 'prevDisabld', false);
					return false;
				} 
				this.$store.state.article.slug=slug;
				this.$set(this, 'prevDisabld', true);
				this.$store.dispatch('getArticle')
			},
			nextPage (slug) {
				if(slug===null){
					this.$set(this, 'nextDisabld', false);
					return false;
				} 
				this.$store.state.article.slug=slug;
				this.$set(this, 'nextDisabld', true);
				this.$store.dispatch('getArticle')
			}
		},
		components:{
			comments
		}
	}
</script>

<style lang="scss" scoped>
    @import "~common/style/markdown.scss";
	@import 'article.scss';
</style>
