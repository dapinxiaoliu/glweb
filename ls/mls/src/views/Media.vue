<template>
	<div class="media">
		<Bannerinner/>
		<div class="content">
			<div class="titleinfo">
				<h3><a href="/">首页</a><em>></em><router-link :to="{path:'/media/index.html'}">媒体报道</router-link><em>></em><a href="javascript:void(0)" class="changetitle">冠领新闻</a><em>></em></h3>
				<h2 class="linebox">
					<strong>冠领新闻</strong>
					<em></em>
					<p>冠领同行&nbsp;&nbsp;&nbsp;&nbsp;精彩共赢</p>
				</h2>
			</div>
			
			<div class="contbox">
				<div class="comtbtn">
					<strong class="active">冠领新闻</strong>
					<strong>行业新闻</strong>
				</div>
				<ul class="noticlebox">
					
					<li v-for="item,index in mediaData" :key="item.id"><router-link :to="{path:'/media/'+item.id+'.html'}">
						<div class="ggimg"><img :src="item.thumb" alt=""></div>
						<div class="gginfo">
							<strong>{{item.title}}</strong>
							<p>{{item.miaoshu}}</p>
							<em>{{item.create_time}}</em>
						</div>
					</router-link></li>

				</ul>
				<div class="page">
				 <el-pagination
				   background
				   :current-page.sync='currentpage'
				   @current-change="getPage"
				   layout="prev, pager, next"
				   prev-text="上一页"
				   next-text="下一页"
				   :pager-count = pagerCount
				   :page-count="totalPage">
				 </el-pagination>
				</div>

				<div class="xiangguan">
					<h3><strong>冠领视频</strong></h3>
					<ul>
						<li v-for="item,index in falvData" :key="item.id"><router-link :to="{path:'/media/'+item.id+'.html'}">
						
							<div class="xgimg"><img :src="item.thumb" alt=""></div>
							<div class="xginfo">
								<strong>{{item.title}}</strong>
							</div>
						</router-link></li>
						<li v-for="item,index in jiangtangData" :key="item.id"><a href="">
							<div class="xgimg"><img :src="item.thumb" alt=""></div>
							<div class="xginfo">
								<strong>{{item.title}}</strong>
							</div>
						</a></li>

					</ul>
					<a href="" class="morelink">了解更多</a>
				</div>
			</div>
	
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import Bannerinner from '@/components/Bannerinner'
	export default{
		name: 'Media',
		components:{
			Bannerinner
		},
		data(){
			return {
				mediaData:[],
				totalPage:0,
				currentpage:1,
				pagerCount:7,
				id:29,
				falvData:[],
				jiangtangData:[],
				zhixing:0
			}
		},
		methods:{
			getData(){
				let that = this
				request({
					url: '/news/read?id='+that.id+'&page=1&page_size=12',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.mediaData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								// alert(value['thumb'])
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									value['create_time'] = value['create_time'].split(' ')[0]
									that.mediaData.push(value)
								}
								
							})
							that.totalPage = beforeData['last_page']
							that.currentpage = parseInt(beforeData['current_page'])
						}
						// console.log(that.mediaData);
					}]
				})
			},
			getPage(val){
				let that = this
				request({
					url: '/news/read?id='+that.id+'&page='+val+'&page_size=12',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.mediaData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									value['create_time'] = value['create_time'].split(' ')[0]
									that.mediaData.push(value)
								}
								
							})
							that.totalPage = beforeData['last_page']
							that.currentpage = parseInt(beforeData['current_page'])
						}
					}]
				})
			},
			getfalvData(catid){
				let that = this
				request({
					url: '/video/read?id='+catid+'&page=1&page_size=2',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.falvData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									value['create_time'] = value['create_time'].split(' ')[0]
									that.falvData.push(value)
								}
							})

						}
					}]
				})
			},
			getjiangtangData(catid){
				let that = this
				request({
					url: '/video/read?id='+catid+'&page=1&page_size=2',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.jiangtangData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									value['create_time'] = value['create_time'].split(' ')[0]
									that.jiangtangData.push(value)
								}
							})
			
						}
					}]
				})
			}
		},
		mounted() {
			let that = this
			that.getData()
			that.getfalvData(48)
			that.getjiangtangData(55)
			// that.getVideo(1,55)
			// console.log(that.falvData);
			$(function(){
			    let comtbtnstr = $('.comtbtn strong'),
			        noticlebox = $('.noticlebox'),
			        changetitle = $('.changetitle')
			    comtbtnstr.click(function(){
			        let index = $(this).index()
					switch(index){
						case 0:
						that.id = 29
						break;
						case 1:
						that.id = 32
						break;
					}
					that.getData()
			        changetitle.text($(this).text())
					localStorage.setItem('medianame',$(this).text())
			        $(this).addClass('active').siblings().removeClass('active')
			        noticlebox.hide().fadeIn()
			    })
			})
		},
		watch:{
			mediaData(){
				let medianame = localStorage.getItem('medianame') == null?'k':localStorage.getItem('medianame')
				if(medianame != 'k'){
				
					if(this.zhixing == 0){
						
						this.zhixing = 1
						// let honorname = localStorage.getItem('honorname'),
						let comtbtnstr = $('.comtbtn strong'),
							changetitle = $('.changetitle')
							changetitle.text(medianame)
							// noticlebox = $('.noticlebox')
							comtbtnstr.removeClass('active')
						if(medianame == '冠领新闻'){
							comtbtnstr.eq(0).addClass('active')
							this.id = 29
						}else if(medianame == '行业新闻'){
							comtbtnstr.eq(1).addClass('active')
							this.id = 32
						}
						
						this.getData()
					}
				
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.media{
	.content{
	    .contbox{
	        padding-top: .2rem;
	        padding-bottom: .2rem;
	        background: #fff;
	        margin-top: .22rem;
	        .comtbtn{
	            display: flex;
	            justify-content: center;
	            margin-top: .25rem;
	            padding-bottom: .4rem;
	            border-bottom: 1px solid #eee;
	            strong{
	                width: 3.2rem;
	                border: 1px solid #eeeeee;
	                text-align: center;
	                height: .6rem;
	                line-height: .6rem;
	                margin: 0 .1rem;
	                font-size: .28rem;
	                color: #9b9494;
	            }
	            strong.active{
	                background: #cc0e0e;
	                color: #fff;
	            }
	        }
	        ul{
	            padding: 0 .2rem;
	            margin-top: .3rem;
	            border-bottom: 1px solid #eee;
	            li{
	                margin-bottom: .3rem;
	                a{
	                    display: flex;
	                    justify-content: space-between;
	                    .ggimg{
	                        width: 2.5rem;
	                        height: 1.87rem;
	                        img{
	                            width: 2.5rem;
	                        }
	                    }
	                    .gginfo{
	                        width: 4.4rem;
	                        display: flex;
	                        flex-direction: column;
	                        justify-content: center;
	                        strong{
	                            display: block;
	                            font-size: .3rem;
	                            white-space: nowrap;
	                            overflow: hidden;
	                            text-overflow: ellipsis;
	                        }
	                        p{
	                            font-size: .26rem;
	                            overflow: hidden;
	                            text-overflow: ellipsis;
	                            display: -webkit-box;
	                            -webkit-box-orient: vertical;
	                            -webkit-line-clamp: 2;
	                            color: #999;
	                            margin-top: .1rem;
	                            margin-bottom: .1rem;
	                        }
	                        em{
	                            display: block;
	                            color: #999;
	                            font-size: .26rem;
	                        }
	                    }
	                }
	            }
	        }
	
	        .xiangguan{
	           
	            margin-top: .4rem;
	            
	            h3{
	                display: flex;
	                justify-content: space-between;
	                border-bottom: 1px solid #eee;
	                padding-bottom: .1rem;
	                text-indent: .35rem;
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
	                display: flex;
	                flex-wrap: wrap;
	                justify-content: space-between;
	                padding: 0 .3rem .3rem;
	                border: none;
	
	                li{
	                    padding: .1rem 0;
	                  
	                    margin: 0;
	                    width: 3.35rem;
	                    border: none;
	                    a{
	
	                        display: flex;
	                        flex-wrap: wrap;
	                        .xgimg{
	                            width: 3.35rem;
	
	                        }
	                        .xginfo{
	   
	                          
	                            strong{
	                                font-size: .28rem;
	                                overflow: hidden;
	                                text-overflow: ellipsis;
	                                display: -webkit-box;
	                                -webkit-box-orient: vertical;
	                                -webkit-line-clamp: 2;
	                                text-align: center;
	                                font-size: .28rem;
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