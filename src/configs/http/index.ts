import axios from 'axios'

import Env from '@util/Env'

const http = axios.create({
  baseURL: Env.public('API_ENDPOINT')
})

http.interceptors.request.use(config => {
  return config
})

http.interceptors.response.use(config => {
  return config
})

export default http
