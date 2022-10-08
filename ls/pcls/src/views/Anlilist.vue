<template>
	<div class="anlilist">
		  <div class="tvwrap w12">
				<div class="tvwrapleft comborder">
					<h2 class="comtitle">
						<strong>{{lmname}}</strong>
						<span>当前位置：<a href="">北京冠领律师事务所拆迁官网</a> > <router-link :to="{path:breadcrumbList[0]['path']}">{{breadcrumbList[0]['name']}}</router-link> > <a href="">{{lmname}}</a> ></span> 
					</h2>
					<ul>
						<li v-for="item,index in anliData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">{{item.title}}</a><span>{{item.create_time}}</span>
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
				<Aside :lmname="lmname"/>
	
			</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import Aside from "../components/Aside"
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	export default{
		name:'Anlilist',
		components:{
			Aside
		},
		data(){
			return {
				breadcrumbList:[],
				anliData:[],
				currentpage:1,
				pagerCount:7,
				totalPage:0,
				lmid:0,
				lmname:''
			}
		},
		methods:{
			getData(){
				let that = this
				request({
					url: '/anli/read?catid='+that.lmid+'&page=1&page_size=20',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.anliData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								value['create_time'] = value['create_time'].split(' ')[0]
								that.anliData.push(value)
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
					url: '/anli/read?catid='+that.lmid+'&page='+val+'&page_size=20',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.anliData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								value['create_time'] = value['create_time'].split(' ')[0]
								that.anliData.push(value)
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
							// that.pid = beforeData['pid']
						}
					}]
				})
			},
			toinfo(id,catid){
				localStorage.setItem('anlicatid',catid)
				if(id == 'list'){
					this.$router.push({ path:'/anli/list/index.html'})
				}else{
					this.$router.push({ path:'/anli/'+id+'.html'})
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
			
			
			let anlicatid = localStorage.getItem('anlicatid')
			// let anlinames = localStorage.getItem('anlinames')
			// alert(anlinames)
			this.lmid = anlicatid
			setTimeout(function(){
				$('.tvwrap').hide().fadeIn()
				that.getData()
				
			},100)
			
			
		},
		watch:{
		  $route(to, from){
			let that = this
			let anlicatid = localStorage.getItem('anlicatid')
			that.lmid = anlicatid
			setTimeout(function(){
				$('.tvwrap').hide().fadeIn()
				that.getData()
			},100)
			
			
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
                justify-content: flex-start;
                strong{
                    width: 220px;
                    margin-left: 5px;
                }
                strong::after{
                    left: 19%;
                    
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
                flex-wrap: wrap;
                margin-bottom: 25px;
                padding: 0 26px;
                margin-top: 20px;
                li{
                    width: 100%;
                    font-size: 18px;
                    border-bottom: 1px solid #ecebeb;
                    height: 55px;
                    line-height: 55px;
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    a{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        width: 80%;
                        margin-left: 20px;
                    }
                }
                li::after{
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 22px;
                    width: 9px;
                    height: 9px;
                    background: #e73825;
                    margin-right: 10px;
                }  
            }
    }




}
</style>