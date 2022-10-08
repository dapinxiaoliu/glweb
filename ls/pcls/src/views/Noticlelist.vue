<template>
	<div class="noticlelist">
		<div class="tvwrap w12">
			<div class="tvwrapleft">
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>{{lmname}}</strong>
						<a href="javascript:void(0)"  @click="toinfo('list',24)">更多></a>
					</h2>
					<ul>
						<li v-for="item,index in NoticleData" :key="item.id"><a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">{{item.title}}</a><span>{{item.create_time}}</span></li>
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
		name:'Noticlelist',
		components:{
			Aside
		},
		data(){
			return {
				lmname:'',
				NoticleData:[],
				currentpage:1,
				pagerCount:7,
				totalPage:0,
				lmid:0
			}
		},
		methods:{
			getData(){
				let that = this
				request({
					url: '/gonggao/read?id='+that.lmid+'&page=1&page_size=20',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.NoticleData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								value['create_time'] = value['create_time'].split(' ')[0]
								that.NoticleData.push(value)
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
					url: '/gonggao/read?id='+that.lmid+'&page='+val+'&page_size=20',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.NoticleData = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								value['create_time'] = value['create_time'].split(' ')[0]
								that.NoticleData.push(value)
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
				localStorage.setItem('noticlecatid',catid)
				if(id == 'list'){
					this.$router.push({ path:'/noticle/list/index.html'})
				}else{
					this.$router.push({ path:'/noticle/'+id+'.html'})
				}
			}
		},
		mounted() {
			let that = this
			let noticlecatid = localStorage.getItem('noticlecatid')
			that.lmid = noticlecatid
			$('.tvwrap').hide().fadeIn()
			that.getlmname()
			that.getData()
		},
		watch:{
			$route(to, from){
				let that = this
				let noticlecatid = localStorage.getItem('noticlecatid')
				that.lmid = noticlecatid
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
                strong{
                    width: 155px;
                    margin-left: 25px;
                    padding: 0;
                }
                strong::after{
                    left: 33%; 
                }
                a{
                    margin-right: 35px;
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
					margin: 0 !important;
                    a{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        width: 80%;
                        margin-left: 20px;
                        color: #333;
                        font-size: 16px;
                    }
                    span{
                        font-size: 16px;
                        color: #333;
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
                li:last-child{
                    border: none;
                }
            }
    }




}
</style>