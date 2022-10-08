<template>
	<div class="article">
		<Bannerinner/>
	   <div class="content">
		   <div class="titleinfo">
			   <h3><a href="/">首页</a><em>></em><em @click="clearitem()" v-if="abouthide">{{breadcrumbList[0]['name']}}</em><em>></em><router-link :to="{path:breadcrumbList[0]['path']}" v-if="istv">{{lmname}}</router-link><router-link :to="{path:breadcrumbList[0]['path']+'?name='+tvname}" v-else>{{lmname}}</router-link><em>></em>正文内容</h3>
		   </div>
		   <div class="contbox">
			   <h3 class="conttitle" >{{arcTitle}}</h3>
			   <div class="continfo">
				   <p>来源：<a href="">北京冠领律师事务所</a> </p>
				   <p>时间：{{arcTime}}</p>
				   <!-- <p>阅读：14</p> -->
			   </div>
			   <div class="contwrap" v-html="arcContent"></div>
			   <div class="tagbox">
				   <strong>标签：</strong>
					<a href="javascript:void(0)" v-for="item,index in rmbq" @click="search(item)">{{item}}</a>
			   </div>
			   <div class="shangxia">
				   
				   <a href="javascript:void(0)" v-if="preshow">上一篇：没有了</a>
				   <router-link v-else :to="{path:'/honor/'+upArc.id+'.html'}" >上一篇：{{upArc.title}}</router-link>
				   
				   <a href="javascript:void(0)" v-if="nextshow">下一篇：没有了</a>
				   <router-link v-else :to="{path:'/honor/'+downArc.id+'.html'}" >下一篇：{{downArc.title}}</router-link>
			   </div>
			   <div class="xiangguan">
				   <h3><strong>相关案例</strong><router-link :to="{path:'/honor/index.html'}">查看更多</router-link></a></h3>
				   <ul>
					   <li v-for="item,index in xgal" :key="item.id">
						   <router-link :to="{path:'/honor/'+ item.id +'.html'}">
							   <div class="xgimg"><img :src="item.thumb" alt=""></div>
							   <div class="xginfo">
								   <strong>{{item.title}}</strong>
								   <em>{{item.create_time}}</em>
							   </div>
						   </router-link>
						  
					   </a></li>
				   </ul>
			   </div>
		   </div>
   
	   </div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import Bannerinner from "@/components/Bannerinner"
	export default{
		name: 'Article',
		components:{
			Bannerinner
		},
		data(){
			return {
				breadcrumbList:[],
				arcTitle:'',
				arcTime:'',
				arcContent:'',
				catid:0,
				upArc:[],
				downArc:[],
				preshow: false,
				nextshow: false,
				xgal:[],
				lmname:'',
				currentUrl:'',
				prenextarc:'',
				istv:true,
				tvname:'cctv',
				abouthide:true,
				rmbq:''
			}
		},
		methods:{
			search(names = ''){
				if(names != ''){
					this.$router.push({ path:'/search/index.html',query:{'name':encodeURI(names)}})
				}
			},
			getArc(){
				let that = this
				let arcid = that.$route.params.id == undefined ? 1677 : that.$route.params.id
				// console.log(that.$route.params);
				// return false;
				request({
					url: that.currentUrl+arcid,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.arcContent= jsondata['data']['content'].replace(/\s(src=")/g, " $1http://api.guanlingls.com")
							// that.arcContent= jsondata['data']['content']
							that.arcTitle = jsondata['data']['title']
							that.arcTime = jsondata['data']['create_time'].split(' ')[0]
							that.getPNArc(arcid,jsondata['data']['catid'])
							that.getlmData(jsondata['data']['catid'])
							that.getlmName(jsondata['data']['catid'])
							
							if(jsondata['data']['rmbq'] != null){
								// alert('b')
								that.rmbq = jsondata['data']['rmbq'].split(',')
							}
							
							
						}
					}]
				})
			},
			getPNArc(id,catid){
				let that = this
				let url = that.prenextarc+id+'&catid='+catid
				request({
					url: url,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						if(jsondata['code'] == 200){
							if(jsondata['data']['down'] == null){
								that.nextshow = true
							}else{
								that.nextshow = false
								that.downArc = jsondata['data']['down']
							}
							if(jsondata['data']['up'] == null){
								that.preshow = true
							}else{
								that.preshow = false
								that.upArc = jsondata['data']['up']
							}
						}
					}]
				})
			},
			getlmData(catid){
				let that = this
				that.xgal = []
				request({
					url: '/honor/read?id='+catid+'&page=1&page_size=3',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									that.xgal.push(value)
								}
							})
						}
					}]
				})
			},
			getlmName(catid){
				let that = this
				request({
					url: '/Category/read?id='+catid,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.lmname = jsondata['data']['name']
						}
					}]
				})
			},
			clearitem(){
				localStorage.setItem('honorname','锦旗荣誉')
				localStorage.setItem('noticlename','冠领在开庭')
				localStorage.setItem('medianame','冠领新闻')
				localStorage.setItem('anliname','农村拆迁')
				localStorage.setItem('cctvname','法律讲堂')
				localStorage.setItem('brtvname','法治进行时')
				localStorage.setItem('teamname','k')
				//对视频页面进行单独判断验证
				if(this.$route.name == 'cctvhtml'){
					let cctvname = localStorage.getItem('cctv')
					this.$router.push({ path:'/tv/index.html?name='+cctvname})
				}else{
					this.$router.push({ path:this.breadcrumbList[0]['path']})
				}
				
			}
		},
	
		mounted() {
			let meta = this.$route.meta;
			if(meta && meta.parent){
				this.breadcrumbList = meta.parent
			}else{
				this.breadcrumbList = [{path: meta.path.split('/')[1], name: meta.name}]
			}
			//判断来自那个页面
			if(this.$route.name == 'cctvhtml'){
				
				this.tvname = this.$route.query.name == undefined ? 'cctv' : this.$route.query.name
				// alert(this.tvname)

				this.istv = false
				
				localStorage.setItem('cctv',this.tvname)
			}
			
			let navli = $('.nav li')
			navli.click(function(){
				$(this).addClass('router-link-active').siblings().removeClass('router-link-active')
			})
			navli.removeClass('router-link-active')
			if(this.breadcrumbList[0]['name'] == '冠领荣誉'){
				navli.eq(7).addClass('router-link-active')
				this.currentUrl = '/honor/honorlist?id='
				this.prenextarc = '/honor/honornext?id='
			}else if(this.breadcrumbList[0]['name'] == '冠领公告'){
				navli.eq(3).addClass('router-link-active')
				this.currentUrl = '/gonggao/gonggaolist?id='
				this.prenextarc = '/gonggao/gonggaonext?id='
			}else if(this.breadcrumbList[0]['name'] == '媒体报道'){
				navli.eq(6).addClass('router-link-active')
				this.currentUrl = '/news/newslist?id='
				this.prenextarc = '/news/newsnext?id='
			}else if(this.breadcrumbList[0]['name'] == '胜诉案例'){
				navli.eq(2).addClass('router-link-active')
				this.currentUrl = '/anli/anlilist?id='
				this.prenextarc = '/anli/anlinext?id='
			}else if(this.breadcrumbList[0]['name'] == '央视普法'){
				navli.eq(4).addClass('router-link-active')
				this.currentUrl = '/video/videolist?id='
				this.prenextarc = '/video/videonext?id='
			}else if(this.breadcrumbList[0]['name'] == '冠领团队'){
				navli.eq(1).addClass('router-link-active')
				this.currentUrl = '/team/teamlist?id='
				this.prenextarc = '/team/teamnext?id='
			}else if(this.breadcrumbList[0]['name'] == '关于我们'){
				this.abouthide = false
				navli.eq(5).addClass('router-link-active')
				this.currentUrl = '/news/newslist?id='
				this.prenextarc = '/news/newsnext?id='
			}
			this.getArc()
		},
		watch:{
		  $route(to, from){
			this.getArc()
		  }
		}
	}
</script>

<style lang="scss">
.article{
	.content{
	    background-color: #fff;
	    .contbox{
	        margin-top: .3rem;
	        padding-bottom: .2rem;
	        
	        .conttitle{
	            font-size: .32rem;
	            text-align: center;
	            color: #323232;
	            font-weight: 900;
	            margin-bottom: .2rem;
	            line-height: .5rem;
	            padding: 0 .2rem;
	        }
	        .continfo{
	            display: flex;
	            justify-content: center;
	            border-bottom: 1px solid #e6e6e6;
	            padding-bottom: .2rem;
	            margin-bottom: .2rem;
	            p{
	                font-size: .26rem;
	                color: #919191;
	                margin: 0 .1rem;
	                a{
	                    color: #919191; 
	                }
	            }
	        }
	        .contwrap{
	            padding: .5rem .3rem 0;
	            p{
	                font-size: .28rem;
	                line-height: .47rem;
	                padding: .2rem 0;
	                // text-indent: 2em;
	                color: #646464;
	            }
	            img{
	                width: 70% !important;
					height: auto !important;
	                margin: 0 auto;
	            }
	        }
	        .tagbox{
	            padding: .2rem .3rem .3rem;
	            font-size: .28rem;
	            a{
	                font-size: .28rem;
	                margin-right: .1rem;
	            }
	        }
	        .shangxia{
	            padding: 0 .3rem;
	            a{
	                display: block;
	                padding: .1rem 0;
	                font-size: .28rem;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
	            }
	        }
	        .xiangguan{
	            padding: 0 .3rem;
	            margin-top: .4rem;
	            h3{
	                display: flex;
	                justify-content: space-between;
	                border-bottom: 1px solid #eee;
	                padding-bottom: .1rem;
	                strong{
	                    font-size: .32rem;
	                    color: #d71617;
	                    font-weight: bold;
	                }
	                a{
	                    font-size: .28rem;
	                }
	            }
	            ul{
	                li{
	                    padding: .25rem 0;
	                    border-bottom: 1px solid #eee;
	                    a{
	                        display: flex;
	                        justify-content: space-between;
	                        .xgimg{
	                            width: 2.2rem;
								height: 1.65rem;
								overflow: hidden;
	                            margin-right: .1rem;
								
	                        }
	                        .xginfo{
	                            width: 4.5rem;
	                            display: flex;
	                            flex-wrap: wrap;
	                            flex-direction: column;
	                            justify-content: center;
	                            strong{
	                                font-size: .28rem;
	                            }
	                            em{
	                                display: flex;
	                                align-items: center;
	                                margin-top: .1rem;
	                                font-size: .26rem;
	                                color: #999;
	                                text-indent: .4rem;
	                                background: url('../assets/images/img_58.png') no-repeat left center/.3rem;
	                                height: .3rem;
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	}

}
	
</style>