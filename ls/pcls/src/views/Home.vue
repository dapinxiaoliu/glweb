<template>
  <div class="home" v-cloak>
   <!-- 新闻 -->
   <div class="news">
	   <div class="newswrap w12">
		   <div class="newsleft comnew">
			   <ul>
				   <li>
					  <video :src="yaowenData['url']" controls></video>
					  <router-link :to="{path:yaowenData['other']}">
						<strong>{{yaowenData['name']}}</strong>
						<p>{{yaowenData.remark}}....</p>
					</router-link></li>
				   
				   <li v-for="item,index in leftban">
					   <router-link :to="{path:item.url}">
						   <img :src="item.thumb" alt="">
						   <strong>{{item.name}}</strong>
						   <p>{{item.remark}}....</p>
						</router-link>
				   </li>

			   </ul>
			   <ol></ol>
		   </div>
		   <div class="newsmidlle comnew">
			   <h2 class="comtitle"><strong>冠领资讯</strong><a href="javascript:void(0)" @click="toinfo('newslist',25)">更多></a></h2>
			   <div class="newsmidtop">
				  <a href="javascript:void(0)" @click="toinfo('newsinfo',headnewsone['id'])">
					   <strong>{{headnewsone['title']}}</strong>
					   <p>{{headnewsone['miaoshu']}}...</p>
				   </a>
			   </div>
			   <div class="newsmidtop">
				  <a href="javascript:void(0)" @click="toinfo('newsinfo',headnewstwo['id'])">
					   <strong>{{headnewstwo['title']}}</strong>
					   <p>{{headnewstwo['miaoshu']}}...</p>
				   </a>
			   </div>
			   <ul>
				   <li v-for="item,index in topnews" :key="item.id">
					   <a href="javascript:void(0)" @click="toinfo('newsinfo',item.catid,item.id)" >{{item.title}}</a><em>{{item.create_time}}</em></li>
			   </ul>
		   </div>
		   <div class="newsright">
			   <div class="newsrun newstop">
				   <h2 class="comtitle"><strong>办案公告</strong><a href="javascript:void(0)" @click="toinfo('nolist',2)" >更多></a></h2>
				   <div class="newsrunbox">
					   <ul>
						   <li v-for="item,index in topnoticletwo" :key="item.id">
							  <router-link :to="{path:'/noticle/'+item.id+'.html'}">{{item.description}}</router-link>
							</li>
					   </ul>
				   </div>
			   </div>
			   <div class="newsrun newsbottom">
				   <h2 class="comtitle"><strong>开庭公告</strong><a href="javascript:void(0)" @click="toinfo('nolist',1)" >更多></a></h2>
				   <div class="newsrunbox">
					   <ul>
						   <li v-for="item,index in topnoticleone " :key="item.id">
							   <router-link :to="{path:'/noticle/'+item.id+'.html'}">{{item.description}}</router-link>
							</li>
					   </ul>
				   </div>
			   </div>
		   </div>
	   </div>
   </div>
   <!-- 冠领视频 -->
   <div class="shipin">
	   <div class="shipinwrap w12">
		   <div class="shipinleft shipinbox">
			   <h2 class="comtitle"><strong>冠领在央视 —《律师来了》</strong><a href="javascript:void(0)" @click="toinfo('tvlists',51)">更多></a></h2>
			   <ul>
				   <li v-for="item,index in laileData" :key="item.id">
					   <a href="javascript:void(0)" @click="toinfo('tvlist',item.id,item.catid)">
					   <img :src="item.thumb" alt="">
					   <div>
						   <strong>{{item.title}}</strong>
						   <p>{{item.description}}</p>
					   </div>
				   </a></li>
			   </ul>
		   </div>
		   <div class="shipinmid shipinbox">
			   <h2 class="comtitle"><strong>冠领在央视 —《法律讲堂》</strong><a href="javascript:void(0)" @click="toinfo('tvlists',48)">更多></a></h2>
			   <ul>
				   <li v-for="item,index in falvData" :key="item.id">
					   <a href="javascript:void(0)" @click="toinfo('tvlist',item.id,item.catid)">
					   <img :src="item.thumb" alt="">
					   <div>
						   <strong>{{item.title}}</strong>
						   <p>{{item.description}}</p>
					   </div>
				   </a></li>
			   </ul>
		   </div>
		   <div class="shipinright shipinbox">
			   <h2 class="comtitle"><strong>冠领在BRTV — 电视普法</strong><a href="javascript:void(0)" @click="toinfo('tvlists',2)">更多></a></h2>
			   <ul>
				   <li v-for="item,index in brtvData" :key="item.id">
					   <a href="javascript:void(0)" @click="toinfo('tvlist',item.id,item.catid)">
					   <img :src="item.thumb" alt="">
					   <div>
						   <strong>{{item.title}}</strong>
						   <p>{{item.description}}</p>
					   </div>
				   </a></li>
			   </ul>
		   </div>
	   </div>
   </div>
   <!-- ad -->
   <div class="adbox">
	   <div class="adboxwrap w12">
		   <a href="">
			   <img src="@/assets/images/index_td.jpg" alt="">
			   <div class="adbox1"><img src="@/assets/images/1.png" alt=""></div>
			   <div class="adbox2"><img src="@/assets/images/2.png" alt=""></div>
			   <div class="adbox3"><img src="@/assets/images/3.png" alt=""></div>
			   <div class="adbox4"><img src="@/assets/images/4.png" alt=""></div>
			   <div class="adbox5"><img src="@/assets/images/5.png" alt=""></div>
			   <div class="adbox6"><img src="@/assets/images/6.png" alt=""></div>
			   <div class="adbox7"><img src="@/assets/images/7.png" alt=""></div>
		   </a>
	   </div>
   </div>
   <!-- 律师团队 -->
   <div class="team">
	   <div class="teamwrap w12">
		   <div class="teamleft comborder">
			   <h2 class="comtitle"><strong>主任律师</strong><router-link to="/team/list/index.html?id=13">更多></router-link></h2>
			   <div class="teaminner">
				   <div v-for="item,index in zhurenData" :key="item.id">
					   <a href="javascript:void(0)" @click="toinfo('team',item.catid,item.id)" >
						   <img :src="item.thumb" alt="">
						   <strong>{{item.title}}</strong>
						   <p>{{item.description}}</p>
					   </a>
				   </div>
			   </div>
		   </div>
		   <div class="teammid comborder">
			   <h2 class="comtitle"><strong>律师团队</strong><router-link to="/team/index.html">更多></router-link></h2>
			   <div class="teammidbox">
				   <ul>
						<li v-for="item,index in chaiqianData" :key="item.id">
						   <router-link :to="{path:'/team/'+item.id+'.html'}">
							   <img :src="item.thumb" alt=""><p>{{item.title}}</p>
							</router-link>
						</li>

				   </ul>
			   </div>
		   </div>
		   <div class="teammright comborder">
			   <h2 class="comtitle"><strong>好评荣誉</strong><a href="">更多></a></h2>
			   <div class="swiper teamrun swiper-no-swiping">
				   <div class="swiper-wrapper">
					 <div class="swiper-slide" v-for="item,index in haopingData" :key="item.id">
						 <img :src="item.thumb" alt="">
						 <!-- {{item.title}} -->
					</div>
				   </div>
				 </div>
		   </div>
	   </div>
   </div>
   <!-- 案例 -->
   <div class="anli">
	   <div class="anliwrap w12">
		   <div class="anliinner">
			   <div class="anlileft comborder combox">
				   <h2 class="comtitle"><strong>国家赔偿胜诉案例</strong><a href="javascript:void(0)" @click="toinfo('list',5)">更多></a></h2>
	
				   <div class="anlibot">
					   <ul>
						   <li v-for="item,index in guojiaData" :key="item.id">
							   <a href="javascript:void(0)" @click="toinfo('anlilist',item.catid,item.id)" >
								   <div class="anlipic"><img :src="item.thumb" alt=""></div>
									<div class="anliinfo">
										<strong>{{item.title}}</strong>
										<p>{{item.description}}</p>
									</div>
									
							   </a>
							   <span>{{item.create_time}}</span>
							</li>

					   </ul>
				   </div>
			   </div>
			   <div class="anliright comborder combox">
				   <h2 class="comtitle"><strong>违法拆迁胜诉案例</strong><a href="javascript:void(0)" @click="toinfo('list',6)">更多></a></h2>
				   <div class="anlibot">
					   <ul>
						  <li v-for="item,index in weifachaiqian" :key="item.id">
						  <a href="javascript:void(0)" @click="toinfo('anlilist',item.catid,item.id)" >
							   <div class="anlipic"><img :src="item.thumb" alt=""></div>
								<div class="anliinfo">
									<strong>{{item.title}}</strong>
									<p>{{item.description}}</p>
								</div>
								
						   </a>
						   <span>{{item.create_time}}</span>
						</li>
					   </ul>
				   </div>
			   </div>
		   </div>

		   <div class="anliinner">
			   <div class="anlileft comborder combox">
				   <h2 class="comtitle"><strong>征收决定胜诉案例</strong><a href="javascript:void(0)" @click="toinfo('list',9)">更多></a></h2>

				   <div class="anlibot">
					   <ul>
						   <li v-for="item,index in zhengshou" :key="item.id">
						     <a href="javascript:void(0)" @click="toinfo('anlilist',item.catid,item.id)" >
						   	   <div class="anlipic"><img :src="item.thumb" alt=""></div>
						   		<div class="anliinfo">
						   			<strong>{{item.title}}</strong>
						   			<p>{{item.description}}</p>
						   		</div>
						   		
						      </a>
						      <span>{{item.create_time}}</span>
						   </li>
					   </ul>
				   </div>
			   </div>
			   <div class="anliright comborder combox">
				   <h2 class="comtitle"><strong>补偿决定胜诉案例</strong><a href="javascript:void(0)" @click="toinfo('list',8)">更多></a></h2>

				   <div class="anlibot">
					   <ul>
						   <li v-for="item,index in buchang" :key="item.id">
						      <a href="javascript:void(0)" @click="toinfo('anlilist',item.catid,item.id)" >
						   	   <div class="anlipic"><img :src="item.thumb" alt=""></div>
						   		<div class="anliinfo">
						   			<strong>{{item.title}}</strong>
						   			<p>{{item.description}}</p>
						   		</div>
						   		
						      </a>
						      <span>{{item.create_time}}</span>
						   </li>
					   </ul>
				   </div>
			   </div>
		   </div>

		   <div class="anliinner">
			   <div class="anlileft comborder combox">
				   <h2 class="comtitle"><strong>拆违决定胜诉案例</strong><a href="javascript:void(0)" @click="toinfo('list',7)">更多></a></h2>

				   <div class="anlibot">
					   <ul>
						   <li v-for="item,index in chaiwei" :key="item.id">
						     <a href="javascript:void(0)" @click="toinfo('anlilist',item.catid,item.id)" >
						   	   <div class="anlipic"><img :src="item.thumb" alt=""></div>
						   		<div class="anliinfo">
						   			<strong>{{item.title}}</strong>
						   			<p>{{item.description}}</p>
						   		</div>
						   		
						      </a>
						      <span>{{item.create_time}}</span>
						   </li>
					   </ul>
				   </div>
			   </div>
			   <div class="anliright comborder combox">
				   <h2 class="comtitle"><strong>信息公开胜诉案例</strong><a href="javascript:void(0)" @click="toinfo('list',10)">更多></a></h2>
				   <div class="anlibot">
					   <ul>
						   <li v-for="item,index in xinxi" :key="item.id">
						      <a href="javascript:void(0)" @click="toinfo('anlilist',item.catid,item.id)" >
						   	   <div class="anlipic"><img :src="item.thumb" alt=""></div>
						   		<div class="anliinfo">
						   			<strong>{{item.title}}</strong>
						   			<p>{{item.description}}</p>
						   		</div>
						   		
						      </a>
						      <span>{{item.create_time}}</span>
						   </li>
					   </ul>
				   </div>
			   </div>
		   </div>
	   </div>
   </div>
   <!-- 荣誉 -->
   <div class="honor">
	   <div class="honorwrap w12">
		   <div class="honorleft comborder">
			   <h2 class="comtitle"><strong>锦旗荣誉</strong><a href="javascript:void(0)" @click="toinfo('honor',24)">更多></a></h2>
			   <div class="honorleftbox">
				   <ul>
					   <li v-for="item,index in jinqi" :key="item.id"><img :src="item.thumb" alt=""></li>
				   </ul>
			   </div>
		   </div>
		   <div class="honormid comborder honorcom">
			   <h2 class="comtitle"><strong>冠领荣誉</strong><a href="javascript:void(0)" @click="toinfo('honor',23)">更多></a></h2>
			   <ul>
				   <li v-for="item,index in rongyu">
					  <a href="javascript:void(0)" @click="toinfo('honorx',item.catid,item.id)">
					   <img src="@/assets/images/jp1.jpg" alt="">
					   <div class="jpintro">
						   <strong>{{item.title}}</strong>
						   <p>{{item.miaoshu}}</p>
					   </div>
				   </a></li>
			   </ul>
		   </div>
		   <div class="honorright comborder honorcom">
			   <h2 class="comtitle"><strong>奖杯荣誉</strong><a href="javascript:void(0)" @click="toinfo('honor',25)">更多></a></h2>
			   <ul>
				   <li v-for="item,index in jiangbei">
					    <a href="javascript:void(0)" @click="toinfo('honorx',item.catid,item.id)">
					   <img :src="item.thumb" alt="">
					   <div class="jpintro">
						   <strong>{{item.title}}</strong>
						   <p>{{item.miaoshu}}</p>
					   </div>
				   </a></li>
			   </ul>
		   </div>
	   </div>
   </div>

   <!-- 媒体报道 -->
   <div class="baodao">
	   <div class="baodaowrap w12">
		   <div class="baodaoleft comborder">
			   <h2 class="comtitle"><strong>媒体报道</strong><router-link :to="{path:'/news/index.html'}">更多></router-link></h2>
			   <ul>
				   <li v-for="item,index in meiti" :key="item.id">
					   <a href="javascript:void(0)" @click="toinfo('meiti',item.catid,item.id)" >{{item.title}}</a><span>{{item.create_time}}</span></li>
			   </ul>
		   </div>
		   <div class="baodaomid comborder">
			   <h2 class="comtitle"><strong>拆迁法规</strong><a href="javascript:void(0)" @click="toinfo('fagui',61)">更多></a></h2>
			   <ul>
				   <li v-for="item,index in fagui">
					   <a href="javascript:void(0)" @click="toinfo('faguix',item.catid,item.id)" >{{item.title}}</a><span>{{item.create_time}}</span></li>
			   </ul>
		   </div>
		   <div class="baodaoright comborder">
			   <h2 class="comtitle"><strong>律师答疑</strong><a href="javascript:void(0)"  @click="toinfo('dayi',44)">更多></a></h2>
			   <ul>
				   <li v-for="item,index in dayi" :key="item.id">
					    <a href="javascript:void(0)" @click="toinfo('dayix',item.catid,item.id)" >{{item.title}}</a></li>

			   </ul>
		   </div>
	   </div>
   </div>
   <div class="meiti">
	   <div class="meitiwrap w12">
		   <div class="meitileft comborder">
			   <h2 class="comtitle"><strong>电视媒体</strong></h2>
			   <img src="@/assets/images/tv.jpg" alt="">
		   </div>
		   <div class="meitimid comborder">
			   <h2 class="comtitle"><strong>纸媒</strong></h2>
			   <img src="@/assets/images/huoban.jpg" alt="">
		   </div>
		   <div class="meitiright comborder">
			   <h2 class="comtitle"><strong>新媒体</strong></h2>
			   <img src="@/assets/images/zhichi.jpg" alt="">
		   </div>
	   </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src

import $ from 'jquery'
import Swiper from 'swiper'
import "swiper/css/swiper.min.css"
import {request} from '../network/request.js'
import GLOBAL from '../global/global.js'
export default {
  name: 'home',
  components: {
	
  },
  data(){
	  return {
		  headnewsone:[],
		  headnewstwo:[],
		  topnews:[],
		  topnoticleone:[],
		  topnoticletwo:[],
		  laileData:[],
		  falvData:[],
		  brtvData:[],
		  zhurenData:[],
		  chaiqianData:[],
		  haopingData:[],
		  guojiaData:[],
		  weifachaiqian:[],
		  zhengshou:[],
		  buchang:[],
		  chaiwei:[],
		  xinxi:[],
		  jinqi:[],
		  rongyu:[],
		  jiangbei:[],
		  meiti:[],
		  leftban:[],
		  yaowenData:[],
		  fagui:[],
		  dayi:[]
	  }
  },
  methods:{
	  toinfo(id,catid,cid=0){
	  	if(id == 'list'){
			localStorage.setItem('anlicatid',catid)
	  		this.$router.push({ path:'/anli/list/index.html'})
	  	}else if(id == 'honor'){
			localStorage.setItem('honorcatid',catid)
			this.$router.push({ path:'/honor/list/index.html'})
		}else if(id == 'honorx'){
			localStorage.setItem('honorcatid',catid)
			this.$router.push({ path:'/honor/'+cid+'.html'})
		}else if(id == 'newslist'){
			localStorage.setItem('newscatid',catid)
			this.$router.push({ path:'/news/index.html'})
		}else if(id == 'nolist'){
			localStorage.setItem('noticlecatid',catid)
			this.$router.push({ path:'/noticle/list/index.html',query:{'id':catid}})
		}else if(id == 'nolistx'){
			localStorage.setItem('noticlecatid',catid)
			this.$router.push({ path:'/noticle/'+cid+'.html'})
		}else if(id == 'newsinfo'){
			localStorage.setItem('newscatid',catid)
			this.$router.push({ path:'/news/'+cid+'.html'})
		}else if(id == 'tvlist'){
			localStorage.setItem('tvcatid',cid)
			this.$router.push({ path:'/tv/'+catid+'.html'})
		}else if(id == 'tvlists'){
			localStorage.setItem('tvcatid',catid)
			this.$router.push({ path:'/tv/list/index.html'})
		}else if(id == 'fagui'){
			localStorage.setItem('faguicatid',catid)
			this.$router.push({ path:'/fagui/index.html'})
		}else if(id == 'faguix'){
			localStorage.setItem('faguicatid',catid)
			this.$router.push({ path:'/fagui/'+cid+'.html'})
		}else if(id == 'dayi'){
			localStorage.setItem('dayicatid',catid)
			this.$router.push({ path:'/dayi/index.html'})
		}else if(id == 'dayix'){
			localStorage.setItem('dayicatid',catid)
			this.$router.push({ path:'/dayi/'+cid+'.html'})
		}else if(id == 'team'){
			localStorage.setItem('teamcatid',catid)
			this.$router.push({ path:'/team/'+cid+'.html'})
		}else if(id == 'anlilist'){
			localStorage.setItem('anlicatid',catid)
			this.$router.push({ path:'/anli/'+cid+'.html'})
		}else if(id == 'meiti'){
			localStorage.setItem('newscatid',catid)
			this.$router.push({ path:'/news/'+cid+'.html'})
		}
	  },
	  getdayi(){
		  let that = this
		  request({
			url: '/dayi/read?id=44&page=1&page_size=12',
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				// console.log(jsondata);
				if(jsondata['code'] == 200){
					that.dayi = []
					let beforeData = jsondata['data']
					beforeData['data'].forEach(function(value,index,arr){
						value['create_time'] = value['create_time'].split(' ')[0]
						that.dayi.push(value)
						
					})
						
	
				}
			}]
		  })
	  },
	  getfagui(){
		  let that = this
		  request({
			url: '/index/fagui',
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				// console.log(jsondata);
				if(jsondata['code'] == 200){
					that.fagui = []
					let beforeData = jsondata['data']
					beforeData.forEach(function(value,index,arr){
						if(index < 12){
							value['create_time'] = value['create_time'].split(' ')[0]
							that.fagui.push(value)
						}
					})
						
	
				}
			}]
		  })
	  },
	  getyaowen(){
		  let that = this
		  request({
			url: '/index/videobanner',
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				// console.log(jsondata);
				if(jsondata['code'] == 200){
					that.yaowenData = []
					let beforeData = jsondata['data']
						that.yaowenData = beforeData
				}
			}]
		  })
	  },
	  getleftBan(id){
		  let that = this
		  if(id == 5){
			  that.leftban = []
		  }
		  request({
			url: '/index/banner?id='+id,
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				// console.log(jsondata);
				if(jsondata['code'] == 200){
					let beforeData = jsondata['data']
					if(id == 5){
						beforeData.forEach(function(value,index,arr){
							if(value['thumb'].length > 100){
								// console.log(value['thumb']);
								let beforeimg = value['thumb'].split(':')[21];
								value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								that.leftban.push(value)
							}
						})
						
					}
					

				}
			}]
		  })
	  },
	  headerNews(){
	  		  let that = this
	  		  request({
	  			url: '/index/ttnews',
	  			responseType: 'json',
	  			transformResponse:[function(data){
	  				let jsondata = JSON.parse(data)
	  				// console.log(jsondata);
	  				if(jsondata['code'] == 200){
	  					that.headerData = []
	  					let beforeData = jsondata['data']
						that.headnewsone = beforeData[0]
						that.headnewstwo = beforeData[1]

	  				}
	  			}]
	  		  })
	  },
	  topNews(){
		  let that = this
		  request({
			url: '/index/news',
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				// console.log(jsondata);
				if(jsondata['code'] == 200){
					that.topnews = []
					let beforeData = jsondata['data']
					beforeData.forEach(function(value,index,arr){
						if(index < 9){
							value['create_time'] = value['create_time'].split(' ')[0]
							that.topnews.push(value)
						}
					})
				}
			}]
		  })
	  },
	  topNoticle(id){
		  let that = this
		  if(id == 1){
			  that.topnoticleone = []
		  }else if(id == 2){
			  that.topnoticletwo = []
		  }
		  request({
			url: '/index/gonggao?id='+id,
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				// console.log(jsondata);
				if(jsondata['code'] == 200){
					
					let beforeData = jsondata['data']
					// console.log(beforeData);
					
					// console.log(that.topnoticletwo);
					beforeData.forEach(function(value,index,arr){
						if(value['thumb'].length > 100){
							let beforeimg = value['thumb'].split(':')[21];
							value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
							if(id == 1){
								that.topnoticleone.push(value)
							}else if(id == 2){
								that.topnoticletwo.push(value)
							}
						}
					})
				}
			}]
		  })
	  },
	  getshipin(id){
		  let that = this
		  if(id == 51){
			  that.laileData = []
		  }else if(id == 48){
			  that.falvData = []
		  }
		  request({
			// url: '/video/read?id='+id+'&page=1&page_size=3',
			url:'/index/video?id='+id,
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				if(jsondata['code'] == 200){
					let beforeData = jsondata['data']
					console.log(beforeData);
					beforeData.forEach(function(value,index,arr){
						if(index < 3){ 
							if(value['thumb'].length > 100){
								console.log(value['thumb'].split(':'));
								let beforeimg = value['thumb'].split(':')[23]
								value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								if(id == 51){
									that.laileData.push(value)
									// console.log(that.laileData);
								}else if(id == 48){
									that.falvData.push(value)
								}
							}
						}
					})
				}
			}]
		  })
	  },
	  getbrtv(id){
		  let that = this
		  request({
			url: '/video/wapread?id='+id+'&page=1&page_size=3',
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				if(jsondata['code'] == 200){
					that.brtvData = []
					let beforeData = jsondata['data']
					// console.log(beforeData);
					beforeData['data'].forEach(function(value,index,arr){
						if(value['thumb'].length > 100){
							let beforeimg = value['thumb'].split(':')[21]
							value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
							that.brtvData.push(value)
						}
					})
				}
			}]
		  })
	  },
	  getlawyer(id,pagesize){
		  let that = this
		  if(id == 13){
			  that.zhurenData = []
		  }else if(id == 14){
			  that.chaiqianData = []
		  }
		  request({
			url: '/team/read?id='+id+'&pgae=1&page_size='+pagesize,
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				if(jsondata['code'] == 200){
					let beforeData = jsondata['data']
					// console.log(beforeData);
					beforeData['data'].forEach(function(value,index,arr){
						if(value['thumb'].length > 100){
							let beforeimg = value['thumb'].split(':')[21]
							value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)

							if(id == 13){
								that.zhurenData.push(value)
							}else if(id == 14){
							  that.chaiqianData.push(value)
							}
						}
					})
				}
			}]
		  })
	  },
	  gethaoping(){
		  let that = this
		  request({
			url: '/honor/read?id=64&page=1&page_size=10',
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				if(jsondata['code'] == 200){
					that.haopingData = []
					let beforeData = jsondata['data']
					// console.log(beforeData);
					beforeData['data'].forEach(function(value,index,arr){
						if(value['thumb'].length > 100){
							let beforeimg = value['thumb'].split(':')[21]
							value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
							that.haopingData.push(value)
						}
					})
					// console.log(that.haopingData);
				}
			}]
		  })
	  },
	  getanli(id){
		  let that = this
		  if(id == 5){
			  that.guojiaData = []
		  }else if(id == 6){
			  that.weifachaiqian = []
		  }else if(id == 9){
			  that.zhengshou = []
		  }else if(id == 8){
			  that.buchang = []
		  }else if(id == 7){
			  that.chaiwei = []
		  }else if(id == 7){
			  that.xinxi = []
		  }
		  request({
			url: '/anli/read?catid='+id+'&page=1&page_size=11',
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				if(jsondata['code'] == 200){
					let beforeData = jsondata['data']
					// console.log(beforeData);
					beforeData['data'].forEach(function(value,index,arr){
						if(value['thumb'].length > 100){
							let beforeimg = value['thumb'].split(':')[21]
							value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
							value['create_time'] = value['create_time'].split(' ')[0]
							if(id == 5){
								that.guojiaData.push(value)
							}else if(id == 6){
								that.weifachaiqian.push(value)
							}else if(id == 9){
							  that.zhengshou.push(value)
							}else if(id == 8){
							  that.buchang.push(value)
							}else if(id == 7){
							  that.chaiwei.push(value)
						    }else if(id == 10){
							  that.xinxi.push(value)
						    }
						}
					})
				}
			}]
		  })
	  },
	  gethonor(id){
		  let that = this
		  if(id == 24){
			  that.jinqi = []
		  }else if(id == 23){
			  that.rongyu = []
		  }else if(id == 25){
			  that.jiangbei = []
		  }
		  request({
			url: '/index/honor?id='+id,
			responseType: 'json',
			transformResponse:[function(data){
				let jsondata = JSON.parse(data)
				if(jsondata['code'] == 200){
					let beforeData = jsondata['data']
					beforeData.forEach(function(value,index,arr){
						if(value['thumb'].length > 100){
							let beforeimg = value['thumb'].split(':')[21]
							value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
							if(id == 24){
								that.jinqi.push(value)
							}else if(id == 23){
								if(index <= 1){
									that.rongyu.push(value)
								}
							}else if(id == 25){
							  that.jiangbei.push(value)
							  // console.log(that.jiangbei);
							}
						}
					})
				}
			}]
		  })
	  },
	  getmeiti(){
		  let that = this
		  request({
				url: '/index/news',
				responseType: 'json',
				transformResponse:[function(data){
					let jsondata = JSON.parse(data)
					if(jsondata['code'] == 200){
						that.meiti = []
						let beforeData = jsondata['data']
						// console.log(beforeData);	alert(value)
						beforeData.forEach(function(value,index,arr){
							value['create_time'] = value['create_time'].split(' ')[0]
							that.meiti.push(value)
							
						})
					}
				}]
		  })
	  }
  },
  created(){
	  this.getyaowen()
	  this.getleftBan(5)
	  this.headerNews()
	  this.topNews()
	  this.topNoticle(1)
	  this.topNoticle(2)
	  this.getshipin(51)
	  this.getshipin(48)
	  this.getbrtv(2)
	  this.getlawyer(13,2)
	  this.getlawyer(14,8)
	  this.gethaoping()
	  this.getanli(5)
	  this.getanli(6)
	  this.getanli(9)
	  this.getanli(8)
	  this.getanli(7)
	  this.getanli(10)
	  this.gethonor(24)
	  this.gethonor(23)
	  this.gethonor(25)
	  this.getmeiti()
	  this.getdayi()
	  this.getfagui()
  },
  mounted() {


	this.$nextTick(function(){
		setTimeout(function(){
				
			
		    let delay = 5000
		    //新闻模块脚本
		    let luli = $('.newsleft ul li'),
		        lulisize = luli.length,
		        lou = $('.newsleft ol'),
		        olinode = '',
		        newid = 0,
		        newtimeid = null
				// console.log(lulisize);
		        for(let i = 1;i<=lulisize; i++){
		            olinode += "<li class='newsli'>"+i+"</li>"
		        }
				
		        lou.append(olinode)
		    let loli = $('.newsleft ol li')
		    loli.eq(0).addClass('active')
		    loli.mouseover(function(){
		        clearInterval(newtimeid)
		        let idx = $(this).index()
		        newid = idx
		        loli.eq(idx).addClass('active').siblings().removeClass('active')
		        luli.eq(idx).stop().fadeIn().siblings().hide()
		    }).mouseout(function(){
		        newtimeid = setInterval(runnew,delay)
		    })
		    newtimeid = setInterval(runnew,delay)
		    function runnew(){
		        newid >= (lulisize-1) ? newid = 0 : newid++
		        loli.eq(newid).addClass('active').siblings().removeClass('active')
		        luli.eq(newid).stop().fadeIn().siblings().hide()
		    }
		    luli.mouseover(function(){
		        clearInterval(newtimeid)
		    }).mouseout(function(){
		        newtimeid = setInterval(runnew,delay)
		    })
		},300)
	})
  	$(function(){

setTimeout(function(){
		//公告模块脚本
		let newstop = $('.newstop ul'),
		    newsbottom = $('.newsbottom ul'),
		    speed = 1,
		    newsrunboxh = newsbottom.height(),
		    newstimeid = null,
		    newsbottimeid = null,
		    newsulhtml = newstop.html(),
		    newsulbothtml = newsbottom.html()
		    newstop.html(newsulhtml+newsulhtml)
		    newsbottom.html(newsulbothtml+newsulbothtml)
		    newstimeid = setInterval(newsrun,50)
			// alert(newsrunboxh)
		    function newsrun(){
		        let ultop = parseInt($('.newstop ul').css('top'))
		        if(ultop <= '-'+newsrunboxh){
		            $('.newstop ul').css('top','0')
		        }else{
		            newstop.css({
		                top: '-='+ speed
		            },10)
		        } 
		    }
		    newsbottimeid = setInterval(newsbotrun,50)
		    function newsbotrun(){
		        let ulbot = parseInt($('.newsbottom ul').css('top'))
		        if(ulbot <= '-'+newsrunboxh){
		            $('.newsbottom ul').css('top','0')
		        }else{
		            newsbottom.css({
		                top: '-='+ speed
		            },10)
		        }
		    }
		    newstop.mouseover(function(){
		        clearInterval(newstimeid)
		    }).mouseout(function(){
		        newstimeid = setInterval(newsrun,50)
		    })
		  	
		    newsbottom.mouseover(function(){
		        clearInterval(newsbottimeid)
		    }).mouseout(function(){
		        newsbottimeid = setInterval(newsbotrun,50)
		    })
			
			
			//律师团队模块脚本
			let teamli = $('.teammid ul li'),
			    teamlisize = teamli.length,
			    teamlih = teamli.outerHeight(true),
			    teamtimeid = null,
			    teammidul = $('.teammid ul'),
			    itemulh = -(teamlih * (teamlisize/2)),
				linode = teamli.clone()
				teammidul.html(teammidul.html()+teammidul.html())
				
			  	
			teamtimeid = setInterval(teamrun,30)
			function teamrun(){
			    let tultop = parseInt($('.teammid ul').css('top'))
			    if(tultop <= itemulh){
			        teammidul.css({
			            top: 0
			        })
			       
			    }else{
			        teammidul.animate({
			            top: '-='+ speed
			        },10)
			    }
			}
			teammidul.mouseover(function(){
			    clearInterval(teamtimeid)
			}).mouseout(function(){
			    teamtimeid = setInterval(teamrun,40)
			})
			  	
			  	
			new Swiper(".teamrun", {
			  slidesPerView: 1,
			  spaceBetween: 0,
			  loop: true,
			  autoplay:{
			    delay:5000
			  }
			});
			
			
			//荣誉模块脚本
			let huli = $('.honor .honorleft ul li'),
			    hul = $('.honor .honorleft ul'),
			    hulisize = huli.length,
			    huliw = huli.outerWidth(true),
				leftmargin = -(hulisize * huliw),
				honortimeid = null
			    hul.width((hulisize*2)*huliw)
			    hul.html(hul.html()+hul.html())
			
			honortimeid = setInterval(honorun,50)
			function honorun(){
			    let hulleft = parseInt(hul.css('left'))
			    if(hulleft <= leftmargin){
			        hul.css({
			            left: 0
			        })
			    }else{
			        hul.animate({
			            left: '-=' + speed
			        },10)
			    }
			}
			hul.mouseover(function(){
			    clearInterval(honortimeid)
			}).mouseout(() => {
			    honortimeid = setInterval(honorun,30)
			})
	},1000)

  	


  	})
  },
  watch:{
    $route(to, from){
		document.title='北京冠领律师事务所'
    }
  }
}
</script>

<style lang="scss" scoped>
$color:#e25956;
.container{
    .news{
        margin-top: 10px;
        .comnew{
            height: 530px;
            border: 1px solid #fad4ba;
        }
        .newswrap{
            display: flex;
            justify-content: space-between;
            .newsleft{
                width: 480px;
                
                position: relative;
				video{
					width: 457px;
					height: 330px;
					background: #000;
				}
                ul{
                    width: 457px;
                    margin: 10px auto 0;
                    li{
                        display: none;
                        img{
                            border: 1px solid #fad4ba;
                            height: 330px;
                            width: 100%;
                        }
                        strong{
                            color: #e71f1c;
                            margin: 20px 10px;
                            display: block;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							overflow: hidden;
                        }
                        p{
                            line-height: 24px;
                            color: #475776;
                            padding: 0 10px;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 4;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            font-size: 14px;
                        }
                    }
                    li:first-child{
                        display: block;
                    }
                }
                ol{
                    position: absolute;
                    bottom: 200px;
                    display: flex;
                    right: 30px; 
                }
            }
            .newsmidlle{
                width: 415px;
                .newsmidtop{
                    padding-bottom: 10px;
                    border-bottom: 1px dashed #9d9c9c;
                    strong{
                        color: #e71f1c;
                        font-weight: bold;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        margin-bottom: 10px;
                        margin-top: 10px;
                        padding: 0 10px;
                    }  
                    p{
                        color: #000;
                        padding: 0 10px;
                        line-height: 24px;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        font-size: 14px;
                    }
                }
                ul{
                    padding: 10px;
                    li{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 25px;
                        a:hover{
                            color: $color;
                        }
                        a{
                            font-size: 14px;
                            position: relative;
                            text-indent: 15px;
                            width: 298px;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 1;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            transition: all .1s linear;
                        }
                        a::after{
                            content: "";
                            position: absolute;
                            width:5px; 
                            height:5px; 
                            left: 0;
                            top: 40%;
                            background:#e73825; 
                        }
                        em{
                            font-size: 14px;
                        }
                    }
                }
            }
            .newsright{
                width: 265px;
                .newsrun:last-child{
                    margin-top: 10px;
                }
                .newsrun{
                    position: relative;
                    border: 1px solid #fad4ba;
                    padding-bottom: 8px;
                    box-sizing: border-box;
					background: #fff;
                    .newsrunbox{
                        position: relative;
                        height: 200px;
                        overflow: hidden;
                        margin-top: 10px;
                    }
                    ul{
                        margin: 0 10px;
                        position: absolute;
                        width: 245px;
                        top: 0;
                        li{
                            overflow: hidden;
                            text-overflow: ellipsis;

                            a{
                                height:25px; 
                                line-height:25px;
                                white-space: nowrap;
                                text-overflow: ellipsis; 
                                overflow: hidden;
                                font-size: 14px;
                                position: relative;
                                padding-left: 15px;
                            }
                            a::after{
                                content: "";
                                position: absolute;
                                width:5px; 
                                height:5px; 
                                left: 0;
                                top: 40%;
                                background:#e73825; 
                            }
                        }
                    }
                }
            }
        }
    }
    .shipin{
        margin-top: 10px;
        h2.comtitle{
            strong{
                padding: 0 6px;
            }
            strong::after{
                left: 22%;
            }
            
        }
        .shipinwrap{
            display: flex;
            justify-content: space-between;
            .shipinbox{
                border: 1px solid #fad4ba;
                width: 377px;
                height: 488px;
				background: #fff;
                ul{
                    padding-left: 8px;
                    padding-right: 5px;
                    margin-top: 16px;
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        margin-bottom: 20px;
                        a{
                            display: flex;
                            img{
                                margin-right: 5px;
                                width: 177px;
                                height: 123px;
                            }
                            strong{
                                color: #313333;
                                font-size: 14px;
                                line-height: 24px;
                                display: block;
								text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 2;
								overflow: hidden;
								margin-top: 10px;
                            }
                            p{
                                line-height: 22px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                margin-top: 7px;
                                letter-spacing: 2px;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
            .shipinmid{
                width: 422px;
            }
            .shipinright{
                width: 377px;
            }
        }
    }
    .adbox{
        margin-top: 10px;
        .adboxwrap{
            height: 368px;
            position: relative;
            overflow: hidden;
            a{
                div{
                    position: absolute;
                    transition: all .3s linear;
                    overflow: hidden;
                    transform: rotate(45deg);
                    img{
                        width: 195px; 
                        transition: all .3s linear;
                        transform: rotate(-45deg) translateZ(0);
                    }
                }
                div:hover{
                    img{
                        transform: translateZ(0) scale(1.2) rotate(-45deg); 
                    }
                }
                .adbox1{
                    top: 88px;
                    right: 403px;
                }
                .adbox2{
                    top: -20px;
                    right: 303px;
                }
                .adbox3{
                    top: 88px;
                    right: 202px;
                }
                .adbox4{
                    top: 196px;
                    right: 303px;
                }
                .adbox5{
                    top: 196px;
                    right: 100px;
                }
                .adbox6{
                    top: 87px;
                    right: -1px;
                }
                .adbox7{
                    top: -20px;
                    right: 100px;
                }
            }
        }
    }
    .team{
        margin-top: 10px;
        .teamwrap{
            display: flex;
            justify-content: space-between;
            >div{
                height: 527px;
            }
            .teamleft{
                width: 480px;
				background: #fff;
                .teaminner{
                    margin-top: 25px;
                    display: flex;
                    justify-content: space-evenly;
					
                    div{
                        width: 220px;
                        font-size: 14px;
                        a{
                            transition: all .3s linear;
                        }
                        img{
                            height: 280px;
                        }
                        strong{
                            display: block;
                            text-align: center;
                            margin: 5px 0;
                        }
						p{
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 7;
							overflow: hidden;
						}
                    }
                    div:hover{
                        a{
                            color: $color;
                        }
                        
                    }
                }
            }
            .teammid{
                width: 340px;
				background: #fff;
                .teammidbox{
                    position: relative;
                    margin-top: 15px;
                    overflow: hidden;
                    height: 455px;
                    ul{
                        position: absolute;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-evenly;
                        top: 0;
                        li{
                            margin-bottom: 10px;
                            position: relative;
                            img{
                                width: 153px;
                                height: 189px;
                            }
                            p{
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: 30px;
                                line-height: 30px;
                                text-align: center;
                                color: #fff;
                                background: rgba(60,62,71,.7);
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
            .teammright{
                width: 360px;
                position: relative;
                overflow: hidden;
                background: #fff;
				.swiper-wrapper{
					
				}
                .teamrun{
                    margin-top: 20px;
                    img{
                        width: 320px;
                        height: 445px;
                        margin: 0 auto;
                    }
                }
            }
        }
    }
    .anli{
        margin-top: 10px;
        h2.comtitle strong::after{
            left: 37%;
        }
        .anliwrap{
            
            .anliinner{
                display: flex;
                justify-content: space-between;
                >div{
                    width: 595px;
                    height: 450px;
                    background: #fff;
                }
				.comtitle{
					a{
						margin-right: 10px;
					}
				}
                .combox{
                    margin-bottom: 10px;
 
                    .anlibot{
                        ul{
                            padding: 12px 10px 0;
							li:first-child{
								height: auto;
								margin-bottom: 16px;
								margin-top: 16px;
								a{
									display: flex;
								}
								
								.anlipic{
									width: 130px;
									display: block;
									margin-right: 10px;
									overflow: hidden;
									
								}
								.anliinfo{
									width: 405px;
									strong{
										color: #e71f1c;
										font-size: 16px;
										font-weight: bold;
										white-space: nowrap;
										overflow: hidden;
										text-overflow: ellipsis;
										display: block;
										width: 100%;
										height: 30px;
									}
									
									p{
										display: block;
										text-overflow: ellipsis;
										display: -webkit-box;
										-webkit-box-orient: vertical;
										-webkit-line-clamp: 3;
										overflow: hidden;
										white-space: initial;
									}
									
								}
								span{
									display: none;
								}
							}
                            li{
                                height: 25px;
                                line-height: 25px;
                                position: relative;
                                display: flex;
                                justify-content: space-between;
								a:Hover{
									strong{
										color: #e71f1c !important;
									}
								}
                                a{
                                    font-size: 14px;
                                    margin-left: 16px;
									
									
									.anlipic{
										display: none;
									}
									.anliinfo{
										width: 450px;
										white-space: nowrap;
										overflow: hidden;
										text-overflow: ellipsis;
										strong{
											font-weight: normal;
											color: #333;
											
											
										}
										
										p{
											display: none;
											color: #333;
										}
										
									}
                                }
                                span{
                                    font-size: 14px;
                                }
                            }
                            li::after{
                                content: "";
                                position: absolute;
                                left: 0;
                                top: 11px;
                                width: 5px;
                                height: 5px;
                                background: #e73825;
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
            
        }
    }
    .honor{
        .honorwrap{
            display: flex;
            justify-content: space-between;
            >div{
                height: 415px;
                background: #fff;
            }
            .honorleft{
                width: 377px;
                .honorleftbox{
                    height: 370px;
                    position: relative;
                    overflow: hidden;
                    ul{
                        height: 310px;
                        margin-top: 32px;
                        position: absolute;
                        left: 0;
                        li{
                            float: left;
                            margin: 0 10px;
                            width: 215px;
                            height: 310px;
                            // cursor: pointer;
                            img{
                                width: 215px;
                                height: 310px;
                            }
                        }
                    }
                }
            }
            .honorcom{
                width: 402px;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    height: 372px;
                    flex-direction: column;
                    justify-content: space-evenly;
                    padding: 0 10px;
                    li{
                        a{
                            display: flex;
                            img{
                                width: 175px;
                                height: 140px;
                                margin-right: 10px;
                            }
                            strong{
                                color: #e71f1c;
                                display: block;
                                margin-top: 5px;
                            }
                            p{
                                font-size: 12px;
                                color: #545455;
                                line-height: 22px;
                                padding-top: 10px;
                            }
                        }
                    }
                }
            }
            .honorright{
                width: 402px;
            }

        }
    }
    .baodao{
        margin-top: 10px;
        .baodaowrap{
            display: flex;
            justify-content: space-between;
            >div{
                height: 363px;
                background-color: #fff;
            }
            .baodaoleft{
                width: 475px;
            }
            .baodaomid{
                width: 444px;
                ul{
                    a{
                        width: 72%;
                    }
                }
                
            }
            .baodaoright{
                width: 265px;
                ul{
                    a{
                        width: 92%;
                    }
                }
                
            }
            ul{
                padding: 12px 10px 0;
                
                li{
                    height: 25px;
                    line-height: 25px;
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    a{
                        font-size: 14px;
                        margin-left: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        width: 76%;
                        transition: all .2s linear;
                    }
                    a:hover{
                        color: $color;
                    }
                    span{
                        font-size: 14px;
                    }
                }
                li:after{
                    width: 5px;
                    height: 5px;
                    background: #e73825;
                    margin-right: 10px;
                    position: absolute;
                    content: "";
                    left: 0;
                    top: 10px;
                }
            }
        }
    }
    .meiti{
        margin-top: 10px;
        h2.comtitle strong{
            width: 120px;
            padding: 0;
        }
        .meitiwrap{
            display: flex;
            justify-content: space-between;
            >div{
                background: #fff;
                height: 297px;
            }
            .meitileft{
                width: 370px;
            }
            .meitimid{
                width: 405px;
                img{
                    margin-top: 20px;
                }
            }
            .meitiright{
                width: 405px;
                img{
                    margin-top: 10px;
                }
            }
            img{
                margin: 0 auto;
            }
        }
    }

}


</style>
