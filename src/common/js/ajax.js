import axios from 'axios-jsonp-pro' 
import store from '@/store/index'

export function ajax (options) {
  store.dispatch("loading",true);
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
      baseURL: '',
      timeout: 60000 // 60秒超时
    })
    instance(options)
    .then(response => {
     store.dispatch("loading",false);
      resolve(response)
    })
    .catch(error => {
     store.dispatch("loading",false);
      console.log('请求异常信息：' + error)
      reject(error)
    })
  })
}

