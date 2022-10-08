<template>
  <div class="home">
            <div class="banner">
                <div class="swiper banbox">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="item,index in banner" :key="item.id"><router-link :to="{path:item.url}"><img :src="item.thumb" alt=""></router-link></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
    
            <!-- 主体开始 -->
            <div class="lingyu">
                <h2 class="linebox">
                    <strong>业务领域及案例</strong>
                    <em></em>
                    <p>为客户提供全方位、一站式法律服务</p>
                </h2>
                <ul>
                    <li><router-link :to="{path:'anli/index.html?id=37'}"><img src="@/assets/images/zhuzhai.jpg" alt=""></router-link></li>
                    <li><router-link :to="{path:'anli/index.html?id=38'}"><img src="@/assets/images/shangpu.jpg" alt=""></router-link></li>
                    <li><router-link :to="{path:'anli/index.html?id=39'}"><img src="@/assets/images/qiye.jpg" alt=""></router-link></li>
                    <li><router-link :to="{path:'anli/index.html?id=7'}"><img src="@/assets/images/weijian.jpg" alt=""></router-link></li>
                    <li><router-link :to="{path:'anli/index.html?id=6'}"><img src="@/assets/images/qiangzhi.jpg" alt=""></router-link></li>
                    <li><router-link :to="{path:'anli/index.html?id=40'}"><img src="@/assets/images/nongcun.jpg" alt=""></router-link></li>
                    <li><router-link :to="{path:'anli/index.html?id=41'}"><img src="@/assets/images/chengzhongcun.jpg" alt=""></router-link></li>
                    <li><router-link :to="{path:'anli/index.html?id=42'}"><img src="@/assets/images/huanjing.jpg" alt=""></router-link></li>
                </ul>
            </div>
            <div class="banan">
                <h2 class="linebox">
                    <strong>拆迁律师办案公告</strong>
                    <em></em>
                    <p>律走四方&nbsp;&nbsp;&nbsp;&nbsp;施以援手</p>
                </h2>
                <div class="bananwrap">
                    <ul>
                        <li v-for="item,index in noticle" :key="item.id">
							<router-link :to="{path:'/noticle/'+item.id+'.html'}">
                            <img :src="item.thumb" alt="">
                            <div class="bananinfo">
                                <strong>{{item.title}}</strong>
                                <span>{{item.create_time}}</span>
                            </div>
                        </router-link></li>

                    </ul>
                    <router-link :to="{path:'/noticle/index.html'}" class="morelink">了解更多</router-link>
                    <a href="tel:4008787666" class="dianhua"><img src="@/assets/images/img_67.png" alt=""></a>
                </div>
            </div>
            <div class="team">
                <h2 class="linebox">
                    <strong>冠领拆迁律师团队</strong>
                    <em></em>
                    <p>精诚团结&nbsp;&nbsp;&nbsp;&nbsp;超古冠今</p>
                </h2>
                <div class="teamwrap">
                    <div class="teamtop">
                        <img src="@/assets/images/tdzoom.jpg" alt="">
                        <p>北京冠领律师事务所的律师绝大多数毕业于北京大学、清华大学、中国人民大学、中国政法大学、中国人民公安大学等国内知名院校。均受过系统的法学教育，拥有硕士、博士学位，具有坚实的理论功底和丰富的业务经验。</p>
                    </div>
                    <ul>
                        <li v-for="item,index in zrData" :key="item.id"><router-link :to="{path:'/team/'+item.id+'.html'}"><img :src="item.thumb" alt=""><strong>{{item.title}}</strong></router-link></li>
                        <li v-for="item,index in cqData" :key="item.id"><router-link :to="{path:'/team/'+item.id+'.html'}"><img :src="item.thumb" alt=""><strong>{{item.title}}</strong></router-link></li>
                       
                    </ul>
                    <router-link :to="{path:'/team/index.html'}" class="morelink">了解更多</router-link>
                    <a href="tel:4008787666" class="dianhua"><img src="@/assets/images/img_67.png" alt=""></a>
                </div>
            </div>
            <div class="chaiqian banan">
                <h2 class="linebox">
                    <strong>拆迁案例</strong>
                    <em></em>
                    <p>依法维权&nbsp;&nbsp;&nbsp;&nbsp;冠领助力</p>
                </h2>
                <div class="bananwrap">
                    <ul>
                        <li v-for="item,index in anliData" :key="item.id">
							<router-link :to="{path:'/anli/'+item.id+'.html'}">
                            <div><img :src="item.thumb" alt=""></div>
                            <div class="bananinfo">
                                <strong>{{item.title}}</strong>
                                <span>{{item.create_time}}</span>
                            </div>
                        </router-link></li>

    
                    </ul>
                   <router-link :to="{path:'/anli/index.html'}" class="morelink">了解更多</router-link>
                   <a href="tel:4008787666" class="dianhua"><img src="@/assets/images/img_67.png" alt=""></a>
                </div>
            </div>
            <div class="yangshi">
                <h2 class="linebox">
                    <strong>冠领在央视</strong>
                    <em></em>
                    <p>律师央视普法&nbsp;&nbsp;&nbsp;&nbsp;美名走进万家</p>
                </h2>
                <div class="yangshiwrap">
                    <ul>
                        <li v-for="item,index in zxlData" :key="item.id" @click="toTv('cctv',item.id)">
							<div :to="{path:'/tv/cctv/'+item.id+'.html'}">
                            <img :src="item.thumb" alt="">
                            <p>{{item.title}}</p>
                        </div></li>
						<li v-for="item,index in rzmData" :key="item.id" @click="toTv('cctv',item.id)">
							<div :to="{path:'/tv/cctv/'+item.id+'.html'}">
						    <img :src="item.thumb" alt="">
						    <p>{{item.title}}</p>
						</div></li>
                    </ul>
                    <router-link :to="{path:'/tv/cctv/index.html?id=51'}" class="morelink">了解更多</router-link>
                    <a href="tel:4008787666" class="dianhua"><img src="@/assets/images/img_67.png" alt=""></a>
                </div>
            </div>
            <div class="pufa yangshi">
                <h2 class="linebox">
                    <strong>冠领电视普法</strong>
                    <em></em>
                    <p>律师电视普法&nbsp;&nbsp;&nbsp;&nbsp;美名走进万家</p>
                </h2>
                <div class="yangshiwrap">
                    <ul>
                        <li v-for="item,index in fazhiData" :key="item.id" @click="toTv('brtv',item.id)">
							<div :to="{path:'/tv/cctv/'+item.id+'.html'}">
								<img :src="item.thumb" alt="">
								<p>{{item.title}}</p>
							</div>
						</li>
                    </ul>
                    <router-link :to="{path:'/tv/cctv/index.html?name=brtv'}" class="morelink">了解更多</router-link>
                    <a href="tel:4008787666" class="dianhua"><img src="@/assets/images/img_67.png" alt=""></a>
                </div>
            </div>
            <div class="chaiqian banan">
                <h2 class="linebox">
                    <strong>冠领新闻</strong>
                    <em></em>
                    <p>冠领同行&nbsp;&nbsp;&nbsp;&nbsp;携手共赢</p>
                </h2>
                <div class="bananwrap">
                    <ul>
                        <li v-for="item,index in newsData" :key="item.id">
							<router-link :to="{path:'/media/'+item.id+'.html'}">
                            <div><img :src="item.thumb" alt=""></div>
                            <div class="bananinfo">
                                <strong>{{item.title}}</strong>
                                <span>{{item.create_time}}</span>
                            </div>
                        </router-link></li>

    
                    </ul>
                    <router-link :to="{path:'/media/index.html'}" class="morelink">了解更多</router-link>
                    <a href="tel:4008787666" class="dianhua"><img src="@/assets/images/img_67.png" alt=""></a>
                </div>
            </div>
            <div class="honor yangshi">
                <h2 class="linebox">
                    <strong>冠领荣誉</strong>
                    <em></em>
                    <p>风雨历程&nbsp;&nbsp;&nbsp;&nbsp;鼎信天下</p>
                </h2>
                <div class="yangshiwrap">
                    <ul>
                        <li v-for="item,index in honorData" :key="item.id">
							<router-link :to="{path:'/honor/'+item.id+'.html'}">
                            <img :src="item.thumb" alt="">
                            <p>{{item.title}}</p>
                        </router-link></li>
                    </ul>
                   <router-link :to="{path:'/honor/index.html'}" class="morelink">了解更多</router-link>
                   <a href="tel:4008787666" class="dianhua"><img src="@/assets/images/img_67.png" alt=""></a>
                </div>
            </div>
  </div>
</template>

<script>
	import Swiper from 'swiper'
	import "swiper/css/swiper.min.css"
	import $ from 'jquery'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	export default {
	  name: 'home',
	  components: {

	  },
	  data(){
		  return {
			  banner:[],
			  noticle:[],
			  zrData:[],
			  cqData:[],
			  anliData:[],
			  zxlData:[],
			  rzmData:[],
			  fazhiData:[],
			  newsData:[],
			  honorData:[]
		  }
	  },
	  methods:{
		  getBanner(){
		  	let that = this
		  	request({
		  		url: '/index/banner?id=2',
		  		responseType: 'json',
		  		transformResponse:[function(data){
		  			let jsondata = JSON.parse(data)
		  			// console.log(jsondata);
		  			if(jsondata['code'] == 200){
		  				that.banner = []
		  				let beforeData = jsondata['data']
		  				beforeData.forEach(function(value,index,arr){
							
		  					if(value['thumb'].length > 100){
		  						let beforeimg = value['thumb'].split(':')[21];
		  						value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
		  						that.banner.push(value)
		  					}
		  				})

		  			}
		  		}]
		  	})		  
		  },
		  getnoticle(){
			  let that = this
			  request({
			  	url: '/index/gonggao?id=2',
			  	responseType: 'json',
			  	transformResponse:[function(data){
			  		let jsondata = JSON.parse(data)
			  		// console.log(jsondata);
			  		if(jsondata['code'] == 200){
			  			that.noticle = []
			  			let beforeData = jsondata['data']
			  			beforeData.forEach(function(value,index,arr){
			  				if(index > 3){ return false;}
			  				if(value['thumb'].length > 100){
			  					let beforeimg = value['thumb'].split(':')[21];
			  					value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
			  					that.noticle.push(value)
			  				}
			  			})
			  
			  		}
			  	}]
			  })
		  },
		  getlawyer(id,pagesize=2){
		  	let that = this
		  	if(id == 13){
		  		that.zrData = []
		  	}else{
		  		that.cqData = []
		  	}
		  	request({
		  		url: '/team/read?id='+id+'&pgae=1&page_size='+pagesize,
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
		  },
		  getAnli(){
			  let that = this
			  request({
			  	url: '/index/wapanli',
			  	responseType: 'json',
			  	transformResponse:[function(data){
			  		let jsondata = JSON.parse(data)
			  		// console.log(jsondata);
			  		if(jsondata['code'] == 200){
			  			that.anliData = []
			  			let beforeData = jsondata['data']
			  			beforeData.forEach(function(value,index,arr){
							if(index > 3){return false;}
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
		  getshipin(id){
			  let that = this
			  if(id == 48){
			  	that.zxlData = []
			  }else if(id == 51){
			  	that.rzmData = []
			  }else{
				that.fazhiData = []
			  }
			  request({
				url: '/index/video?id='+id,
				responseType: 'json',
				transformResponse:[function(data){
					let jsondata = JSON.parse(data)
					// console.log(jsondata);
					if(jsondata['code'] == 200){
						let beforeData = jsondata['data']
						beforeData.forEach(function(value,index,arr){
							
							if(value['thumb'].length > 100){
								let beforeimg = value['thumb'].split(':')[21];
								value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								if(id == 48){
									if(index > 1){return false;}
									that.zxlData.push(value)
								}else if(id == 51){
									if(index > 1){return false;}
									that.rzmData.push(value)
								}else{
									if(index > 3){return false;}
									that.fazhiData.push(value)
								}
							}
						})
  
					}
				}]
			  })
		  },
		  toTv(name,id){
			 // localStorage.setItem('cctvname',name)
			 this.$router.push({ path:'/tv/cctv/'+id+'.html',query:{'name':name}})
		  },
		  getNews(){
			  let that = this
			  request({
				url: '/index/news',
				responseType: 'json',
				transformResponse:[function(data){
					let jsondata = JSON.parse(data)
					// console.log(jsondata);
					if(jsondata['code'] == 200){
						that.newsData = []
						let beforeData = jsondata['data']
						beforeData.forEach(function(value,index,arr){
							if(index > 3){return false;}
							if(value['thumb'].length > 100){
								let beforeimg = value['thumb'].split(':')[21];
								value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								value['create_time'] = value['create_time'].split(' ')[0]
								that.newsData.push(value)
							}
						})
  
					}
				}]
			  })
		  },
		  getHonor(){
			  let that = this
			  request({
				url: '/index/honor?id=23',
				responseType: 'json',
				transformResponse:[function(data){
					let jsondata = JSON.parse(data)
					// console.log(jsondata);
					if(jsondata['code'] == 200){
						that.honorData = []
						let beforeData = jsondata['data']
						beforeData.forEach(function(value,index,arr){
							if(index > 3){return false;}
							if(value['thumb'].length > 100){
								let beforeimg = value['thumb'].split(':')[21];
								value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								value['create_time'] = value['create_time'].split(' ')[0]
								that.honorData.push(value)
							}
						})
	
					}
				}]
			  })
		  }
	  },
	  mounted() {
		setTimeout(function(){
			new Swiper(".banbox", {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				pagination: {
				  el: ".swiper-pagination",
				  clickable: true,
				},
				autoplay:{
					delay:5000,
					disableOnInteraction: false
				}
			  });
		},300)

		  this.getBanner()
		  this.getnoticle()
		  this.getlawyer(13)
		  this.getlawyer(14,4)
		  this.getAnli()
		  this.getshipin(48)
		  this.getshipin(51)
		  this.getshipin(55)
		  this.getNews()
		  this.getHonor()
		  
		
		

	  }
	}
</script>

<style lang="scss" scoped>
.banner{
    overflow: hidden;
    position: relative;
    .swiper-pagination-clickable .swiper-pagination-bullet{
        opacity: 1;
        background-color: #979191;
        box-shadow: 0 0 1px 1px #fff;
        margin: 0 5px;
    }
    .swiper-pagination-bullet-active{
        background: #cc131d !important;
    }
}


.lingyu{
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background-color: #fff;
        padding: .5rem 0 .3rem;
        margin-top: .3rem;
        border: 1px solid #eee;
        li{
            width: 40%;
            margin-bottom: .2rem;
            a{

            }
        }
    }
}
.banan{
    .bananwrap{
        background: #fff;
        padding-bottom: .3rem;
       
    }
    ul{
        padding: 0 .2rem .2rem;
        margin-top: .3rem;
        li{
            padding: .2rem 0;
            border-bottom: 1px solid #eee;
            a{
               display: flex; 
               img{
                width: 2rem;
                height: 1.5rem;
                margin-right: .2rem;
               }
               .bananinfo{

                strong{
                    display: block;
                    font-size: .28rem;
                    margin-bottom: .1rem;
                    margin-top: .35rem;
                }
                span{
                    font-size: .24rem;
                    color: #999;
                    display: block;
                    text-indent: .3rem;
                    background: url('../assets/images/img_58.png') no-repeat left .03rem / .23rem;
                }
               }
            }
        }
    }
}
.team{
    .teamwrap{
        background-color: #fff;
        padding: 0 .2rem;
        overflow: hidden;
        margin-top: .3rem;
        padding-bottom: .3rem;
        .teamtop{
            margin-top: .2rem;
            p{
                font-size: .26rem;
                line-height: .4rem;
                margin-top: .2rem;
            }
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            margin: .3rem 0 0;
            li{
                position: relative;
                width: 2.2rem;
                margin-bottom: .25rem;
                a{
                    img{
                        width: 2.2rem;
                        height: 2.71rem;
                    }
                    strong{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: .6rem;
                        line-height: .6rem;
                        text-align: center;
                        font-size: .26rem;
                        color: #fff;
                        background: #cc131d;
                        white-space: nowrap;
                        
                    }
                }
            }
            li:nth-child(3n+2){
                margin: 0 .25rem .25rem;
            }
        }
    }
}
.chaiqian{
    ul{
        li{
            a{
                div:first-child{
                    height: 1.5rem;
                    overflow: hidden;
                    box-shadow: 0 0 .02rem .02rem rgb(233, 231, 231);
                    margin-right: .2rem;
                    img{
                        height: auto !important;
                        margin-right: 0;
                    }
                }
                .bananinfo{
                    width: 5rem;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: center;
                    strong{
                        margin-top: 0;
                        margin-bottom: 0;
                    }
                    span{
                        display: block;
                        align-items: center;
                        height: .3rem;
                        vertical-align:middle;
                        margin-top: .2rem;
                    }
                }
               
            }
            
        }
    }
}
.yangshi{
    
    .yangshiwrap{
        background: #fff;
        padding-bottom: .3rem;
        ul{
            display: flex;
            flex-wrap: wrap;
            padding: 0 .2rem;
            justify-content: space-between;
            padding-top: .2rem;
            margin-top: .3rem;
            li{
                width: 3.4rem;
                margin-bottom: .2rem;
                div{
                    img{
                        width: 3.4rem;
                        height: 2.22rem;
                    }
                    p{
                        font-size: .26rem;
                        padding: 0 .1rem;
                        line-height: .36rem;
                        margin-top: .1rem;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        text-align: center;
                    }
                }
            }
        }
    }
}
.honor{
    ul{
        padding-bottom: .35rem !important;
		p{
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			text-align: center;
			margin-top: .05rem;
			font-size: .26rem;
			padding: 0 .1rem;
		}
    }
    img{
        border:2px solid #eee 
    }
}

</style>
