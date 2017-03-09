import axios from 'axios'

let options = {}
// options.baseURL = `https://cnodejs.org/api/v1`
options.baseURL = `http://xsp.zendaiart.net/api`

let $axios

export default {
  install (vue) {
    if (!vue.$axios) {
      vue.$axios = axios.create(options)
    }

    vue.mixin({
      created: function () {
        this.$axios = vue.$axios
      }
    })
  }
}

