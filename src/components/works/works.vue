<template>
    <div>
        <silder></silder>
        <div class="types">
            <div class="content_lm">
                <audio :src="mp3Src" preload="preload" ref='audio' type="audio/mpeg"></audio>
                <ul class="titles">
                    <li :class="{'current':currentIndex===index}" @click="changeIndex(value,index)" v-for="(value, index) in types"><span>{{value.name}}</span></li>
                </ul>
                <ul class="article-wrapper">
                    <li v-for='(article,id) in articles'   class='article-list' @mouseover='playOn' @mouseout='playOff'>
                        <router-link :to="{name: 'article', params: { slug: article.slug }}">
                            <img v-lazy='article.cover'>
                        </router-link>
                    </li>
                </ul>
                <div class='null' v-show='!articles.length'><img src="./null.png" alt=""></div>

                <button class="more wow" @click='more'  >
                {{ moreFlag ? '查看更多' : '没有更多数据'}}
                    <i class="icon el-icon-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </template>
    <script>
        import silder from 'components/silder/silder';
        import { mapState } from 'vuex'
        let mp3 = require('assets/imghover.mp3');

        export default {
            created() {
                this.$store.dispatch('getWork')
            },
            computed: mapState({
                types: state => state.work.types,
                articles: state => state.work.articles,
                metas: state => state.work.metas,
                currentIndex: state => state.work.currentIndex,
                total_pages:state => state.work.total_pages,
                current_page:state => state.work.current_page,
                moreFlag:state=>state.work.current_page<state.work.total_pages,
            }),
            data() {
                return {
                    mp3Src: mp3
                }
            },
            components: {
                silder
            },
            methods: {
                changeIndex(value, index) {
                    this.$store.state.work.currentIndex=index;
                    this.$store.state.work.articles=[];
                    this.$store.state.work.metas=[];
                    this.$store.state.work.current_page=1;
                    this.$store.dispatch('getWork')
                },
                more() {
                    if (this.total_pages <= this.current_page) {
                        return false;
                    }
                    this.$store.state.work.current_page+=1;
                    this.$store.dispatch('getWork')
                },
                playOn() {
                    let dom = this.$refs.audio;
                    // this.$refs.audio.play();
                    setTimeout(function() {
                        // Resume play if the element if is paused.
                        if (dom.paused) {
                            dom.play();
                        }
                    }, 100);
                },
                playOff() {
                    this.$refs.audio.pause()
                    this.$refs.audio.load()
                }
            },
            mounted: function() {
                this.$nextTick(function() {})
            }
        }
    </script>
    <style lang="scss">
        @import 'works.scss';
    </style>
