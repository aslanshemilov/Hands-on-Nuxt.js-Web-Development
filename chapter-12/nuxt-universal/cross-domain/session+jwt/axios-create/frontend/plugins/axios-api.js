// https://nuxtjs.org/api/configuration-env#the-env-property
// usage: import axios from '~/plugins/axios-api'
import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: true,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})
