'use strict'

import axios from 'axios'

// 自动识别接口使用开发环境地址（开发环境地址做了 proxyTable 代理，故设置为空）或线上地址
const baseURL = ''

const $axios = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

$axios.interceptors.request.use(
  (config: any) => {
    // TODO
    return config
  },
  (error: any) => {
    console.log(error)
    return Promise.reject(error)
  }
)

$axios.interceptors.response.use(
  (res: any) => {
    const apiRes = res.data
    // TODO
    return apiRes
  },
  async (error: any) => {
    console.dir(error)
    return Promise.reject(error)
  }
)

export default $axios
