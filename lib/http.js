import axios from 'axios'

const pro = process.env.NODE_ENV === 'production'
const test = process.env.NODE_TEST === 'test'

const callApi = (url, method, data, isServer = false, options = {}) => {
  const opts = { ...options }
  console.log(url)
  let baseURL = '';
  if(!url.includes('.json')){
    baseURL = '/api'
  }
  return axios(Object.assign({}, {
    baseURL,
    url,
    method,
    params: method === 'get' ? data : {}, // 添加在请求URL后面的参数
    data: method !== 'get' ? data : {}, // 适用于 PUT POST PATCH
    withCredentials: true, // 请求时是否携带cookie
  }, opts)).then(data => data.data)
}

export default {
  callApi,
  get: (url, data = {}, isServer) => callApi(url, 'get', data, isServer),
  put: (url, data = {}, isServer) => callApi(url, 'put', data, isServer),
  post: (url, data = {}, isServer) => callApi(url, 'post', data, isServer),
  delete: (url, data = {}, isServer) => callApi(url, 'delete', data, isServer),
}