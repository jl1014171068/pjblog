// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



// emementui引入
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// import axios from 'components/plugins/axios'
import axios from 'common/axios/axios'
Vue.use(axios)


// 自定义主样式
import 'common/style/index.scss';

//图片懒加载vue-lazyload
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad,{
	loading:require('assets/loading.gif')
});
// // axios引入,类似vue-resourse
// import vueResource  from 'vue-resource'
// Vue.use(vueResource)


import 'normalize.css'


router.afterEach(router =>  {
  document.title=router.name;
  document.body.scrollTop=0;
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
