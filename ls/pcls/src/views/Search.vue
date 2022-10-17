<template>
	<div class="newslist">
		<div class="tvwrap w12">
			<div class="tvwrapleft comborder">
				<div class="tvwrapleftitem ">
					<h2 class="comtitle">
						<strong>{{lmname}}</strong>
						<span>当前位置：<a href="/">北京冠领律师事务所拆迁官网</a> > <a href="javascript:void(0)">{{name}}</a> ></span> 
					</h2>
					<h2  v-show="!datashow" class="warnningmsg">抱歉，暂没有 <b>{{name}}</b> 的相关信息！</h2>
					<ul v-show="datashow">
						<li v-for="item,index in newsData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid,item.leibie)">
								<p v-html="item.title"></p><span>{{item.create_time}}</span>
							</a>
						</li>
					</ul>

					<div class="page" v-show="datashow">
								   <!-- hide-on-single-page -->
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
			<Aside :lmname="lmname"/>

		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import Aside from "../components/Aside"
	import axios from 'axios'
	export default{
		name:'Search',
		components:{
			Aside
		},
		data(){
			return {
				breadcrumbList:[],
				lmname:'您的搜索结果：',
				newsData:[],
				currentpage:1,
				pagerCount:7,
				totalPage:0,
				lmid:0,
				name:'',
				datashow:true
			}
		},
		methods:{
			Search(){
				let that = this
				axios.post('http://api.guanlingls.com/index.php/api/Sou/sousuo',{'title':this.name,'page':1,'page_size':20})
				.then(res=>{
					
					if(res['data']['code'] == 200){
						// this.newsData = res['data']['data'].replace('/'+this.name+'/', '<em>'+this.name+'</em>')
						// console.log(res);
						that.datashow = true
						that.newsData = []
						let beforeData = res['data']['data']
						beforeData.forEach(function(value,index,arr){
							value['title'] = value['title'].replace(that.name, "<em class='sline'>"+that.name+'</em>')					
							that.totalPage = Math.ceil(value['total']/20)
							// alert(value['title'])
							that.newsData.push(value)
						})
						
					}else{
						that.datashow = false
					}
				})
			},
			getPage(val){
				let that = this
				axios.post('http://api.guanlingls.com/index.php/api/Sou/sousuo',{'title':this.name,'page':val,'page_size':20})
				.then(res=>{
					
					if(res['data']['code'] == 200){
						// this.newsData = res['data']['data'].replace('/'+this.name+'/', '<em>'+this.name+'</em>')
						// console.log(res);
						that.newsData = []
						let beforeData = res['data']['data']
						beforeData.forEach(function(value,index,arr){
							value['title'] = value['title'].replace(that.name, "<em class='sline'>"+that.name+'</em>')					
							that.totalPage = Math.ceil(value['total']/20)
							// alert(value['title'])
							that.newsData.push(value)
						})
						
					}
				})
			},
			toinfo(id,catid,leibie){
				localStorage.setItem('searchcatid',catid)
				if(leibie == 'news'){
					localStorage.setItem('newscatid',catid)
					this.$router.push({ path:'/news/'+id+'.html'})
				}else if(leibie == 'gonggao'){
					localStorage.setItem('noticlecatid',catid)
					this.$router.push({ path:'/noticle/'+id+'.html'})
				}else if(leibie == 'team'){
					localStorage.setItem('teamcatid',catid)
					this.$router.push({ path:'/team/'+id+'.html'})
				}else if(leibie == 'anli'){
					localStorage.setItem('anlicatid',catid)
					this.$router.push({ path:'/anli/'+id+'.html'})
				}
			}
		},
		created() {
			let that = this
			let meta = this.$route.meta;
			if(meta && meta.parent){
				this.breadcrumbList = meta.parent
			}else{
				this.breadcrumbList = [{path: meta.path.split('/')[1], name: meta.name}]
			}
			that.name = decodeURI(this.$route.query.name)
			that.Search()
		},
		watch:{
		  $route(to, from){
			let that = this
			that.name = decodeURI(this.$route.query.name)
			that.Search()
		  }
		}
	}
</script>

<style lang="scss" scoped>
.warnningmsg{
	text-align: center;
	font-size: 18px;
	font-weight: normal;
	margin-top: 30%;
	b{
		color: #e73825;
	}
}
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
					font-size: 16px;
					font-weight: bold;
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
				height: 1230px;
				li{
					em{
						color: #e73825 !important;
					}
				}
				
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
					width: 100%;
                    font-size: 18px;
                    display: flex;
                    justify-content: left;
                    position: relative;
					padding: 16px 0px !important;
					border-bottom:1px solid #ecebeb;
					img{
						width: 215px;
					}
					p{
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
						width: 85%;
						margin-left: 20px;
					}
                    a{
						width: 100%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        color: #333;
                        font-size: 16px;
						display: flex;
						align-items: center;
						justify-content: left;
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