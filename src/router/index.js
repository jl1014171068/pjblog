import Vue from 'vue'
import Router from 'vue-router'
import works from 'components/works/works'
import me from 'components/me/me'
import blogs from 'components/blogs/blogs'
import share from 'components/share/share'
import article from 'components/article/article'
import blog from 'components/blog/blog'
import notFound from 'components/notFound/notFound'

import login from 'components/oauth/github'



Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: works,
        title: '小老虎喵喵喵-首页',
        redirect: '/works'
    },
    {
        path: '/works',
        name: 'works',
        component: works,
        title: '小老虎喵喵喵-首页'
    },
      {
        path: '/article/:slug',
        name: 'article',
        component: article,
        title: '小老虎喵喵喵-作品详情'

    }, {
        path: '/about',
        name: 'about',
        component: me,
        title: '小老虎喵喵喵-关于我'
    }, {
        path: '/blogs',
        name: 'blogs',
        component: blogs,
        title: '小老虎喵喵喵-文章列表'
    }, {
        path: '/blog/:slug',
        name: 'slug',
        component: blog,
        title: '小老虎喵喵喵-文章详情'
    }, {
        path: '/share',
        name: 'share',
        component: share,
        title: '小老虎喵喵喵-分享中心'
    },
    {
        path: '*',
        name: '404',
        component: notFound,
        title: '找不到页面'
    },
     {
        path: '/oauth/github',
        name: 'login',
        component: login,
        title: 'login'
    }]
})



// import Vue from 'vue'
// import Router from 'vue-router'
// import hello from 'hello'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'hello',
//       component: hello
//     }
//   ]
// })



// export default function (router) {
//   router.map({
//     '/': {
//       name: 'home',
//       component: require('./components/Home/index.vue')
//     },
//     '/login': {
//       name: 'login',
//       component: require('./components/Login/index.vue')
//     },
//     '/settings': {
//       name: 'settings',
//       component: require('./components/Settings/index.vue')
//     },
//     '/article/:aid':{
//       name: 'article',
//       component: require('./components/Article/index.vue')
//     },
//     '/apps': {
//       name: 'apps',
//       component: require('./components/Apps/index.vue')
//     },
//     '*': {
//       component: require('./components/NotFound.vue')
//     }
//   })
//   // router.beforeEach((transition)=>{
//   //   transition.next()
//   // })
// }
