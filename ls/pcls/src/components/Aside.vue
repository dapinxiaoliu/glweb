<template>
	<div class="tvwrapright">
		<div class="tvwraprightitem comborder fensuohide">
			<h2>{{lmname}}</h2>
			<ul v-if="showaside == 'tv'">
				<li><a href="javascript:void(0)" @click="toinfo('listx',48)" >央视CCTV12《法律讲堂》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',49)" >央视CCTV1《今日说法》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',50)" >央视新媒体普法</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',51)" >央视CCTV12《律师来了》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',52)" >央视CCTV12《以案说法》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',53)" >CCTV13《共同关注》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',54)" >CCTV-7军事农业</a></li>
			</ul>
			<ul v-else-if="showaside == 'brtv'">
				<li><a href="javascript:void(0)" @click="toinfo('listx',55)" >北京电视台BRTV科教《法治进行时》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',56)" >北京电视台BRTV科教《庭审纪实》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',57)" >北京电视台BRTV科教《第三调解室》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',58)" >北京电视台BRTV科教《律师门诊室》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',60)" >北京电视台BRTV生活频道《生活广角》</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('listx',59)" >北京电视台BRTV青年《谁在说》</a></li>

			</ul>
			<ul v-else-if="showaside == 'team'">
				<li><a href="javascript:void(0)" @click="toinfo('teamlist',13)" >冠领主任</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('teamlist',31)" >冠领专家顾问</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('teamlist',14)" >专业拆迁律师</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('teamlist',15)" >实习律师</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('teamlist',16)" >律师助理</a></li>
			</ul>
			<ul v-else-if="showaside == 'anli'">
				<li><a href="javascript:void(0)" @click="toinfo('anlilist',5)" >国家赔偿胜诉案例</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('anlilist',6)" >违法拆迁胜诉案例</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('anlilist',9)" >征收决定胜诉案例</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('anlilist',8)" >补偿决定胜诉案例</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('anlilist',7)" >拆违决定胜诉案例</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('anlilist',10)" >信息公开胜诉案例</a></li>
				<!-- <li><a href="javascript:void(0)" @click="toinfo('anlilist',16)" >典型案例胜诉案例</a></li> -->
			</ul>
			<ul v-else-if="showaside == 'honor'">
				<li><a href="javascript:void(0)" @click="toinfo('hlist',24)" >锦旗荣誉</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('hlist',25)" >奖杯荣誉</a></li>
			</ul>
			<ul v-else-if="showaside == 'noticle'">
				<li><a href="javascript:void(0)" @click="toinfo('nolist',1)" >冠领在开庭</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('nolist',2)" >冠领在办案</a></li>
			</ul>
			<ul v-else-if="showaside == 'news'">
				<li><a href="javascript:void(0)" @click="toinfo('glxw')" >冠领新闻</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('hyxw')" >行业新闻</a></li>
			</ul>
			<ul v-else-if="showaside == 'newsteshu'">
				<li><router-link to="/team/index.html">团队介绍</router-link></li>
				<li><router-link to="/news/1675.html">联系我们</router-link></li>
				<li><router-link to="/news/1676.html">招贤纳士</router-link></li>
				<li><router-link to="/news/1677.html">关于我们</router-link></li>
			</ul>
			<ul v-else-if="showaside == 'fagui'">
				<li><a href="javascript:void(0)" @click="toinfo('fagui',62)" >行政法规</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('fagui',63)" >地方规章</a></li>
			</ul>
			<ul v-else-if="showaside == 'dayi'">
				<li><a href="javascript:void(0)" @click="toinfo('dayi',45)" >拆迁问答</a></li>
				<li><a href="javascript:void(0)" @click="toinfo('dayi',44)" >律师答疑</a></li>
			</ul>
		</div>
		<div class="tvwraprightitem comborder">
			<h2>开庭公告</h2>
			<ul>
				<li v-for="item,index in NoticleData" :key="item.id">
					<router-link :to="{path:'/noticle/'+item.id+'.html'}" >{{item.title}}</router-link>
				</li>
			</ul>
		</div>
		<div class="tvwraprightitem comborder">
			<h2>站内推荐</h2>
			<ul>
				<li><router-link to="/team/1.html"><em>1</em>周旭亮 主任</router-link></li>
				<li><router-link to="/team/9.html"><em>2</em>任战敏 执行主任</router-link></li>
				<li><router-link to="/news/12.html"><em>3</em>周旭亮荣登《中华英才》封底人物</router-link></li>
				<li><router-link to="/news/19.html"><em>4</em>任战敏荣登《人民法治》封底人物</router-link></li>
				<li><router-link to="/news/1683.html"><em>5</em>中国拆迁经典案例中国拆迁经典案例 山东王进文案</router-link></li>
				<li><router-link to="/news/1684.html"><em>6</em>上海仓储公司拆迁案 赔偿1.75亿</router-link></li>
				<li><router-link to="/tv/list/index.html?id=1"><em>7</em>央视《法律讲堂》主讲律师周旭亮</router-link></li>
				<li><router-link to="/tv/list/index.html?id=2"><em>8</em>央视《律师来了》周旭亮 任战敏</router-link></li>
			</ul>
		</div>
		
		<div class="tvwraprightitem comborder">
			<h2>联系我们</h2>
			<div id="bdmap" class="map">a</div>
			<p>地址：<span>北京市西城区宣武门外大街庄胜广场中央办公楼5层、6层、15层、13层1309-1312</span></p>
			<p>电话：400-8787-666</p>
			<p>乘坐地铁2、4号线宣武门G口出</p>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import { BMPGL } from '../map/map.js'

	export default{
		name:'Aside',
		data(){
			return {
				NoticleData:[],
				lmid:0,
				lmname:'',
				lmson:[],
				pid:0,
				showaside:'',
				ak:'w1ZAZ1thAXkNOCNO5K0WCBo6dXkfMAbC'
			}
		},
		props:['lmname'],
		emits:['changeUrl'],
		methods:{
			
			initMap() {
				// 传入密钥获取地图回调。
				BMPGL(this.ak).then((BMapGL) => {
				  // 创建地图实例
				  let map = new BMapGL.Map("bdmap");
				  // 创建点坐标 axios => res 获取的初始化定位坐标
				  let point = new BMapGL.Point(116.382149,39.902858)
				  // 初始化地图，设置中心点坐标和地图级别
				  map.centerAndZoom(point, 16)
				  //开启鼠标滚轮缩放
				  map.enableScrollWheelZoom(true)
		
				  // 创建点标记
				  let marker = new BMapGL.Marker(point);
				  map.addOverlay(marker);
				  // 创建信息窗口
				  let opts = {
					  width: 200,
					  height: 100,
					  title: '北京冠领律师事务所'
				  };
				  let infoWindow = new BMapGL.InfoWindow('地址：北京市西城区宣武门外大街庄胜广场中央办公楼5层、6层、15层、13层1309-1312', opts);
				  // 点标记添加点击事件
				  map.openInfoWindow(infoWindow, point);
				  marker.addEventListener('click', function () {
					  map.openInfoWindow(infoWindow, point); // 开启信息窗口
				  });
				})
				.catch((err)=>{
				  console.log(err)
				})
			},
			getNoticle(){
				let that = this
				request({
					url: '/gonggao/read?id=1&page=1&page_size=14',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						if(jsondata['code'] == 200){
							// console.log(jsondata);
							that.NoticleData = []
							let beforeData = jsondata['data']
							that.NoticleData = beforeData['data']
						}
					}]
				})
			},

			toinfo(xm){ 
				let name = this.$route.name
				let routename = this.$route.path.split('/')
				let path = xm == 'glxw' ? 'gl' : 'hy'
				this.$emit('changeUrl',routename[1]+'/'+path)
			}
		},
		mounted() {
			if(this.$route.name.indexOf('team') != -1){
				this.showaside = 'team'
				this.lmid = localStorage.getItem('teamcatid')
			}else if(this.$route.name.indexOf('tv') != -1){
				if(this.$route.query.id == 2 || this.$route.query.id == 55 || this.$route.query.id == 56 || this.$route.query.id == 57 || this.$route.query.id == 58 || this.$route.query.id == 59 || this.$route.query.id == 60){
					this.showaside = 'brtv'
				}else{
					this.showaside = 'tv'
				}
				
				this.lmid = localStorage.getItem('tvcatid')
				if(this.lmid == 1){
					this.lmid = 46
				}else if(this.lmid == 2){
					this.lmid = 47
				}else if(this.lmid == 3){
					this.lmid = 1
				}else if(this.lmid == 4){
					this.lmid = 2
				}

			}else if(this.$route.name.indexOf('anli') != -1){
				if(this.$route.query.id == 6){
					this.showaside = 'anlix'
				}else{
					this.showaside = 'anli'
				}
				
			}else if(this.$route.name.indexOf('honor') != -1){

				this.showaside = 'honor'
			}else if(this.$route.name.indexOf('noticle') != -1){

				this.showaside = 'noticle'
			}else if(this.$route.name.indexOf('news') != -1){
				
				let id = this.$route.params.id
				if(id == 1677 || id == 1676 || id == 1675){
					this.showaside = 'newsteshu'
				}else{
					this.showaside = 'news'
				}
			}else if(this.$route.name.indexOf('fensuo') != -1 || this.$route.name.indexOf('search') != -1){
				let id = this.$route.params.id
				// this.fensuoshow = false
				$('.fensuohide').css({
					'height':0,
					'margin':0,
					'padding':0,
					'border':'none',
					'overflow':'hidden'
				})
			}else if(this.$route.name.indexOf('fagui') != -1){

				this.showaside = 'fagui'
			}else if(this.$route.name.indexOf('dayi') != -1){

				this.showaside = 'dayi'
			}
			
			this.initMap()
			this.getNoticle()
			
			
			
		},
		watch:{
			$route(to, from){

				if(this.$route.name.indexOf('team') != -1){
					this.showaside = 'team'
					this.lmid = localStorage.getItem('teamcatid')
					
				}else if(this.$route.name.indexOf('tv') != -1){
					if(this.$route.query.id == 2 || this.$route.query.id == 55 || this.$route.query.id == 56 || this.$route.query.id == 57 || this.$route.query.id == 58 || this.$route.query.id == 59 || this.$route.query.id == 60){
						this.showaside = 'brtv'
					}else{
						this.showaside = 'tv'
					}
					this.lmid = localStorage.getItem('tvcatid')
					if(this.lmid == 1){
						this.lmid = 46
					}else if(this.lmid == 2){
						this.lmid = 47
					}else if(this.lmid == 3){
						this.lmid = 1
					}else if(this.lmid == 4){
						this.lmid = 2
					}
					
				}else if(this.$route.name.indexOf('anli') != -1){
					this.showaside = 'anli'
				}else if(this.$route.name.indexOf('honor') != -1){
					this.showaside = 'honor'
				}else if(this.$route.name.indexOf('noticle') != -1){

					this.showaside = 'noticle'
				}else if(this.$route.name.indexOf('news') != -1){

					let id = this.$route.params.id
					if(id == 1677 || id == 1676 || id == 1675){
						this.showaside = 'newsteshu'
					}else{
						this.showaside = 'news'
					}
				}else if(this.$route.name.indexOf('fensuo') != -1 || this.$route.name.indexOf('search') != -1){
				let id = this.$route.params.id
					// this.fensuoshow = false
					$('.fensuohide').css({
						'height':0,
						'margin':0,
						'padding':0,
						'border':'none',
						'overflow':'hidden'
					})
				}else if(this.$route.name.indexOf('fagui') != -1){

					this.showaside = 'fagui'
				}else if(this.$route.name.indexOf('dayi') != -1){

					this.showaside = 'dayi'
				}
					
					this.initMap()
					this.getNoticle()
				}
			
		}
	}
</script>

<style lang="scss" scoped>
    .tvwrapright{
        width: 275px;
		min-height: 1000px;
        .tvwraprightitem{
            margin-bottom: 10px;
            background: #fff;
            h2{
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                text-align: center;
                color: #fff;
                background: linear-gradient(to bottom, #dd514c 5%, #c21a20 45%,#c21a20 55%, #dd514c 100%);
            }
            ul{
                li{
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    border-bottom: 1px solid #ecebeb;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					
                    a{
                        font-size: 14px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
                    }
                }
            }
        }
        .tvwraprightitem:nth-child(2){
            ul{
                padding: 15px;
                li{
                    height: 25px;
                    line-height: 25px;
                    border: none;
                    position: relative;
                    a{
                        display: block;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        text-align: left;
                        padding-left: 10px;
                    }
                    a::after{
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 11px;
                        width: 5px;
                        height: 5px;
                        background: #e73825;
                        margin-right: 4px;
                    }
                }
                

            }
        }
        .tvwraprightitem:nth-child(3){
            ul{
                padding:15px;
                li{
                    height: 25px;
                    line-height: 25px;
                    border: none;
                    a{
                        display: block;
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        em{
                            width: 16px;
                            height: 16px;
                            background: #c0bfbe;
                            margin-right: 10px;
                            font-size: 12px;
                            color: #fff;
                            display: inline-block;
                            font-style: normal;
                            text-align: center;
                            line-height: 16px;
                        }
                    }
                }
                li:nth-child(-n+3){
                    em{
                        background: #e9b63a;
                    }
                }
            }
        }
        .tvwraprightitem:nth-child(4){
			padding-bottom: 20px;
			margin-bottom: 0;
            p{
                font-size: 14px;
                padding: 0 20px;
                color: #333;
                line-height: 100%;
                margin-top: 10px;
            }
            p:nth-of-type(1){
                display: flex;
                span{
                    width: 185px;
                    line-height: 20px;
                }
            }
        }
    }
</style>