
import axios from 'axios'
import Vue from 'vue'

let options = {
  // baseURL:`http://xsp.zendaiart.net/api`,
  baseURL:`http://service.smalltiger.me/api`,
  'Content-Type':'text/html; charset=utf-8',
  'Cache-Control':'no-cache, no-store',
  Server:'GitHub.com'
}
  // options.baseURL = `https://cnodejs.org/api/v1`
  // options.baseURL = `http://xsp.zendaiart.net/api`
  // options.baseURL = `http://fanyi.youdao.com/openapi.do`
  // options.headers.post['Content-Type'] = 'text/html; charset=utf-8';
  let $axios

  export default {
    install(vue) {
      if (!vue.$axios) {
        vue.$axios = axios.create(options)
      }

    // 拦截器
    vue.$axios.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })

    vue.$axios.interceptors.response.use(response => {
      return response
    }, error => {
      return Promise.reject(error)
    })

    vue.mixin({
      created: function() {
        this.$axios = vue.$axios
      }
    })
  }
}



