<template>
	<div class="honorlist">
		<div class="tvwrap w12">
			<div class="tvwrapleft">
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>{{lmname}}</strong>
						<span>当前位置：<a href="/">北京冠领律师事务所拆迁官网</a> > <router-link :to="{path:breadcrumbList[0]['path']}" v-if="mianbao">{{breadcrumbList[0]['name']}} <em>></em> </router-link><a href="javascript:void(0)">{{lmname}}</a> ></span> 
					</h2>
					<ul>
						<li v-for="item,index in honorData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">
								<img :src="item.thumb" alt="">
								<p>{{item.title}}</p>
							</a>
						</li>
					</ul>
					<div class="page">
								   <!-- hide-on-single-page -->
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
				</div>

			</div>
			<Aside :lmname="lmname"/>

		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import Aside from "../components/Aside"
	export default{
		name:'Honorlist',
		components:{
			Aside
		},
		data(){
			return {
				breadcrumbList:[],
				lmname:'冠领荣誉',
				honorData:[],
				currentpage:1,
				pagerCount:7,
				totalPage:0,
				lmid:0,
				mianbao:true
			}
		},
		methods:{
			getData(){
				let that = this
				request({
					url: '/honor/read?id='+that.lmid+'&page=1&page_size=12',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.honorData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								}
								value['create_time'] = value['create_time'].split(' ')[0]
								that.honorData.push(value)
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
					url: '/honor/read?id='+that.lmid+'&page='+val+'&page_size=12',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.honorData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								}
								value['create_time'] = value['create_time'].split(' ')[0]
								that.honorData.push(value)
							})
							that.totalPage = beforeData['last_page']
							that.currentpage = parseInt(beforeData['current_page'])
						}
					}]
				})
			},
			getlmname(){
				let that = this
				request({
					url: '/Category/read?id='+that.lmid,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.lmname = []
							let beforeData = jsondata['data']
							that.lmname = beforeData['name']
						}
					}]
				})
			},
			toinfo(id,catid){
				localStorage.setItem('honorcatid',catid)
				if(id == 'list'){
					this.$router.push({ path:'/honor/list/index.html'})
				}else{
					this.$router.push({ path:'/honor/'+id+'.html'})
				}
			}
		},
		mounted() {
			
			let that = this
			let meta = this.$route.meta;
			if(meta && meta.parent){
				this.breadcrumbList = meta.parent
			}else{
				this.breadcrumbList = [{path: meta.path.split('/')[1], name: meta.name}]
			}
				
				
			let honorcatid = localStorage.getItem('honorcatid')
			
			if(honorcatid == 23){
				that.mianbao = false
			}
			// alert(honorcatid)
			that.lmid = honorcatid
			$('.tvwrap').hide().fadeIn()
			that.getlmname()
			that.getData()
			
			
		},
		watch:{
		  $route(to, from){
			let that = this
			let honorcatid = localStorage.getItem('honorcatid')
			that.lmid = honorcatid
			$('.tvwrap').hide().fadeIn()
			that.getlmname()
			that.getData()
		  }
		}
	}
</script>

<style lang="scss" scoped>
.page{
	padding-bottom: 30px;
}
.tvwrap{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .tvwrapleft{
        width: 915px;
        background: #fff;
            h2.comtitle{
				justify-content: left;
                strong{
                    width: 155px;
                    margin-left: 25px;
                    padding: 0;
                }
                strong::after{
                    left: 33%; 
                }
				span{
				    font-size: 14px;
				    margin-left: 15px;
				}
                a{
                    margin: 0 5px;
                }
            }
            .tvwrapleftitem{
                margin-bottom: 10px;
            }
            .tvwrapleftitem:last-child{
                margin-bottom: 0;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
				justify-content: left;
                margin-bottom: 25px;
                padding: 0 26px;
                margin-top: 20px;
                li{
                    width: 215px;
                    font-size: 18px;
                    display: flex;
                    justify-content: space-between;
                    position: relative;
					padding: 0 20px;
					margin: 0 0 30px !important;
					img{
						width: 215px;
					}
					p{
						text-align: center;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
						padding-top: 10px;
					}
                    a{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        color: #333;
                        font-size: 16px;
                    }

                }
				li:nth-child(3n+2){
					padding: 0 68px;
				}
                li:last-child{
                    border: none;
                }
            }
    }




}
</style>