<template>
	<div class="team">
		<div class="tvwrap w12">
			<div class="tvwrapleft">
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>冠领主任</strong>
						<a href="javascript:void(0)" @click="toinfo('list',13)" >更多></a>
					</h2>
					<ul>
						<li v-for="item,index in zrData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)" >
								<div class="itemleft">
									<img :src="item.thumb" alt="">
									<b>{{item.title}}</b>
								</div>
								<div class="itemright">
									<p>{{item.description}}...<span>详细>></span></p>
								</div>
							
							</a></li>

					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>冠领专家顾问</strong>
						<a href="javascript:void(0)" @click="toinfo('list',31)" >更多></a>
					</h2>
					<ul>
						<li v-for="item,index in guwenData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)" >
							<div class="itemleft">
								<img :src="item.thumb" alt="">
								<b>{{item.title}}</b>
							</div>
							<div class="itemright">
								<p>{{item.description}}...<span>详细>></span></p>
							</div>
							
						</a></li>
					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>专业拆迁律师</strong>
						<a href="javascript:void(0)" @click="toinfo('list',14)" >更多></a>
					</h2>
					<ul>
						<li v-for="item,index in chaiqianData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)" >
							<div class="itemleft">
								<img :src="item.thumb" alt="">
								<b>{{item.title}}</b>
							</div>
							<div class="itemright">
								<p>{{item.description}}...<span>详细>></span></p>
							</div>
							
						</a></li>

					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>实习律师</strong>
						<a href="javascript:void(0)" @click="toinfo('list',15)" >更多></a>
					</h2>
					<ul>
						<li v-for="item,index in shixiData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)" >
							<div class="itemleft">
								<img :src="item.thumb" alt="">
								<b>{{item.title}}</b>
							</div>
							<div class="itemright">
								<p>{{item.description}}...<span>详细>></span></p>
							</div>
							
						</a></li>

					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>律师助理</strong>
						<a href="javascript:void(0)" @click="toinfo('list',16)" >更多></a>
					</h2>
					<ul>
						<li v-for="item,index in zhuliData" :key="item.id">
							<a href="javascript:void(0)" @click="toinfo(item.id,item.catid)" >
							<div class="itemleft">
								<img :src="item.thumb" alt="">
								<b>{{item.title}}</b>
							</div>
							<div class="itemright">
								<p>{{item.description}}...<span>详细>></span></p>
							</div>
							
						</a></li>
				
					</ul>
				</div>


			</div>
			<Aside :lmname="lmname"/>

		</div>
	</div>
</template>

<script>
	import Aside from '../components/Aside'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	export default{
		name:'Team',
		components:{
			Aside
		},
		data(){
			return {
				zrData:[],
				guwenData:[],
				chaiqianData:[],
				shixiData:[],
				zhuliData:[],
				lmname:'团队介绍'
			}
		},
		methods:{
			getData(id,pagesize){
				let that = this
				if(id == 13){
					that.zrData = []
				}else if(id == 31){
					that.guwenData = []
				}else if(id == 14){
					that.chaiqianData = []
				}else if(id == 15){
					that.shixiData = []
				}else if(id == 15){
					that.zhuliData = []
				}
				request({
					url: '/team/read?id='+id+'&pgae=10&page_size='+pagesize,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									// console.log(value['thumb']);
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									value['description'] = value['description'].substr(0,93)
									if(id == 13){
										that.zrData.push(value)
									}else if(id == 31){
										that.guwenData.push(value)
									}else if(id == 14){
										that.chaiqianData.push(value)
									}else if(id == 15){
										that.shixiData.push(value)
									}else if(id == 16){
										that.zhuliData.push(value)
									}
								}
							})
							// console.log(that.zrData);
						}
					}]
				})
			},
			toinfo(id,catid){
				localStorage.setItem('teamcatid',catid)
				if(id == 'list'){
					this.$router.push({ path:'/team/list/index.html'})
				}else if(id == 'teamlist'){
					alert('bbbb')
					return false
					this.$router.push({ path:'/team/list/index.html',query:{'id':catid}})
				}else{
					this.$router.push({ path:'/team/'+id+'.html'})
				}
				
			}
		},
		mounted() {
			this.getData(13,2)
			this.getData(31,3)
			this.getData(14,8)
			this.getData(15,8)
			this.getData(16,8)
		}
	}
</script>

<style lang="scss">
.tvwrap{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .tvwrapleft{
        width: 915px;
        background-color: #fff;
        h2.comtitle{
            strong{
                width: 155px;
                margin-left: 25px;
                padding: 0;
            }
            strong::after{
                left: 35%;
            }
            a{
                margin-right: 35px;
            }
           
        }
        .tvwrapleftitem:last-child{
            margin-bottom: 0;
        }
        .tvwrapleftitem:nth-child(n+2){
            ul{
                padding: 0 20px;
                li{
                    margin: 20px 0;
                }
            }
            
        }
        .tvwrapleftitem{
            margin-bottom: 10px;
            ul{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 20px;
                li:hover{
                    a{
                        color: #333 !important;
                    }
                }
                li{
                    width: 410px;
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
                            width: 240px;
                            p{
                                line-height: 26px;
                                padding-top: 10px;
                                font-size: 14px;
								text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 6;
								overflow: hidden;
                            }
                            span{
                                font-size: 14px;
                                color: #e71f1d;
								margin-left: 5px;
                            }
                        }
                        
                    }
                }
            }
        }  
    }
}
</style>