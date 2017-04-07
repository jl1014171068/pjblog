import Vue from 'vue';
import Vuex from 'vuex';
import work from './modules/work';
import article from './modules/article';
import comments from './modules/comments';
import blogs from './modules/blogs';
import blog from './modules/blog';
import share from './modules/share';
import config from '../config'
Vue.use(Vuex);

export default  new Vuex.Store({
    modules:{
       work,
       article,
       comments,
       blogs,
       blog,
       share
    }
});

