<template>
	<div class="teamlist">
		 <div class="tvwrap w12">
			<div class="tvwrapleft comborder">
				<div class="tvwrapleftitem">
					<h2 class="comtitle">
						<strong>{{lmname}}</strong>
						<span>当前位置：<a href="/">北京冠领律师事务所拆迁官网</a> > <router-link :to="{path:breadcrumbList[0]['path']}">{{breadcrumbList[0]['name']}}</router-link> > <a href="">{{lmname}}</a> ></span> 
					</h2>
					<ul>
						<li v-for="item,index in lawData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">
							<div class="itemleft">
								<img :src="item.thumb" alt="">
								<b>{{item.title}}</b>
							</div>
							<div class="itemright">
								<p>{{item.description}}...<span>详细>></span></p>
							</div>
							
						</a></li>

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
		name:'Teamlist',
		components:{
			Aside
		},
		data(){
			return {
				lawData:[],
				pagerCount:7,
				totalPage:0,
				currentpage:1,
				id:0,
				lmname:'',
				lmid:0
			}
		},
		methods:{
			getData(){
				let that = this
				request({
					url: '/team/read?id='+that.id+'&pgae=1&page_size=10',
					
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						if(jsondata['code'] == 200){
							that.lawData = []
							let beforeData = jsondata['data']
							// console.log(jsondata);
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									value['description'] = value['description'].substr(0,82)
									that.lawData.push(value)
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
					url: '/team/read?id='+that.id+'&page='+val+'&page_size=10',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.lawData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									that.lawData.push(value)
								}
							})
							// console.log(beforeData);
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
				localStorage.setItem('teamcatid',catid)
				this.$router.push({ path:'/team/'+id+'.html'})
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
			let teamcatid = localStorage.getItem('teamcatid')
			this.id = teamcatid
			this.lmid = teamcatid
			$('.tvwrap').hide().fadeIn()
			this.getData()
		},
		watch:{
		  $route(to, from){
			let teamcatid = localStorage.getItem('teamcatid')
			$('.tvwrap').hide().fadeIn()
			this.id = teamcatid
			this.lmid = teamcatid
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
        background-color: #fff;
        h2.comtitle{
			justify-content: left;
            strong{
                width: 155px;
                margin-left: 25px;
                padding: 0;
            }
            strong::after{
                left: 35%;
            }
            a{
                margin: 0 5px;
            }
			span{
			    font-size: 14px;
			    margin-left: 15px;
			}
           
        }
       
        
        .tvwrapleftitem{
            margin-bottom: 10px;
            ul{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li:hover{
                    a{
                        color: #333 !important;
                    }
                }
                li{
                    width: 395px;
                    padding: 20px;
                    a{
                        display: flex;
                        justify-content: space-between;
                        .itemleft{
                            width: 155px;
                            position: relative;
			
                            img{
                                width: 155px;
                                height: 193px;
                            }
                            b{
                                position: absolute;
                                bottom: 0;
                                width: 100%;
                                height: 30px;
                                line-height: 30px;
                                text-align: center;
                                background: rgba(0,0,0,.5);
                                color: #fff;
                                font-size: 14px;
                            }
                        }
                        .itemright{
                            width: 220px;
                            p{
                                line-height: 26px;
                                padding-top: 10px;
                                font-size: 14px;
                            }
                            span{
                                font-size: 14px;
                                color: #e71f1d;
                            }
                        }
                        
                    }
                }
            }
        }



        
    }




}
</style>