<template>
    <div class="comments">
        <div class="content_lm">
            <div class="control_comments">
                <div class="praise">
                    <i class="el-icon-caret-top icon"></i>
                    <span class="text">{{comments.vote_count}}人已赞过</span>
                </div>
                <div class="share">
                    <h4 class="share_title">分享到：</h4>
                    <ul id="bdshare"  data-tag="share_1" data="{'text':'这里写入您想要自定义的分享内容B'}">
                        <li>
                            <a href="#" data-cmd="sqq" title="分享到新浪" class="iconfont icon-xinlangjianying"></a>
                        </li>
                        <li>
                            <a href="#" data-cmd="sqq" title="分享到豆瓣" class="iconfont icon-douban"></a>
                        </li>
                        <li>
                            <a href="#" data-cmd="sqq" title="分享到花瓣" class="iconfont icon-huaban"></a>
                        </li>
                        <li>
                            <a href="#" data-cmd="sqq" title="分享到QQ" class="iconfont icon-qq"></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pub_hr"></div>
            <div class="content_commtents">
                <div class="input_comments" :class='focusFlag?"focus":""'>
                    <div class="img">
                        <img src="http://lorempixel.com/640/480/?25659" title='作者是谁' alt='作者是谁'>
                    </div>
                    <div class="textarea">
                        <textarea :class='focusFlag?"focus":""' :rows="rows" placeholder="说点什么..." v-model="textarea" class="textInput" @focus='inputFocus' @blur='inputBlur'></textarea>
                    </div>
                    <div class="send">
                        <button class='iconfont icon-fasong'></button>
                    	<!-- <el-button type="primary"  class='iconfont icon-fasong'>评论</el-button> -->
                    	<!-- <div v-show="!sendFlag">登录后可以发表评论</div> -->
                    </div>
                </div>
                <div class="hr"></div>
                <ul class="comments_list">
                    <li v-for='item in content.data'>
                        <div class="img">
                            <img :src="item.users.avatar" :alt="item.users.name" :title="item.users.name">
                        </div>
                        <div class="comments_list_content">
                        	<div class="top_info">
                        		<h4 class="username">{{item.users.name.slice(0,20)}}</h4>
                        		<span class="time">{{item.users.name}}</span>
                        	</div>
                        	<div class="text markdown-body">
                        		{{item.body.slice(0,450)}}
                        	</div>
                        </div>
                    </li>
                </ul>
                <div class="paging" v-show='total_pages>1'>
                    <el-pagination layout="pager" :total="total" :page-size='per_page' :current-page="current_page" @current-change="changePage">
                    </el-pagination>
                </div>
            </div>
            
            <div class="pub_hr"></div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'


export default {
    created() {
            let slug = this.$route.params.slug;
            this.$store.state.comments.slug=slug;
            this.$store.dispatch('getComments')
        },
        data(){
            return {
                focusFlag:false,
                textarea: '',
     rows: 1
            }
        },
        props:{
            comments:{
                type: [Object,String]
            }
        },
        computed: mapState({
                slug: state => state.comments.slug,
                content: state => state.comments.content,
                sendFlag: state => state.comments.sendFlag,
                per_page: state => state.comments.per_page,
                total: state => state.comments.total,
                total_pages: state => state.comments.total_pages,
                current_page: state => state.comments.current_page
        }),
    
        methods: {
            inputFocus() {
                this.rows=4;
                if (this.length > 1) {
                    this.sendFlag = true;
                }
                this.$set(this,'focusFlag',true)
            },
            inputBlur() {
            	if(this.textarea.length>1){return false;}
                this.rows = 1;
                this.sendFlag = false;
                this.$set(this,'focusFlag',false)
            },
            changePage (e) {
                this.$store.state.comments.current_page = e;
                this.$store.dispatch('getComments')
            }
        },
        watch: {
            textarea: function(val, oldVal) {
                if (this.textarea.length > 1) {
                    this.sendFlag = true;
                }
            },
        }
}
</script>
<style lang="scss" scoped>
@import 'comments.scss';
</style>
