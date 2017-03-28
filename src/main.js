// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// router加载进度 
import VueProgressBar from 'vue-progressbar'


// emementui引入
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// import axios from 'common/axios/axios'
// Vue.use(axios)

import 'loaders.css'
// 自定义主样式
import 'common/style/index.scss';

//图片懒加载vue-lazyload
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad,{
  loading:require('assets/loadingn.gif')
});

import store from './vuex/store';


//正常化css
import 'normalize.css'
// animatecss引入
import 'animate.css/animate.min.css';

router.afterEach(router =>  {
  document.title=router.name;
  document.body.scrollTop=0;
});

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
