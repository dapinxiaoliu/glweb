<template>
	<div class="anli">
		<div class="tvwrap w12">
			<div class="tvwrapleft">
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>国家赔偿胜诉案例</strong>
						<a href="javascript:void(0)" @click="toinfo('list',5)">更多></a>
					</h2>
					<div class="tuwen">
						<a href="javascript:void(0)" @click="toinfo(guojiaDatalit[0].id,guojiaDatalit[0].catid)">
							<img :src="guojiaDatalit[0].thumb" alt="">
							<div class="tuweninfo">
								<strong>{{guojiaDatalit[0].title}}</strong>
								<p>{{guojiaDatalit[0].description}}......</p>
							</div>
						</a>
						
					</div>
					<ul>
						<li v-for="item,index in guojiaData"><a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">{{item.title}}</a><span>{{item.create_time}}</span></li>
					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>违法拆迁胜诉案例</strong>
						<a href="javascript:void(0)" @click="toinfo('list',6)">更多></a>
					</h2>
					<div class="tuwen">
						<a href="javascript:void(0)" @click="toinfo(weifaDatalit[0].id,weifaDatalit[0].catid)">
							<img :src="weifaDatalit[0].thumb" alt="">
							<div class="tuweninfo">
								<strong>{{weifaDatalit[0].title}}</strong>
								<p>{{weifaDatalit[0].description}}......</p>
							</div>
						</a>
					</div>
					<ul>
						<li v-for="item,index in weifaData"><a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">{{item.title}}</a><span>{{item.create_time}}</span></li>
						
					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>征收决定胜诉案例</strong>
						<a href="javascript:void(0)" @click="toinfo('list',9)">更多></a>
					</h2>
					<div class="tuwen">
						<a href="javascript:void(0)" @click="toinfo(zhengshouDatalit[0].id,zhengshouDatalit[0].catid)">
							<img :src="weifaDatalit[0].thumb" alt="">
							<img :src="zhengshouDatalit[0].thumb" alt="">
							<div class="tuweninfo">
								<strong>{{zhengshouDatalit[0].title}}</strong>
								<p>{{zhengshouDatalit[0].description}}......</p>
							</div>
						</a>
					</div>
					<ul>
						<li v-for="item,index in zhengshouData"><a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">{{item.title}}</a><span>{{item.create_time}}</span></li>
					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>补偿决定胜诉案例</strong>
						<a href="javascript:void(0)" @click="toinfo('list',8)">更多></a>
					</h2>
					<div class="tuwen">
						<a href="javascript:void(0)" @click="toinfo(buchangDatalit[0].id,buchangDatalit[0].catid)">
							<img :src="buchangDatalit[0].thumb" alt="">
							<div class="tuweninfo">
								<strong>{{buchangDatalit[0].title}}</strong>
								<p>{{buchangDatalit[0].description}}......</p>
							</div>
						</a>
					</div>
					<ul>
						<li v-for="item,index in buchangData"><a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">{{item.title}}</a><span>{{item.create_time}}</span></li>
					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>拆违决定胜诉案例</strong>
						<a href="javascript:void(0)" @click="toinfo('list',7)">更多></a>
					</h2>
					<div class="tuwen">
						<a href="javascript:void(0)" @click="toinfo(chaiweiDatalit[0].id,chaiweiDatalit[0].catid)">
							<img :src="chaiweiDatalit[0].thumb" alt="">
							<div class="tuweninfo">
								<strong>{{chaiweiDatalit[0].title}}</strong>
								<p>{{chaiweiDatalit[0].description}}......</p>
							</div>
						</a>
					</div>
					<ul>
						<li v-for="item,index in chaiweiData"><a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">{{item.title}}</a><span>{{item.create_time}}</span></li>
					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>信息公开胜诉案例</strong>
						<a href="javascript:void(0)" @click="toinfo('list',10)">更多></a>
					</h2>
					<div class="tuwen">
						<a href="javascript:void(0)" @click="toinfo(xinxiDatalit[0].id,xinxiDatalit[0].catid)">
							<img :src="xinxiDatalit[0].thumb" alt="">
							<div class="tuweninfo">
								<strong>{{xinxiDatalit[0].title}}</strong>
								<p>{{xinxiDatalit[0].description}}......</p>
							</div>
						</a>
					</div>
					<ul>
						<li v-for="item,index in xinxiData"><a href="javascript:void(0)" @click="toinfo(item.id,item.catid)">{{item.title}}</a><span>{{item.create_time}}</span></li>
					</ul>
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
		name:'Anli',
		components:{
			Aside
		},
		data(){
			return {
				guojiaData:[],
				guojiaDatalit:[],
				weifaData:[],
				weifaDatalit:[],
				zhengshouData:[],
				zhengshouDatalit:[],
				buchangData:[],
				buchangDatalit:[],
				chaiweiData:[],
				chaiweiDatalit:[],
				xinxiData:[],
				xinxiDatalit:[],
				dianxingData:[],
				dianxingDatalit:[],
				lmname:'冠领案例',
				loading: true
			}
		},
		methods:{
			getData(id){
				let that = this
				if(id == 5){
					that.guojiaData = []
				}else if(id == 6){
					that.weifaData = []
				}else if(id == 9){
					that.zhengshouData = []
				}else if(id == 8){
					that.buchangData = []
				}else if(id == 7){
					that.chaiweiData = []
				}else if(id == 10){
					that.xinxiData = []
				}
				request({
					url: '/anli/read?catid='+id+'&page=1&page_size=5',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								// alert(value['thumb'])
								if(value['thumb'].length > 100){
									
									
									value['create_time'] = value['create_time'].split(' ')[0]
									if(id == 5){
										if(index == 0){
											let beforeimg = value['thumb'].split(':')[21];
											value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
											that.guojiaDatalit.push(value)
										}else{
											that.guojiaData.push(value)
										}
									}else if(id == 6){
										if(index == 0){
											let beforeimg = value['thumb'].split(':')[21];
											value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
											that.weifaDatalit.push(value)
										}else{
											that.weifaData.push(value)
										}
									}else if(id == 9){
										if(index == 0){
											let beforeimg = value['thumb'].split(':')[21];
											value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
											that.zhengshouDatalit.push(value)
										}else{
											that.zhengshouData.push(value)
										}
									}else if(id == 8){
										if(index == 0){
											let beforeimg = value['thumb'].split(':')[21];
											value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
											that.buchangDatalit.push(value)
										}else{
											that.buchangData.push(value)
										}
									}else if(id == 7){
										if(index == 0){
											let beforeimg = value['thumb'].split(':')[21];
											value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
											that.chaiweiDatalit.push(value)
										}else{
											that.chaiweiData.push(value)
										}
									}else if(id == 10){
										if(index == 0){
											let beforeimg = value['thumb'].split(':')[21];
											value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
											that.xinxiDatalit.push(value)
										}else{
											that.xinxiData.push(value)
										}
									}
								}
							})
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
			that.getData(5)
			that.getData(6)
			that.getData(9)
			that.getData(8)
			that.getData(7)
			that.getData(10)
			$('.tvwrapleft').hide().fadeIn()

			
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
                .tuwen{
                    display: flex;
                    padding: 30px 30px 20px;
                    border-bottom: 1px solid #ecebeb;
                    a{
                        display: flex;
                    }
                    img{
                        width: 132px;
                        height: 95px;
                        margin-right: 12px;
                    }
                    strong{
                        font-size: 18px;
                        color: #e71f1c;
                    }
                    p {
                        color: #545455;
                        line-height: 20px;
                        padding-top: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        font-size: 14px;
                    }
                }
            }
            .tvwrapleftitem:last-child{
                margin-bottom: 0;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 25px;
                padding: 0 26px;
                
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