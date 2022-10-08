<template>
  <div class="honor">
	  <Bannerinner/>
	<div class="content">
		<div class="titleinfo">
			<h3><a href="/">首页</a><em>></em><router-link :to="{path:'/honor/index.html'}">冠领荣誉</router-link></a><em>></em><a href="javascript:void(0)" class="changetitle">锦旗荣誉</a><em>></em></h3>
			<h2 class="linebox">
				<strong>冠领荣誉</strong>
				<em></em>
				<p>风雨历程&nbsp;&nbsp;&nbsp;&nbsp;鼎信天下</p>
			</h2>
		</div>
		
		<div class="contbox">
			<div class="comtbtn">
				<strong class="active">锦旗荣誉</strong>
				<strong>奖杯荣誉</strong>
				<strong>好评荣誉</strong>
			</div>
			<div class="honorwrap">
				<div class="honorbox">
					<ul>
						<li v-for="item,index in databox" :key="item.id"><router-link :to="{path: '/honor/'+item.id+'.html'}"><img :src="item.thumb" alt=""><p>{{item.title}}</p></router-link></li>
					<!-- hide-on-single-page -->
					</ul>
					<div class="page">
					 <el-pagination
					   background
					   current-page.sync=''
					   @current-change="getPage"
					   layout="prev, pager, next"
					   prev-text="上一页"
					   next-text="下一页"
					   :pager-count = pagerCount
					   :page-count="totalpage">
					 </el-pagination>
					</div>
				</div>
				<div class="honorbox">
					<ul>
						<li v-for="item,index in databox" :key="item.id"><router-link :to="{path: '/honor/'+item.id+'.html'}"><img :src="item.thumb" alt=""><p>{{item.title}}</p></router-link></li>
					</ul>
					<div class="page">
					 <el-pagination
					   background
					   hide-on-single-page
					   current-page.sync=''
					   @current-change="getPage"
					   layout="prev, pager, next"
					   prev-text="上一页"
					   next-text="下一页"
					   :pager-count = pagerCount
					   :page-count="totalpage">
					 </el-pagination>
					</div>
				</div>
				<div class="honorbox">
					<ul>
						<li v-for="item,index in databox" :key="item.id"><router-link :to="{path: '/honor/'+item.id+'.html'}"><img :src="item.thumb" alt=""><p>{{item.title}}</p></router-link></li>
					</ul>
					<div class="page">
					 <el-pagination
					   background
					   current-page.sync=''
					   @current-change="getPage"
					   layout="prev, pager, next"
					   prev-text="上一页"
					   next-text="下一页"
					   :pager-count = pagerCount
					   :page-count="totalpage">
					 </el-pagination>
					</div>
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
import Bannerinner from "@/components/Bannerinner"
export default {
	name: 'Honor',
	components:{
		Bannerinner
	},
	data(){
	  return {
		  databox:[],
		  pagerCount:5,
		  totalpage:0,
		  id: 24,
		  zhixing:0
	  }
	},
	methods: {
		getData(){
			let that = this
			request({
				url: '/honor/read?id='+that.id+'&page=1&page_size=9',
				responseType: 'json',
				transformResponse:[function(data){
					let jsondata = JSON.parse(data)
					// console.log(jsondata);
					if(jsondata['code'] == 200){
						that.databox = []
						let beforeData = jsondata['data']
						beforeData['data'].forEach(function(value,index,arr){
							if(value['thumb'].length > 100){
								let beforeimg = value['thumb'].split(':')[21];
								value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								that.databox.push(value)
							}
							
						})
						that.totalpage = beforeData['last_page']//总页数
					}
				}]
			})
		},
		getPage(val){
			let that = this
			request({
				url: '/honor/read?id='+that.id+'&page='+val+'&page_size=9',
				responseType: 'json',
				transformResponse:[function(data){
					let jsondata = JSON.parse(data)
					// console.log(jsondata);
					if(jsondata['code'] == 200){
						that.databox = []
						let beforeData = jsondata['data']
						beforeData['data'].forEach(function(value,index,arr){
							if(value['thumb'].length > 100){
								let beforeimg = value['thumb'].split(':')[21];
								value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								that.databox.push(value)
							}
							
						})
						that.totalpage = beforeData['last_page']//总页数
					}
				}]
			})
		}
	},
	mounted() {
		let that = this
		that.getData()
		$(function(){
		    let comtbtnstr = $('.comtbtn strong'),
				honorbox = $('.honorbox'),
		        changetitle = $('.changetitle')
				
		        comtbtnstr.click(function(){
					let index = $(this).index()
					switch(index){
						case 0:
						that.id = 24
						break;
						case 1:
						that.id = 25
						break;
						case 2:
						that.id = 64
						break;
					}
					that.getData()
					changetitle.text($(this).text())
					localStorage.setItem('honorname',$(this).text())
					$(this).addClass('active').siblings().removeClass('active')
					honorbox.eq(index).fadeIn().siblings().hide()
				})
		})
	},
	watch:{
		databox(){
			let honorname = localStorage.getItem('honorname') == null?'k':localStorage.getItem('honorname')

			if(honorname != 'k'){

				if(this.zhixing == 0){
					
					this.zhixing = 1
					// let honorname = localStorage.getItem('honorname'),
					let comtbtnstr = $('.comtbtn strong'),
						honorbox = $('.honorbox'),
						changetitle = $('.changetitle')
						changetitle.text(honorname)
						comtbtnstr.removeClass('active')
						honorbox.hide()
					if(honorname == '锦旗荣誉'){
						honorbox.eq(0).fadeIn()
						comtbtnstr.eq(0).addClass('active')
						this.id = 24
					}else if(honorname == '奖杯荣誉'){
						honorbox.eq(1).fadeIn()
						comtbtnstr.eq(1).addClass('active')
						this.id = 25
					}else{
						this.id = 64
						honorbox.eq(2).fadeIn()
						comtbtnstr.eq(2).addClass('active')
					}
					this.getData()
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>

	
	.myform{
	    border-top: none !important;
	}
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
	            padding-bottom: .5rem;
	            // border-bottom: 1px solid #eee;
	            strong{
	                width: 2.1rem;
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
	        .honorwrap{
	            .honorbox{
	                display: none;
	                ul{
	                    display: flex;
	                    flex-wrap: wrap;
	                    padding: 0 .2rem;
	                    li{
	                        width: 2.1rem;
	                        margin-bottom: .3rem;
	                        a{
	                            img{
	                                border-radius: .2rem;
	                                width: 2.1rem;
	                                height: 3.2rem;
	                            }
	                            p{
	                                font-size: .26rem;
	                                color: #9b9494;
	                                text-align: center;
	                                margin-top: .08rem;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									overflow: hidden;
	                            }
	                        }
	                    }
	                    li:nth-child(3n+2){
	                        margin: 0 .4rem;
	                    }
	                }
	            }
	            .honorbox:nth-child(1){
	                display: block;
	            }
	            .honorbox:nth-child(2){
	                ul{
	                    li{
	
	                        img{
	                            height: 1.72rem;
	                        }
	                    }
	                }
	            }
	            .honorbox:nth-child(3){
	                ul{
	                    li{
	                        
	                        img{
	                            height: 3.2rem;
	                            box-shadow: 0 0 .05rem #ccc;
	                            border-radius: .05rem;
	                        }
	                        p{
	                            white-space: nowrap;
	                            overflow: hidden;
	                            text-overflow: ellipsis;
	                        }
	                    }
	                }
	            }
	        }
	
	
	    }
	}

</style>
