<template>
    <div class="navbar_lm">
        <div class="content_lm">
            <div class="content_logo">
                <router-link to='/'><img src="../../../resource/img/logo.png" height="65" width="120"></router-link>
            </div>
            <ul class="content_menu">
                <li v-for="(value, index) in menus" >
                    <router-link :to="value.href" active-class='active'><span class="en">{{value.en}}</span>
                        <p class="cn">{{value.cn}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
        data() {
            return {
                menus: [{
                    'en': 'Work',
                    'cn': '作品',
                    'href': '/work',
                    'id':0
                }, {
                    'en': 'Me',
                    'cn': '我',
                    'href': '/me',
                     'id':1
                }, {
                    'en': 'Blog',
                    'cn': '文章',
                    'href': '/blog',
                     'id':2
                }, {
                    'en': 'Share',
                    'cn': '分享',
                    'href': '/share',
                     'id':3
                }],
                currentIndex: 0
            }
        }
}

// vm.$watch('menus', function() {
//     // 做点什么
// })
</script>
<style lang="scss">
@import 'navbar.scss';
</style>
