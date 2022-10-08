<template>
	<div class="noticle">
		<Bannerinner/>
		<div class="content">
			<div class="titleinfo">
				<h3><a href="/">首页</a><em>></em><router-link to="/noticle/index.html">冠领公告</router-link><em>></em><a href="javascript:void(0)" class="changetitle">冠领在开庭</a><em>></em></h3>
				<h2 class="linebox">
					<strong>冠领公告</strong>
					<em></em>
					<p>达胜之师&nbsp;&nbsp;&nbsp;&nbsp;辩达天下</p>
				</h2>
			</div>
			
			<div class="contbox">
				<div class="comtbtn">
					<strong class="active">冠领在开庭</strong>
					<strong>冠领在办案</strong>
				</div>
				<ul class="noticlebox">
					<li v-for="item,index in noData" :key="item.id"><router-link :to="{path:'/noticle/'+item.id+'.html'}">
						<div class="ggimg"><img :src="item.thumb" alt=""></div>
						<div class="gginfo">
							<strong>{{item.title}}</strong>
							<p><span v-if="id == 1">开庭地区：</span><span v-else>办案时间：</span> {{item.miaoshu}}</p>
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
					<h3><strong>最新案例</strong><router-link to="/anli/index.html">查看更多</router-link></h3>
					<ul>
						<li v-for="item,index in anliData" :key="item.id"><a href="">
							<div class="xgimg"><img :src="item.thumb" alt=""></div>
							<div class="xginfo">
								<strong>{{item.title}}</strong>
								<em>{{item.create_time}}</em>
							</div>
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
		name:'Noticle',
		components:{
			Bannerinner
		},
		data(){
			return {
				noData:[],
				totalPage:0,
				pagerCount:7,
				currentpage:1,
				id:1,
				zhixing:0,
				anliData:[]
			}
		},
		methods:{
			getData(){
				let that = this
				request({
					url: '/gonggao/read?id='+that.id+'&page=1&page_size=12',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						console.log(jsondata);
						if(jsondata['code'] == 200){
							that.noData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									value['create_time'] = value['create_time'].split(' ')[0]
									that.noData.push(value)
								}
								
							})
							that.totalPage = beforeData['last_page']
							that.currentpage = parseInt(beforeData['current_page'])
						}
					}]
				})
			},
			getPage(val){
				let that = this
				request({
					url: '/gonggao/read?id='+that.id+'&page='+val+'&page_size=12',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.noData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									value['create_time'] = value['create_time'].split(' ')[0]
									that.noData.push(value)
								}
								that.totalPage = beforeData['last_page']
								that.currentpage = beforeData['current_page']
							})
						}
					}]
				})
			},
			getAnLi(){
				let that = this
				request({
					url: '/anli/read?catid=7&id=1&page=1&page_size=3',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.anliData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									value['create_time'] = value['create_time'].split(' ')[0]
									that.anliData.push(value)
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
			that.getAnLi()
			$(function(){
			    let comtbtnstr = $('.comtbtn strong'),
			        noticlebox = $('.noticlebox'),
			        changetitle = $('.changetitle')
			    comtbtnstr.click(function(){
			        let index = $(this).index()
					switch(index){
						case 0:
						that.id = 1
						break;
						case 1:
						that.id = 2
						break;
					}
					that.getData()
			        changetitle.text($(this).text())
					localStorage.setItem('noticlename',$(this).text())
			        $(this).addClass('active').siblings().removeClass('active')
			        noticlebox.hide().fadeIn()
			    })
			})
		},
		watch:{
			noData(){
				let noticlename = localStorage.getItem('noticlename') == null?'k':localStorage.getItem('noticlename')
				if(noticlename != 'k'){
				
					if(this.zhixing == 0){
						this.zhixing = 1
						// let honorname = localStorage.getItem('honorname'),
						// alert('b')
						let comtbtnstr = $('.comtbtn strong'),
							noticlebox = $('.noticlebox'),
							changetitle = $('.changetitle')
							changetitle.text(noticlename)
							comtbtnstr.removeClass('active')
						if(noticlename == '冠领在开庭'){
							comtbtnstr.eq(0).addClass('active')
							this.id = 1
						}else if(noticlename == '冠领在办案'){
							comtbtnstr.eq(1).addClass('active')
							this.id = 2
						}
						
						this.getData()
					}
				
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
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
							text-indent: .35rem;
							background: url('../assets/images/img_58.png') no-repeat left center / .25rem;
                        }
                    }
                }
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
                    margin-bottom: 0;
                    a{
                        display: flex;
                        justify-content: space-between;
                        .xgimg{
                            width: 2.2rem;
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

</style>