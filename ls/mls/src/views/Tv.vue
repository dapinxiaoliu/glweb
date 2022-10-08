<template>
	<div class="tv">
		<Bannerinner/>
		<div class="content">
			<div class="titleinfo">
				<h3><a href="/">首页</a><em>></em><a href="javascript:void(0)">央视普法</a><em>></em></h3>
			</div>
			<div class="contbox">
				<div class="tvitem">
					<h2 class="linebox">
						<strong>冠领在央视</strong>
						<em></em>
						<p>律师央视普法&nbsp;&nbsp;&nbsp;&nbsp;美名走进万家</p>
					</h2>
					<div class="tvwrap">
						<ul>
							<li v-for="item,index in cctvdata" :key="item.id"  @click="morelink('cctv',item.id)">
								<div class="tvlink">
								<div class="tvimg"><img :src="item.thumb" alt=""></div>
								<p>{{item.title}}</p>
							</div></li>
						</ul>
						<a href="javascript:void(0)" class="morelink" @click="morelink('cctv')">了解更多</a>
					</div>
				</div>
				<div class="tvitem">
					<h2 class="linebox">
						<strong>冠领电视普法</strong>
						<em></em>
						<p>律师央视普法&nbsp;&nbsp;&nbsp;&nbsp;美名走进万家</p>
					</h2>
					<div class="tvwrap">
						<ul>
							<li v-for="item,index in brtvdata" :key="item.id" @click="morelink('brtv',item.id)">
								<div class="tvlink">
								<div class="tvimg"><img :src="item.thumb" alt=""></div>
								<p>{{item.title}}</p>
							</div></li>

						</ul>
						<a href="javascript:void(0)" class="morelink" @click="morelink('brtv')">了解更多</a>
					</div>
				</div>

			</div>
			<div class="honorteam">
				<h3>荣誉律师</h3>
				<ul>
					<li v-for="item,index in zrData" :key="item.id"><router-link :to="{path:'/team/'+item.id+'.html'}"><img :src="item.thumb" alt=""></router-link></li>
						<li v-for="item,index in cqData" :key="item.id"><router-link :to="{path:'/team/'+item.id+'.html'}"><img :src="item.thumb" alt=""></router-link></li>
					</ul>
				</ul>
				<router-link to="/team/index.html" class="morelink">了解更多</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import Bannerinner from '@/components/Bannerinner'
	export default{
		name: 'Tv',
		components:{
			Bannerinner
		},
		data(){
			return {
				cctvdata:[],
				brtvdata:[],
				zrData:[],
				cqData:[]
			}
		},
		methods:{
			getCCTVData(){
				let that = this
				request({
					url: '/video/wapread?id=1&page=1&page_size=6',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.cctvdata = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									that.cctvdata.push(value)
								}
							})
						}
					}]
				})
			},
			getBRTVData(){
				let that = this
				request({
					url: '/video/wapread?id=2&page=1&page_size=6',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							that.brtvdata = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									that.brtvdata.push(value)
								}
								
							})
						}
					}]
				})
			},
			//根据id获取栏目名称并进行本地存储
			getlmname(id){
				let that = this
				request({
					url: '/Category/read?id='+id,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						console.log(jsondata);
						if(jsondata['code'] == 200){
							let beforeData = jsondata['data']

						}
					}]
				})
			},
			morelink(name,id=0){
				// alert(name+id)
				if(id == 0){
					this.$router.push({ path:'/tv/cctv/index.html',query:{ 'name': name }})
				}else{
					this.$router.push({ path:'/tv/cctv/'+id+'.html',query:{ 'name': name }})
				}
				this.getlmname(id)
				
				
			},
			getlawyer(id){
				let that = this
				if(id == 13){
					that.zrData = []
				}else{
					that.cqData = []
				}
				request({
					url: '/team/read?id='+id+'&pgae=1&page_size=2',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						console.log(jsondata);
						if(jsondata['code'] == 200){
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									if(id == 13){
										that.zrData.push(value)
									}else{
										that.cqData.push(value)
									}
								}
							})
			
						}
					}]
				})
			}
		},
		mounted() {
			this.getCCTVData()
			this.getBRTVData()
			this.getlawyer(13)
			this.getlawyer(14)
			// this.getTeamData(47)
		}
	}
</script>

<style lang="scss" scoped>
.content{
	
    .contbox{
        padding-top: 0;
        .tvitem{
           
            .linebox{
				width: 100%;
				background: #f6f5f5;
	
				
                strong{
					display: block;
					margin-top: .3rem;
                }
            }
			.linebox::after{
				width: 80%;
				left: 50%;
				margin-left: -40%;
			}
            .tvwrap{
                background: #fff;
                padding-bottom: .3rem;
                margin-bottom: .3rem;
                ul{
                
                    padding: .3rem .2rem .2rem;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-top: .3rem;
                    li{
                        width: 3.5rem;
                        height: 2.93rem;
                        margin-bottom: .2rem;
                        .tvlink{
                            display: flex;
                            flex-wrap: wrap;
                            .tvimg{
                                width: 3.5rem;
                                height: 2.29rem;
                                overflow: hidden;
								
								img{
									width: 3.5rem;
									height: 2.29rem;
								}
                            }
                            p{
                                width: 100%;
                                font-size: .26rem;
                                text-align: center;
                                padding: 0 .1rem;
                                line-height: .32rem;
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

        .tvitem:last-child{
            .tvwrap{
                margin-bottom: 0;
            }
			.linebox{
				strong{
					padding-top: .3rem;
				}

				
			}
			.linebox::after{
				margin-top: .3rem;
			}
            
        }





    }
    .honorteam{
        background: #fff;
        padding-bottom: .2rem;
        h3{
            border-bottom: 1px solid #eee;
            color: #d71617;
            font-size: .3rem;
            padding-bottom: .1rem;
            padding-top: .1rem;
            text-indent: .3rem;
        }
        ul{
            padding: 0 0rem .3rem;
            margin-top: .4rem;
            display: flex;
            justify-content: space-between;
            li{
                width: 1.65rem;
                height: 2.35rem;
                overflow: hidden;
                a{
                    img{
                        width: 1.65rem;
                        height: 2.35rem;
                    }
                }
            }
        }
    }
}

</style>