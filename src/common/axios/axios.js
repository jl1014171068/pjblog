
import axios from 'axios'
import Vue from 'vue'

let options = {}
  // options.baseURL = `https://cnodejs.org/api/v1`
  options.baseURL = `http://xsp.zendaiart.net/api`
  options.headers={'X-Requested-With': 'XMLHttpRequest'}
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