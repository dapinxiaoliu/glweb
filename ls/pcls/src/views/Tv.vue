<template>
	<div class="tv">
		<div class="tvwrap w12">
			<div class="tvwrapleft">
				<div class="tvitem comborder">
					<h2 class="comtitle"><strong>央视CCTV12《法律讲堂》</strong><a href="javascript:void(0)" @click="toinfo('list',48)">更多></a></h2>
					<ul>
						<li v-for="item,index in jiangtangData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">
								<img :src="item.thumb" alt="">
								<p>{{item.title}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="tvitem comborder">
					<h2 class="comtitle"><strong>央视CCTV1《今日说法》</strong><a href="javascript:void(0)" @click="toinfo('list',49)">更多></a></h2>
					<ul>
						<li v-for="item,index in shuofaData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">
								<img :src="item.thumb" alt="">
								<p>{{item.title}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="tvitem comborder">
					<h2 class="comtitle"><strong>央视新媒体普法</strong><a href="javascript:void(0)" @click="toinfo('list',50)">更多></a></h2>
					<ul>
						<li v-for="item,index in meitiData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">
								<img :src="item.thumb" alt="">
								<p>{{item.title}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="tvitem comborder">
					<h2 class="comtitle"><strong>央视CCTV12《律师来了》</strong><a href="javascript:void(0)" @click="toinfo('list',51)">更多></a></h2>
					<ul>
						<li v-for="item,index in lawyerData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">
								<img :src="item.thumb" alt="">
								<p>{{item.title}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="tvitem comborder">
					<h2 class="comtitle"><strong>央视CCTV12《以案说法》</strong><a href="javascript:void(0)" @click="toinfo('list',52)">更多></a></h2>
					<ul>
						<li v-for="item,index in anData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">
								<img :src="item.thumb" alt="">
								<p>{{item.title}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="tvitem comborder">
					<h2 class="comtitle"><strong>CCTV13《共同关注》</strong><a href="javascript:void(0)" @click="toinfo('list',53)">更多></a></h2>
					<ul>
						<li v-for="item,index in guanzhuData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">
								<img :src="item.thumb" alt="">
								<p>{{item.title}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="tvitem comborder">
					<h2 class="comtitle"><strong>CCTV-7军事农业</strong><a href="javascript:void(0)" @click="toinfo('list',54)">更多></a></h2>
					<ul>
						<li v-for="item,index in junshiData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">
								<img :src="item.thumb" alt="">
								<p>{{item.title}}</p>
							</a>
						</li>
					</ul>
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
		name:'Tv',
		components:{
			Aside
		},
		data(){
			return {
				jiangtangData:[],
				shuofaData:[],
				meitiData:[],
				lawyerData:[],
				anData:[],
				guanzhuData:[],
				junshiData:[],
				lmname:'冠领在央视'
			}
		},
		methods:{
			getData(catid,pagesize){
				let that = this
				if(catid == 48){
					that.jiangtangData = []
				}else if(catid == 49){
					that.shuofaData = []
				}else if(catid == 50){
					that.meitiData = []
				}else if(catid == 51){
					that.lawyerData = []
				}else if(catid == 52){
					that.anData = []
				}else if(catid == 53){
					that.guanzhuData = []
				}else if(catid == 54){
					that.junshiData = []
				}
				request({
					url: '/video/read?id='+catid+'&page=1&page_size='+pagesize,
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
									if(catid == 48){
										that.jiangtangData.push(value)
									}else if(catid == 49){
										that.shuofaData.push(value)
									}else if(catid == 50){
										that.meitiData.push(value)
									}else if(catid == 51){
										that.lawyerData.push(value)
									}else if(catid == 52){
										that.anData.push(value)
									}else if(catid == 53){
										that.guanzhuData.push(value)
									}else if(catid == 54){
										that.junshiData.push(value)
									}
								}
								
							})
						}
					}]
				})
			},
			toinfo(id,catid){
				localStorage.setItem('tvcatid',catid)
				if(id == 'list'){
					this.$router.push({ path:'/tv/list/index.html'})
				}else{
					this.$router.push({ path:'/tv/'+id+'.html'})
				}
			}
		},
		mounted() {
			this.getData(48,6)
			this.getData(49,6)
			this.getData(50,6)
			this.getData(51,6)
			this.getData(52,6)
			this.getData(53,6)
			this.getData(54,6)
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
                strong{
                    width: 320px;
                    margin-left: 25px;
                }
                strong::after{
                    left: 39%;
                }
                a{
                    margin-right: 30px;
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
                            width: 252px;
                            height: 169px;
                        }
                        p{
                            font-size: 14px;
                            text-align: center;
                            line-height: 20px;
                            margin-top: 12px;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
                        }
                    }
                }
            }
        }
    }




}
</style>