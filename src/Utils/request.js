import axios from 'axios'
import { Loading } from 'element-ui';
// 创建 axios 实例
const service = axios.create({
  // baseURL: baseURL, // api base_url
  timeout: 90000 // 请求超时时间
})

service.all = axios.all

const err = (error) => {
  hideLoading()
  return Promise.reject(error)
}

let loading = null
let requestCount = 0
let loadingInstance
// 显示loading
function showLoading () {
  if (requestCount === 0) {
    loading = '请求数据中'
  }
  requestCount++
  Loading.service();
  loadingInstance = Loading.service();
}
// 隐藏loading
function hideLoading () {
  if (requestCount > 0) {
    requestCount--
  }
  if (loading && requestCount === 0) {
    loading = null
    loadingInstance.close();
  }
}

// 拦截请求
service.interceptors.request.use(config => {
  const token = 'token'
  if (token) {
    config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  showLoading()
  return config
}, err)

//响应请求
service.interceptors.response.use((response) => {
  hideLoading()
  return response.data
}, err)


export default service 
