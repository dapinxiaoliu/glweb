<template>
	<div class="noticle">
		<Bannerinner/>
		<div class="content">
			<div class="titleinfo">
				<h3><a href="/">首页</a><em>></em><router-link to="/noticle/index.html">{{sname}}</router-link><em>></em></h3>
			</div>
			
			<div class="contbox">
				<ul class="noticlebox">
					<li v-for="item,index in noData" :key="item.id"><a href="javascript:void(0)" @click="toinfo(item.leibie,item.id,item.catid)">
						<div class="ggimg"><img :src="item.thumb" alt=""></div>
						<div class="gginfo">
							<strong  v-html="item.title"></strong>
							<p>{{item.description}}</p>
							<!-- <em>{{item.create_time}}</em> -->
						</div>
					</a></li>
				</ul>
				<!-- <div class="page">
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
				</div> -->

				<div class="xiangguan">
					<h3><strong>最新案例</strong><router-link to="/media/index.html">查看更多</router-link></h3>
					<ul>
						<li v-for="item,index in anliData" :key="item.id">
							<router-link :to="{path:'/media/'+item.id+'.html'}">
								<div class="xgimg"><img :src="item.thumb" alt=""></div>
								<div class="xginfo">
									<strong>{{item.title}}</strong>
									<em>{{item.create_time}}</em>
								</div>
							</router-link>
						</li>

					</ul>
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
	import axios from "axios"
	export default{
		name:'Search',
		components:{
			Bannerinner
		},
		data(){
			return {
				noData:[],
				totalPage:0,
				pagerCount:7,
				currentpage:1,
				zhixing:0,
				anliData:[],
				sname:'',
				lmname:''
			}
		},
		methods:{
			toinfo(leibie,id,catid){
				this.getname(catid)
				// alert(leibie+id+catid)
				// if(leibie == 'gonggao'){
				// 	leibie = '冠领公告'
				// }else if(leibie == 'team'){
				// 	leibie = '冠领团队'
				// }
				// localStorage.setItem(,catid)
				if(leibie == 'gonggao'){
					leibie = 'noticle'
				}else if(leibie == 'news'){
					leibie = 'media'
				}

				let b = localStorage.getItem('lmname')
				localStorage.setItem(leibie+'name',b)

								// return 
				this.$router.push({ path:'/'+leibie+'/'+id+'.html'})
			},
			
			getData(){
				let that = this
				let data = {'title':that.sname,'page':1,'page_size':20}
				axios.post(' http://api.guanlingls.com/index.php/api/Sou/sousuo',data)
				.then( res=>{
					// console.log(res['data']);
					if(res['data']['code'] == 200){
						that.noData = []
						let beforeData = res['data']
						// console.log(beforeData['data']);
						beforeData['data'].forEach(function(value,index,arr){
							if(value['thumb'].length > 100){
								let beforeimg = value['thumb'].split(':')[21];
								value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								value['title'] = value['title'].replace(that.sname, "<em class='sline'>"+that.sname+'</em>')
								that.noData.push(value)
							}
						})
						// that.getname()
					}
				})
			},
			getAnli(){
				let that = this
				request({
					url: '/news/read?id=29&page=1&page_size=4',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
							
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
						}
					}]
				})
			},
			getname(lmid){
				let that = this
				request({
					url: '/Category/read?id='+lmid,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
			
						if(jsondata['code'] == 200){
							let beforeData = jsondata['data']
							that.lmname = beforeData['name']
							localStorage.setItem('lmname',that.lmname)
						}
					}]
				})
			}

		},
		mounted() {
			let that = this
			that.sname = decodeURI(this.$route.query.name)
			that.getData()
			that.getAnli()
			

		},
		watch:{
		  $route(to, from){
			let that = this
			that.sname = decodeURI(this.$route.query.name)
			that.getData()
		  }
		}
	}
</script>

<style lang="scss" scoped>
.content{

    .contbox{
        padding-top: .2rem;
        padding-bottom: .2rem;
        background: #fff;
        margin-top: .22rem;

        ul{
            padding: 0 .2rem;
            margin-top: .3rem;
            border-bottom: 1px solid #eee;
            li{
                margin-bottom: .3rem;
                a{
                    display: flex;
                    justify-content: space-between;
                    .ggimg{
                        width: 2.5rem;
                        height: 1.87rem;
						overflow: hidden;
                        img{
                            width: 2.5rem;
                        }
                    }
                    .gginfo{
                        width: 4.4rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        strong{
                            display: block;
                            font-size: .3rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
							margin-bottom: .05rem;
                        }
                        p{
                            font-size: .26rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            color: #999;
                            margin-top: .1rem;
                            margin-bottom: .1rem;
							line-height: .36rem;
                        }
                        em{
                            display: block;
                            color: #999;
                            font-size: .26rem;
							text-indent: .35rem;
							background: url('../assets/images/img_58.png') no-repeat left center / .25rem;
                        }
                    }
                }
            }
        }

        .xiangguan{
            padding: 0 .3rem;
            margin-top: .4rem;
            
            h3{
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #eee;
                padding-bottom: .1rem;
                strong{
                    font-size: .32rem;
                    color: #d71617;
                    font-weight: bold;
                }
                a{
                    font-size: .28rem;
                }
            }
            ul{
                li{
                    padding: .25rem 0;
                    border-bottom: 1px solid #eee;
                    margin-bottom: 0;
                    a{
                        display: flex;
                        justify-content: space-between;
                        .xgimg{
                            width: 2.2rem;
                            margin-right: .1rem;
                        }
                        .xginfo{
                            width: 4.5rem;
                            display: flex;
                            flex-wrap: wrap;
                            flex-direction: column;
                            justify-content: center;
                            strong{
                                font-size: .28rem;
                            }
                            em{
                                display: flex;
                                align-items: center;
                                margin-top: .1rem;
                                font-size: .26rem;
                                color: #999;
                                text-indent: .4rem;
                                background: url('../assets/images/img_58.png') no-repeat left center/.3rem;
                                height: .3rem;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>