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

	  $_loading = Loading.service({
		fullscreen: true,
		lock: true,
		text: '正在加载中...',
		spinner: 'el-icon-loading',
		background: 'rgba(255,255,255,.5)'
	  })

    return config;
  },error => {
    console.log(error)
  })
//响应拦截器
  instance.interceptors.response.use(config => {
    $_loading.close()
  },error => {
    console.log(error)
  })
  return instance(config)
}
