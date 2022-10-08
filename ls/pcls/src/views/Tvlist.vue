<template>
	<div class="tvlist ">
		<div class="tvwrap w12">
			<div class="tvwrapleft comborder">
				<div class="tvitem ">
					<h2 class="comtitle">
						<strong>{{lmname}}</strong>
						<span>当前位置：<a href="/">北京冠领律师事务所拆迁官网</a> > <router-link :to="{path:breadcrumbList[0]['path']}">{{breadcrumbList[0]['name']}}</router-link> > <a href="">{{lmname}}</a> ></span> 
					</h2>
					<ul>
						<li v-for="item,index in tvData" :key="item.id">
							<router-link :to="{path:'/tv/'+item.id+'.html'}">
							<img :src="item.thumb" alt="">
							<p>{{item.title}}</p>
						</router-link></li>
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
	import Aside from '../components/Aside'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	export default{
		name:'Tvlist',
		components:{
			Aside
		},
		data(){
			return {
				tvData:[],
				id:0,
				lmname:'冠领在央视',
				pagerCount:7,
				totalPage:0,
				currentpage:1,
				read:'read',
				lmid:0,
				noticle:'/video/'
			}
		},
		methods:{
			getData(){
				let that = this
				request({
					url: that.noticle+that.read+'?id='+that.id+'&page=1&page_size=15',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.tvData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									that.tvData.push(value)
								}
							})
							that.totalPage = beforeData['last_page']
							that.currentpage = parseInt(beforeData['current_page'])
							that.getlmname()
						
						}
					}]
				})
			},
			getPage(val){
				let that = this
				request({
					url: that.noticle+that.read+'?id='+that.id+'&page='+val+'&page_size=15',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.tvData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									that.tvData.push(value)
								}
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
			let tvcatid = localStorage.getItem('tvcatid')
			
			this.id = tvcatid
			this.lmid = tvcatid

			if(tvcatid == 1){
				this.lmid = 46
				this.read = 'wapread'
				this.noticle = '/video/'
			}else if(tvcatid == 2){
				this.lmid = 47
				this.read = 'wapread'
				this.noticle = '/video/'
			}else if(tvcatid == 3){
				this.lmid = 1
				this.id = 1
				this.read = 'read'
				this.noticle = '/gonggao/'
				// this.read = 'wapread'
			}else if(tvcatid == 4){
				this.lmid = 2
				this.id = 2
				this.read = 'read'
				this.noticle = '/gonggao/'
				// this.read = 'wapread'
			}else{
				this.noticle = '/video/'
				this.read = 'read'
			}
			$('.tvwrap').hide().fadeIn()
			this.getData()
		},
		watch:{
			$route(to, from){
				let tvcatid = localStorage.getItem('tvcatid')
				this.id = tvcatid
				this.lmid = tvcatid
				if(tvcatid == 1){
					this.lmid = 46
					this.read = 'wapread'
					this.noticle = '/video/'
				}else if(tvcatid == 2){
					this.lmid = 47
					this.read = 'wapread'
					this.noticle = '/video/'
				}else if(tvcatid == 3){
					this.lmid = 1
					this.id = 1
					this.read = 'read'
					this.noticle = '/gonggao/'
					// this.read = 'wapread'
				}else if(tvcatid == 4){
					this.lmid = 2
					this.id = 2
					this.read = 'read'
					this.noticle = '/gonggao/'
					// this.read = 'wapread'
				}else{
					this.noticle = '/video/'
					this.read = 'read'
				}
				$('.tvwrap').hide().fadeIn()
				this.getData()
			}
		}
		
	}
</script>

<style lang="scss" scoped>

.tvwrap{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .tvwrapleft{
        width: 915px;
        .tvitem{
            background-color: #fff;
            margin-bottom: 10px;
            h2.comtitle{
				justify-content: left;
                strong{
                    width: 320px;
                    margin-left: 25px;
                }
                strong::after{
                    left: 39%;
                }
				span{
				    font-size: 14px;
				    margin-left: 15px;
				}
				a{
					margin: 0 5px;
				}
                
            }
            ul{
                display: flex;
                justify-content: start;
                flex-wrap: wrap;
                margin-bottom: 25px;
                padding: 0 26px;
                li{
                    width: 252px;
                    margin-top: 25px;
                    margin: 25px 17px 0;
                    a{
                        display: flex;
                        flex-wrap: wrap;
                        img{
                            width: 100%;
                            height: 169px;
                        }
                        p{
                            font-size: 14px;
                            text-align: center;
                            line-height: 20px;
                            margin-top: 12px;
                        }
                    }
                }
            }
        }
    }




}
</style>