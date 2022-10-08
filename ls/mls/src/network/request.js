import axios from "axios";
import { Message, Loading } from 'element-ui'
export function request(config){
  //axios封装
  const instance=axios.create({
    //baseConfig
    baseURL: 'http://api.guanlingls.com/index.php/api',
    timeout: 5000

  })
  let $_loading = null
  //拦截器
  instance.interceptors.request.use(config => {
    // if(config.loading === 'undefined'){
    //   $_loading = loading.service({
    //     fullscreen: true,
    //     lock: true,
    //     text: '正在加载中...',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0,0,0,.35)'
    //   })
    // }
    // if(sessionStorage.getItem('Authorization')){
    //   config.headers.Authorization = sessionStorage.getItem('Authorization')
    // }

    return config;
  },error => {
    console.log(error)
  })
//响应拦截器
  instance.interceptors.response.use(config => {
    // $_loading.close()
    // return config.data;
  },error => {
    console.log(error)
  })
  return instance(config)
}
