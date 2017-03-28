import Vue from 'vue';
import Vuex from 'vuex';
import work from './modules/work';
import article from './modules/article';
import comments from './modules/comments';
import blogs from './modules/blogs';
import config from '../config'
Vue.use(Vuex);

export default  new Vuex.Store({
    modules:{
       work,
       article,
       comments,
       blogs
    }
});


