<template>
	<div class='workArticle'>
		<div class="content_lm ">
			<div class="control">
				<el-tooltip content="已经是第一个了" :disabled='prevDisabld'  effect="light" placement="top" class="el-icon-arrow-left prev"    :class="content.prev_slug===null?'':'active'">
					<span  @click="prevPage(content.prev_slug)"></span>
				</el-tooltip>
				<!-- <span class="el-icon-arrow-left prev"  @click="prevPage(content.prev_slug)"  :disabled='disabled' :class="!content.prev_slug?'':'active'"></span> -->
				<el-tooltip content="已经是最后一个了" :disabled='nextDisabld' effect="light" placement="top" class="el-icon-arrow-right next"  :class="content.next_slug===null?'':'active'">
					<span  @click="nextPage(content.next_slug)"></span>
				</el-tooltip>
				<!-- <span class="el-icon-arrow-right next" @click="nextPage(content.next_slug)" :disabled='disabled'  :class="!content.prev_slug?'':'active'"></span> -->
			</div>
			<h2 class="title">{{content.title}}</h2>
			<span class="time">{{content.created_at}}</span>
			<div class="hr"></div>
			<div class="markdown-body">
				{{content.body}}
			</div>
			<!-- <div class="imgs" v-for="item in content.random_img"> -->
			<!-- <img v-lazy="item"> -->
			<!-- <img :src="item"> -->
			<!-- </div> -->
		</div>
	</div>
</template>

<script>
	export default {
		created () {
			let slug = this.$route.query.slug;
			this.tecthData(slug);
		},
		data () {
			return {
				content:'',
				disabled:true,
				prevDisabld:true,
				nextDisabld:true
			}
		},
		methods: {
			prevPage (slug) {
				if(slug===null){
					this.$set(this, 'prevDisabld', false);
					return false;
				} 
				this.tecthData(slug);
				this.$set(this, 'prevDisabld', true);
			},
			nextPage (slug) {
				if(slug===null){
					this.$set(this, 'nextDisabld', false);
					return false;
				} 
				this.tecthData(slug);
				this.$set(this, 'nextDisabld', true);
			},
			tecthData (slug) {
				this.content='';
				this.$loading();
				this.$axios.get('/articles/' + slug).then(response =>{
					let result = response.data.data;
					this.content=result;
					this.$loading().close();
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
    @import "~common/style/markdown.scss";
	@import 'workArticle.scss';
</style>
