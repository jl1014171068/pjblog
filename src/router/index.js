import Vue from 'vue'
import Router from 'vue-router'
import work from 'components/work/work'
import me from 'components/me/me'
import blog from 'components/blog/blog'
import share from 'components/share/share'
import workArticle from 'components/workArticle/workArticle'
import blogArticle from 'components/blogArticle/blogArticle'

import test from 'components/test/test'


Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'work',
        component: work,
        title: 'title path',
        redirect: '/work'
    },
    {
        path: '/test',
        name: 'test',
        component: test,
        title: 'title test'
    }, {
        path: '/work',
        name: 'work',
        component: work,
        title: 'title work'
    }, {
        path: '/workArticle',
        name: 'workArticle',
        component: workArticle,
        title: 'title workArticle'

    }, {
        path: '/me',
        name: 'me',
        component: me,
        title: 'me'
    }, {
        path: '/blog',
        name: 'blog',
        component: blog,
        title: 'blog'
    }, {
        path: '/blogArticle',
        name: 'blogArticle',
        component: blogArticle,
        title: 'title blogArticle'
    }, {
        path: '/share',
        name: 'share',
        component: share,
        title: 'share'
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
