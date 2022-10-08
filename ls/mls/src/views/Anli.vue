<template>
	<div class="anli">
		<Bannerinner/>
		<div class="titleinfo">
			<h3><a href="/">首页</a><em>></em><a href="javascript:void(0)">胜诉案例</a><em>></em><a href="" class="changetitle">农村拆迁</a><em>></em></h3>
				<h2 class="linebox">
					<strong>拆迁案例</strong>
					<em></em>
					<p>依法维权&nbsp;&nbsp;&nbsp;&nbsp;冠领助力</p>
				</h2>
			</div>
			<div class="teamwrap">
				<div class="teambtn">
					<span class="active">农村拆迁</span>
					<span>城市拆迁</span>
					<span>企业拆迁</span>
					<span>商铺拆迁</span>
					<span>违建拆迁</span>
					<span>强制拆迁</span>
					<span>城中村拆迁</span>
					<span>住宅拆迁</span>
				</div>
				<div class="teambox">
					
					<div class="teamitem" v-for="item,index in anliData" :key="item.id">
						<router-link :to="{path:'/anli/'+item.id+'.html'}">
							<div class="teamimg"><img :src="item.thumb" alt=""></div>
							<div class="teaminfo">
								<strong>{{item.title}}</strong>
								<p>{{item.description}}</p>
								<div class="teamtime">
									<span>{{item.create_time}}</span>
								</div>
							</div>
						</router-link>
					</div>

				</div>
				<div class="page">
				 <el-pagination
				   background
				   hide-on-single-page
				   :current-page.sync='currentpage'
				   @current-change="getPage"
				   layout="prev, pager, next"
				   prev-text="上一页"
				   next-text="下一页"
				   :pager-count = pagerCount
				   :page-count="totalpage">
				 </el-pagination>
				</div>
			</div>
			<div class="honorteam">
				<h3>荣誉律师</h3>
				<ul>
					<li v-for="item,index in zrData" :key="item.id"><router-link :to="{path:'/team/'+item.id+'.html'}"><img :src="item.thumb" alt=""></router-link></li>
					<li v-for="item,index in cqData" :key="item.id"><router-link :to="{path:'/team/'+item.id+'.html'}"><img :src="item.thumb" alt=""></router-link></li>
				</ul>
				<router-link to="/team/index.html" class="morelink">了解更多</router-link>
			</div>
			<div class="hottag">
				<h3>热门标签</h3>
				<ul>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
					<li><a href="">昌邑征地公告</a></li>
				</ul>
			</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import Bannerinner from "@/components/Bannerinner"
	export default{
		name:'Anli',
		components:{
			Bannerinner
		},
		data(){
			return {
				anliData:[],
				totalpage:0,
				pagerCount:5,
				currentpage:1,
				id:40,
				zhixing:0,
				zrData:[],
				cqData:[]
			}
		},
		methods:{
			getData(){
				let that = this
				request({
					url: '/anli/read?catid='+that.id+'&page=1&page_size=8',
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
							that.totalpage = beforeData['last_page']	//总页数
							that.currentpage = parseInt(beforeData['current_page'])
						}
					}]
				})
			},
			getPage(val){
				let that = this
				request({
					url: '/anli/read?catid='+that.id+'&page='+val+'&page_size=8',
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
							that.totalpage = beforeData['last_page']	//总页数
							that.currentpage = parseInt(beforeData['current_page'])
						}
					}]
				})
			},
			getlawyer(id){
				let that = this
				if(id == 13){
					that.zrData = []
				}else{
					that.cqData = []
				}
				request({
					url: '/team/read?id='+id+'&pgae=1&page_size=2',
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
									if(id == 13){
										that.zrData.push(value)
									}else{
										that.cqData.push(value)
									}
								}
							})

						}
					}]
				})
			}
		},
		mounted() {
			let that = this
			
			that.getlawyer(13)
			that.getlawyer(14)
			
			let id = this.$route.query['id']
			let teambtn = $('.teambtn span')
			teambtn.removeClass()
			if(id != undefined){
				that.id = id
				if(id == 37){
					teambtn.eq(7).addClass('active')
				}else if(id == 38){
					teambtn.eq(3).addClass('active')
				}else if(id == 39){
					teambtn.eq(2).addClass('active')
				}else if(id == 7){
					teambtn.eq(4).addClass('active')
				}else if(id == 6){
					teambtn.eq(5).addClass('active')
				}else if(id == 40){
					teambtn.eq(0).addClass('active')
				}else if(id == 41){
					teambtn.eq(6).addClass('active')
				}else if(id == 42){
					teambtn.eq(1).addClass('active')
				}
				that.getData()
			}else{
				teambtn.eq(0).addClass('active')
				that.getData()
			}

			
			$(function(){
			    let teambtn = $('.teambtn span'),
			        teambox = $('.teambox'),
			        changetitle = $('.changetitle')
			    teambtn.click(function(){
			        let index = $(this).index()
					switch(index){
						case 0:
						that.id = 40//农村拆迁
						break;
						case 1:
						that.id = 42//城市拆迁
						break;
						case 2:
						that.id = 39//企业拆迁
						break;
						case 3:
						that.id = 38//商铺拆迁
						break;
						case 4:
						that.id = 7//违建拆迁
						break;
						case 5:
						that.id = 6//强制拆迁
						break;
						case 6:
						that.id = 41//城中村拆迁
						break;
						case 7:
						that.id = 37//住宅拆迁
						break;
						
					}
					that.getData()
			        changetitle.text($(this).text())
					localStorage.setItem('anliname',$(this).text())
			        teambtn.eq(index).addClass('active').siblings().removeClass('active')
			        teambox.hide().fadeIn(100)
			    })
			}) 
		},
		watch:{
			anliData(){
				let anliname = localStorage.getItem('anliname') == null?'k':localStorage.getItem('anliname')
				if(anliname != 'k'){
				
					if(this.zhixing == 0){
						
						this.zhixing = 1
						// let honorname = localStorage.getItem('honorname'),
						let comtbtnstr = $('.teambtn span'),
							teambox = $('.teambox'),
							changetitle = $('.changetitle')
							changetitle.text(anliname)
							comtbtnstr.removeClass('active')
							teambox.hide().fadeIn()
						if(anliname == '农村拆迁'){
							comtbtnstr.eq(0).addClass('active')
							this.id = 40
						}else if(anliname == '城市拆迁'){
							comtbtnstr.eq(1).addClass('active')
							this.id = 42
						}else if(anliname == '企业拆迁'){
							this.id = 39
							comtbtnstr.eq(2).addClass('active')
						}else if(anliname == '商铺拆迁'){
							this.id = 38
							comtbtnstr.eq(3).addClass('active')
						}else if(anliname == '违建拆迁'){
							this.id = 7
							comtbtnstr.eq(4).addClass('active')
						}else if(anliname == '强制拆迁'){
							this.id = 6
							comtbtnstr.eq(5).addClass('active')
						}else if(anliname == '城中村拆迁'){
							this.id = 41
							comtbtnstr.eq(6).addClass('active')
						}else if(anliname == '住宅拆迁'){
							this.id = 37
							comtbtnstr.eq(7).addClass('active')
						}
						this.getData()
					}
				
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.teamwrap{
    background: #fff;
    padding: 0 .2rem;
    overflow: hidden;
    margin-top: .15rem;
    .teambtn{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: .3rem;
        span{
            font-size: .26rem;
			height: .6rem;
			line-height: .6rem;
			text-align: center;
			width: 1.6rem;
            white-space: nowrap;
            border: 1px solid #eeeeee;
            margin-bottom: .2rem;
            color: #9b9494;
            transition: all .2s linear;
        }
        span.active{
            background-color: #c21a20;
            color: #fff;
        }
    }
    .teambox{
        overflow: hidden;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding-top: .4rem;
        margin-top: .15rem;
        .teamitem{
            margin-bottom: .4rem;
            a{
                display: flex;
                justify-content: space-between;
                .teamimg{
                    width: 2.2rem;
                    height: 1.6rem;
                    box-shadow: 0 0 2px #ccc;
                    overflow: hidden;
                    img{
                        width: 2.2rem;
                    }
                }
                .teaminfo{
                    width: 4.65rem;
                    strong{
                        display: block;
                        font-size: .28rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin-bottom: .05rem;
                    }
                    p{
                        font-size: .26rem;
                        color: rgb(163, 161, 161);
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        margin: .1rem auto .13rem;
                    }
                    .teamtime{
                        span{
                            font-size: .26rem;
                            color: rgb(163, 161, 161);
                            background: url('../assets/images/img_58.png') no-repeat left center / .3rem;
                            display: block;
                            text-indent: .4rem;
                        }
                    }
                }
            }
        }

    }
}
.honorteam{
    padding: .6rem .3rem .3rem;
    background: #fff;
    h3{
        font-size: .35rem;
        color: #c21a20;
        border-bottom: 1px solid #eee;
        margin-bottom: .2rem;
        padding-bottom: .1rem;
    }
    ul{
        display: flex;
        justify-content: space-between;
        margin-bottom: .3rem;
        li{
            width: 1.5rem;
            height: 2.14rem;
            img{
                width: 1.5rem;
                height: 2.14rem;
            }
        }
    }
}
.hottag{
    padding: .2rem .3rem .3rem;
    background: #fff;
    border-top: 1px solid #eee;
    h3{
        font-size: .35rem;
        color: #c21a20;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            margin-top: .15rem;
            a{
                font-size: .26rem;
            }
        }
    }
}

</style>