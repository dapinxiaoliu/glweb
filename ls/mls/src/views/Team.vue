<template>
	<div class="team">
		<Bannerinner/>
		<div class="titleinfo">
			<h3><a href="/">首页</a><em>></em><router-link :to="{path:'/team/index.html'}">冠领团队</router-link><em>></em><a href="javascript:void(0)" class="changetitle"></a><em v-if="isshow">></em></h3>
			<h2 class="linebox">
				<strong>冠领团队</strong>
				<em></em>
				<p>精诚团结&nbsp;&nbsp;&nbsp;&nbsp;超古冠今</p>
			</h2>
		</div>
		<div class="teamwrap">
			<div class="teambtn">
				<span>主任律师</span>
				<span>法律顾问</span>
				<span>拆迁律师</span>
				<span>实习律师</span>
				<span>律师助理</span>
			</div>
			<div class="teambox">
				<div class="zhuren teamitem">
					<h3>主任律师</h3>
					<ul>
						<li v-for="item,index in zrData" :key="item.id" @click="infolink('主任律师',item.id)">
							<div class="zhureninner" >
							<div class="zrimg">
								<img :src="item.thumb" alt="">
								<strong>{{item.title}}</strong>
							</div>
							<div class="zrinfo">
								<div class="zrinfobox">
									<p>{{item.description}}...<em>详情></em></p>
								</div>
							</div>
						</div></li>

					</ul>
				</div>
				
				<div class="teamitem">
					<h3 class="changetitle">专业拆迁律师</h3>
					<ol>
						<li v-for="item,index in cqData" :key="item.id" @click="infolink('拆迁律师',item.id)">
							<div class="iteminner" >
							<img :src="item.thumb" alt="">
							<p>{{item.title}}</p>
						</div></li>
					</ol>
					<a href="javascript:void(0)" class="morelink" @click="morelink('拆迁律师',14)">了解更多</a>
				</div>
				<div class="teamitem">
					<h3>实习律师</h3>
					<ol>
						<li v-for="item,index in sxData" :key="item.id" @click="infolink('实习律师',item.id)">
							<div class="iteminner">
							<img :src="item.thumb" alt="">
							<p>{{item.title}}</p>
						</div></li>
					</ol>
					<a href="javascript:void(0)" class="morelink" @click="morelink('实习律师',15)">了解更多</a>
				</div>
				<div class="teamitem">
					<h3>律师助理</h3>
					<ol>
						<li v-for="item,index in zlData" :key="item.id">
							<div class="iteminner" >
							<img :src="item.thumb" alt="">
							<p>{{item.title}}</p>
						</div></li>
					</ol>
					<a href="javascript:void(0)" class="morelink" @click="morelink('律师助理',16)">了解更多</a>
				</div>
				<div class="teamitem teampage" v-if="itempage">
					<h3 class="pagetitle">{{pagetitle}}</h3>
					<ol>
						<li v-for="item,index in pageData" :key="item.id" @click="infolink('b',item.id)">
							<div class="iteminner" >
							<img :src="item.thumb" alt="">
							<p>{{item.title}}</p>
						</div></li>
					</ol>
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
					   :page-count="totalPage">
					 </el-pagination>
					</div>
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
		name:'Team',
		components:{
			Bannerinner
		},
		data(){
			return{
				zrData:[],
				cqData:[],
				sxData:[],
				zlData:[],
				pageData:[],
				totalPage:0,
				currentpage:1,
				pagerCount:5,
				pagesize:2,
				isshow:false,
				itempage:false,
				id:0,
				pagesize:1,
				origin:'',
				zhixing:0,
				pagetitle:'法律顾问'
			}
		},
		methods:{
			getData(id,pagesize,origin){
				let that = this
				that.id = id
				that.origin = origin
				that.pagesize = pagesize
				if(origin == 'c'){
					that.pageData = []
				}else{
					if(id == 13){
						that.zrData = []
					}else if(id == 14){
						that.cqData = []
					}else if(id == 15){
						that.sxData = []
					}else if(id == 16){
						that.zlData = []
					}
				}
				
				request({
					url: '/team/read?id='+id+'&pgae=1&page_size='+pagesize,
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
								}
								if(origin == 'c'){
									that.pageData.push(value)
									that.totalPage = beforeData['last_page']
									that.currentpage = beforeData['current_page']
								}else{
									if(id == 13){
										value['description'] = value['description'].substr(0,120)	
										that.zrData.push(value)
									}
									if(id == 14){
										that.cqData.push(value)
									}
									if(id == 15){
										that.sxData.push(value)
									}
									if(id == 16){
										that.zlData.push(value)
									}
									if(id == 31){
										that.cqData.push(value)
									}
								}
							})
							// that.totalPage = beforeData['last_page']
							// that.currentpage = beforeData['current_page']
						}
					}]
				})
			},
			getPage(val){
				let that = this
				if(that.origin == 'c'){
					that.pageData = []
				}
				request({
					url: '/team/read?id='+that.id+'&page='+val+'&page_size='+that.pagesize,
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
								}
								if(that.origin == 'c'){
									// alert('c')
									that.pageData.push(value)
								}
								
							})
							that.totalPage = beforeData['last_page']
							that.currentpage = beforeData['current_page']
						}
					}]
				})
			},
			morelink(name,id){
				let that = this
				let teamitem = $('.teamitem'),
					teambtn = $('.teambtn span'),
					teampage = $('.teampage'),
					changetitle = $('.changetitle')
					teambtn.removeClass('active')
					
				localStorage.setItem('teamname',name)
				localStorage.setItem('origin','c')
				if(name == '拆迁律师'){
					name = '专业'+name
					teambtn.eq(2).addClass('active')
				}else if(name == '实习律师'){
					teambtn.eq(3).addClass('active')
				}else if(name == '律师助理'){
					teambtn.eq(4).addClass('active')
				}
				
				
					
				that.id = id
				teamitem.hide()
				teamitem.eq(0).fadeIn()
				that.itempage = true
				that.pagetitle = name
				that.isshow = true
				changetitle.text(name)
				that.getData(that.id,9,'c')
			},
			infolink(name,id){
				
				if(name == 'b'){
					if(this.pagetitle == '专业拆迁律师'){
						this.pagetitle = '拆迁律师'
					} 
					localStorage.setItem('teamname',this.pagetitle)
				}else{
					localStorage.setItem('teamname',name)
					
				}
				this.$router.push({ path:'/team/'+id+'.html'})
				
			}
		},
		mounted() {
			let that = this
			that.getData(13,2)//主任
			that.getData(14,9)//拆迁律师
			that.getData(15,3)//实习律师
			that.getData(16,6)//律师助理
			$(function(){
			    let teambtn = $('.teambtn span'),
			        teamitem = $('.teamitem'),
					teampage = $('.teampage'),
			        changetitle = $('.changetitle')
					// alert(teampage.html())
					
			    teambtn.click(function(){
					that.isshow = true
			        let index = $(this).index()
			        let textbtn = $(this).text()
			        teambtn.eq(index).addClass('active').siblings().removeClass('active')
			       
					localStorage.setItem('teamname',textbtn)
					localStorage.setItem('origin','c')
			        if(index == 0){
			            teamitem.hide()
						that.itempage = false
			            teamitem.eq(0).fadeIn()
			        }else{
			            $('.morelink').hide()
						teamitem.hide()
			            if(index == 2){
			                textbtn = '专业'+textbtn
			            }
						switch(index){
							case 1:
							that.id = 31 //法律顾问
							break;
							case 2:
							that.id = 14
							break;
							case 3:
							that.id = 15
							break;
							case 4:
							that.id = 16
							break;
						}
						changetitle.text(textbtn)
						that.itempage = true
						that.getData(that.id,9,'c')
			            teamitem.eq(0).fadeIn()
						that.pagetitle = textbtn
						teampage.fadeIn()

			        }
			    })
			}) 
		},
		watch:{
			zrData(){
				let teamname = localStorage.getItem('teamname') == null?'k':localStorage.getItem('teamname')
				if(teamname != 'k'){
				
					if(this.zhixing == 0){
						// alert('a')
						// alert(teamname)
						this.zhixing = 1
						// let honorname = localStorage.getItem('honorname'),
						// alert('b')
						let comtbtnstr = $('.teambtn span'),
							teamitem = $('.teamitem'),
							teampage = $('.teampage'),
							changetitle = $('.changetitle')
							
							// teamitem.removeClass('active')
						
							teamitem.hide()
							teamitem.eq(0).fadeIn()
							this.itempage = true
						if(teamname == '主任律师'){
							comtbtnstr.eq(0).addClass('active')
							this.itempage = false
							this.id = 13
						}else if(teamname == '法律顾问'){
							comtbtnstr.eq(1).addClass('active')
							this.id = 31
						}else if(teamname == '拆迁律师'){
							teamname = '专业'+teamname
							comtbtnstr.eq(2).addClass('active')
							this.id = 14
						}else if(teamname == '实习律师'){
							comtbtnstr.eq(3).addClass('active')
							this.id = 15
						}else if(teamname == '律师助理'){
							comtbtnstr.eq(4).addClass('active')
							this.id = 16
						}
						changetitle.text(teamname+' >')
						this.pagetitle = teamname
						this.getData(this.id,9,'c')
					}
				
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.teamwrap{
    background: #fff;
    padding: 0 .3rem;
    overflow: hidden;
    margin-top: .15rem;
    .teambtn{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: .3rem;
        span{
            font-size: .26rem;
            padding: .1rem .25rem;
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
        .teamitem:last-child{
            border: none;
            padding-bottom: .2rem;
            margin-bottom: .1rem;
        }
        .teamitem{
            border-bottom: 1px solid #ececec;
            margin-bottom: .4rem;
            padding-bottom: .3rem;
            h3{
                position: relative;
                font-size: .32rem;
                color: #fff;
                height: .65rem;
                text-align: center;
                line-height: .65rem;
                margin-left: .25rem;
                margin-bottom: .3rem;
                width: 3.2rem;
                background: linear-gradient(to bottom, #dc4f49 5%, #c21a20 45%,#c21a20 55%, #dc4f49 100%);
            }
            h3::after{
                content: "";
                position: absolute;
                left: -.25rem;
                top: 0;
                width: .06rem;
                height: .65rem;
                background-color: #c21a20;
            }
            ol{
                display: flex;
                flex-wrap: wrap;
                justify-content: start;
                li{
                    width: 2.1rem;
                    border: none;
					height: 2.99rem;
                    padding: 0;
                    margin-bottom: .3rem;
					box-shadow: 0 0 .03rem #ccc;
					position: relative;
                    .iteminner{
						display: block;
						width: 100%;
						height: 2.99rem;
                        img{

                        }
                        p{
                            text-align: center;
                            background: #c21a20;
                            color: #fff;
                            height: .4rem;
                            line-height: .4rem;
                            font-size: .26rem;
							position: absolute;
							bottom: 0;
							width: 100%;
                        }
                    }
                }
                li:nth-child(3n+2){
                    margin: 0 .3rem;
                }
            }
        }
        .zhuren{
            padding-bottom: .1rem;
            h3{
                width: 2.25rem;
            }
            ul{
                
                li{
                    margin-bottom: .2rem;
                    .zhureninner{
                        display: flex;
                        .zrimg{
                            width: 2.5rem;
                            margin-right: .2rem;
                            img{
                                width: 2.5rem;
                                height: 3.07rem;
                            }
                            strong{
                                display: block;
                                text-align: center;
                                background: #c21a20;
                                color: #fff;
                                height: .4rem;
                                line-height: .4rem;
                                font-size: .26rem;
                            }
                        }
                        .zrinfo{
                            width: 5rem;
                            font-size: .26rem;
							
							.zrinfobox{
								display: flex;
								flex-wrap: wrap;
							}
                            p{
                                line-height: .4rem;
								// text-overflow: ellipsis;
								// display: -webkit-box;
								// -webkit-box-orient: vertical;
								// -webkit-line-clamp: 7;
								// overflow: hidden;
								// position: relative;
								em{
								    color: #e61e1e;
								    font-weight: bold;
									display: inline-block;
									padding-left: .1rem;
								} 
                            }
							
                        }
                    }
                }
            }
        }
    }
}
.myform{
    border-top: none !important;
}
</style>