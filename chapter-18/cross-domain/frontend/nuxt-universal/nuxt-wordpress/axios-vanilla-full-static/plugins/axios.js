'use strict'

import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.remoteUrl
})

export default (ctx, inject) => {
  // Inject axios to the context as $axios
  ctx.$axios = instance
  inject('axios', instance)
}
