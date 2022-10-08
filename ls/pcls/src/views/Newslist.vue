<template>
	<div class="newslist">
		<div class="tvwrap w12">
			<div class="tvwrapleft comborder">
				<div class="tvwrapleftitem">
					<h2 class="comtitle">
						<strong>{{lmname}}</strong>
						<span>当前位置：<a href="/">北京冠领律师事务所拆迁官网</a> > <a href="javascript:void(0)">{{lmname}}</a> ></span>
					</h2>
					<ul>
						<li v-for="item,index in hynews" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo($event,item.leibie,item.id,item.create_time)">
								<p>{{item.title}}</p><span>{{item.create_time}}</span>
							</a>
						</li>
					</ul>
					<div class="page">
					<!-- hide-on-single-page -->
					<!-- {{totalPage}} -->
					 <el-pagination
					   background
					   :current-page.sync='currentpage'
					   @current-change="getPage"
					   layout="prev, pager, next"
					   prev-text="上一页"
					   next-text="下一页"
					   :pager-count = pagerCount
					   :page-count='totalPage'>
					 </el-pagination>
					</div>
				</div>
			</div>
			<Aside :lmname="lmname" @changeUrl="gotoMore"/>

		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import axios from 'axios'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import Aside from "../components/Aside"
	import {mapState, mapGetters} from 'vuex'
	export default{
		name:'Newslist',
		props:['lmname'],
		components:{
			Aside
		},
		data(){
			return {
				breadcrumbList:[],
				lmname:'冠领新闻',
				newsData:[],
				currentpage:1,
				pagerCount:7,
				totalPage:0,
				lmid:0,
				hynews:[],
				pagesize:20,
				url:''
			}
		},
		methods:{

			gethynews(){
				let that = this
				request({
					// url: '/news/hynews?page=1&page_size='+that.pagesize,
					url: '/news/'+that.url+'?page=1&page_size=20',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						console.log(jsondata);
						if(jsondata['code'] == 200){
							that.hynews = []
							that.totalPage = 0
							let beforeData = jsondata['data']
							beforeData.forEach(function(value,index,arr){
								value['create_time'] = value['create_time'].split(' ')[0]
								if(index == 0){
									that.totalPage = Math.ceil(value['total']/20)
								}
								that.hynews.push(value)
							})
						}
					}]
				})
			},
			getPage(val){
				let that = this
				request({
					url: '/news/'+that.url+'?page='+val+'&page_size=20',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						console.log(jsondata);
						if(jsondata['code'] == 200){
							that.hynews = []
							let beforeData = jsondata['data']
							beforeData.forEach(function(value,index,arr){
								value['create_time'] = value['create_time'].split(' ')[0]
								if(index == 0){
									that.totalPage = Math.ceil(value['total']/20)
								}
								that.hynews.push(value)
							})
						}
					}]
				})
			},
			getNowInfo(id){
				let that = this
				request({
					url: '/news/zmnewslist?id='+id,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							let beforeData = jsondata['data']
						}
					}]
				})
			},
			toinfo($event,leibie,id,time){
				let title = $event.target.innerText
				this.$store.commit('setData',{
					id:id,
					leibie:leibie,
					title:title,
					time:time
				})
				// localStorage.setItem('newsleibie',leibie)
				this.$router.push({ path:'/news/'+id+'.html'})
			},
			gotoMore(obj){
				this.lmname = obj.name
				this.$store.commit('setMoreName',obj.name)
				
				
			}
		},
		computed:{
			...mapGetters(['getMoreName'])
		},
		created() {
			console.log('aa');
			let morename = this.getMoreName
			if(morename){
				this.lmname = morename
				localStorage.setItem('morename',morename)
			}else{
				this.lmname = localStorage.getItem('morename')
			}
			let that = this
			let meta = this.$route.meta;
			if(meta && meta.parent){
				this.breadcrumbList = meta.parent
			}else{
				this.breadcrumbList = [{path: meta.path.split('/')[1], name: meta.name}]
			}

			let newscatid = localStorage.getItem('newscatid')
			that.lmid = newscatid
			
			if(morename == '行业新闻'){
				that.url = '/hynews'
			}else{
				that.url = '/mtnews'
			}
			// that.getData()
			that.gethynews()
		},
		watch:{
			lmname(){
				let morename = this.getMoreName
				if(morename == '行业新闻'){
					this.url = '/hynews'
				}else{
					this.url = '/mtnews'
				}
				this.gethynews()
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