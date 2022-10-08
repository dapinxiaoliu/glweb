<template>
	<div class="tvlist">
		<div class="titleinfo">
			<h3><a href="/">首页</a><em>></em><router-link :to="{path:'/tv/index.html'}">电视普法</router-link><em>></em><a href="javascript:void(0)" class="changetitle">法治进行时</a><em>></em></h3>
			<h2 class="linebox">
				<strong>冠领电视普法</strong>
				<em></em>
				<p>律师央视普法&nbsp;&nbsp;&nbsp;&nbsp;美名走进万家</p>
			</h2>
		</div>
		<div class="teamwrap">
			<div class="teambtn pfbtn">
				<span class="active">法治进行时</span>
				<span>第三调解室</span>
				<span>律师门诊室</span>
				<span>庭审纪实</span>
				<span>生活广角</span>
				<span>谁在说</span>
				<span>冠领说法</span>
				<span>其他</span>
			</div>
			<div class="teambox">
				
				<div class="teamitem" v-for="item,index in cctvdatas" :key="item.id">
					<router-link :to="{path:'/tv/cctv/'+item.id+'.html'}">
						<div class="teamimg"><img :src="item.thumb" alt=""></div>
						<div class="teaminfo">
							<strong>{{item.title}}</strong>
						</div>
					</router-link>
				</div>

			</div>
			<div class="page">
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
		<div class="honorteam">
			<h3>荣誉律师</h3>
			<ul>
				<li><a href=""><img src="@/assets/images/zhou.jpg" alt=""></a></li>
				<li><a href=""><img src="@/assets/images/zhou.jpg" alt=""></a></li>
				<li><a href=""><img src="@/assets/images/zhou.jpg" alt=""></a></li>
				<li><a href=""><img src="@/assets/images/zhou.jpg" alt=""></a></li>
			</ul>
			<a href="" class="morelink">了解更多</a>
		</div>
		<div class="hottag">
			<h3>热门标签</h3>
			<ul>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
				<li><a href="">昌邑征地公告</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	export default{
		name:'Tvbrtv',
		data(){
			return {
				cctvdatas:[],
				pagerCount:7,
				totalPage:0,
				currentpage:1,
				id:55,
				zhixing:0
			}
		},
		methods:{
			getCCTVData(){
				let that = this
				request({
					url: '/video/read?id='+that.id+'&page=1&page_size=10',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						console.log(jsondata);
						if(jsondata['code'] == 200){
							that.cctvdatas = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									that.cctvdatas.push(value)
								}
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
					url: '/video/read?id='+that.id+'&page='+val+'&page_size=10',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						console.log(jsondata);
						if(jsondata['code'] == 200){
							that.cctvdatas = []
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								if(value['thumb'].length > 100){
									let beforeimg = value['thumb'].split(':')[21];
									value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
									that.cctvdatas.push(value)
								}
								
							})
							that.totalPage = beforeData['last_page']
							that.currentpage = parseInt(beforeData['current_page'])
						}
					}]
				})
			}
		},
		mounted() {
			let that = this
			let patname = this.$route.name
			if(patname == 'cctv'){
				$('.nav li').eq(4).addClass('router-link-active')
			}

			that.getCCTVData()
			$(function(){
			    let teambtn = $('.teambtn span'),
			        teambox = $('.teambox'),
			        changetitle = $('.changetitle')
			    teambtn.click(function(){
			        let index = $(this).index()
					switch(index){
						case 0:
						that.id = 55
						break;
						case 1:
						that.id = 57
						break;
						case 2:
						that.id = 58
						break;
						case 3:
						that.id = 56
						break;
						case 4:
						that.id = 60
						break;
						case 4:
						that.id = 59
						break;
						case 4:
						that.id = 59
						break;
					}
					that.getCCTVData()
			        changetitle.text($(this).text())
					localStorage.setItem('brtvname',$(this).text())
			        teambtn.eq(index).addClass('active').siblings().removeClass('active')
			        teambox.hide().fadeIn()
			    })  
			}) 
		},
		watch:{
			cctvdatas(){
				let brtvname = localStorage.getItem('brtvname') == null?'k':localStorage.getItem('brtvname')
				if(brtvname != 'k'){
				
					if(this.zhixing == 0){
						this.zhixing = 1
						// let honorname = localStorage.getItem('honorname'),
						// alert('b')
						
						let teambtn = $('.teambtn span'),
							teambox = $('.teambox'),
							changetitle = $('.changetitle')
							changetitle.text(brtvname)
							teambtn.removeClass()
						if(brtvname == '法治进行时'){
							teambtn.eq(0).addClass('active')
							this.id = 55
						}else if(brtvname == '第三调解室'){
							teambtn.eq(1).addClass('active')
							this.id = 57
						}else if(brtvname == '律师门诊室'){
							teambtn.eq(2).addClass('active')
							this.id = 58
						}else if(brtvname == '庭审纪实'){
							teambtn.eq(3).addClass('active')
							this.id = 56
						}else if(brtvname == '生活广角'){
							teambtn.eq(4).addClass('active')
							this.id = 60
						}else if(brtvname == '谁在说'){
							teambtn.eq(5).addClass('active')
							this.id = 59
						}
						
						this.getCCTVData()
					}
				
				}
			}
			
		}
	}
</script>

<style lang="scss" scoped>
.teamwrap{
    background: #fff;
    padding: 0 .2rem;
    overflow: hidden;
    margin-top: .15rem;
    .teambtn{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: .3rem;
        span{
            font-size: .26rem;
            padding: .1rem .2rem;
            white-space: nowrap;
            border: 1px solid #eeeeee;
            margin-bottom: .2rem;
            color: #9b9494;
            transition: all .2s linear;
            width: 1.2rem;
            text-align: center;
        }
        span.active{
            background-color: #c21a20;
            color: #fff;
        }
    }
    .teambox{
        overflow: hidden;
        // border-top: 1px solid #eee;
        // border-bottom: 1px solid #eee;
        // padding-top: .4rem;
        margin-top: .15rem;
        display: flex;
        flex-wrap: wrap;
        .teamitem:nth-child(odd){
            margin-right: .3rem;
        }
        .teamitem{
            margin-bottom: .4rem;
            width: 3.4rem;
            a{
                display: flex;
                flex-wrap: wrap;
                .teamimg{
                    width: 3.4rem;
                    // height: 1.6rem;
                    box-shadow: 0 0 2px #ccc;
                    overflow: hidden;
                    img{
						width: 3.4rem;
						height: 2.2rem;
                        // width: 2.2rem;
                    }
                }
                .teaminfo{
                    width: 100%;
                    strong{
                        display: block;
                        font-size: .28rem;
                        margin-bottom: .05rem;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        text-align: center;
                        font-size: .26rem;
                        margin-top: .1rem;
                    }


                }
            }
        }

    }
}
.honorteam{
    padding: .6rem .3rem .3rem;
    background: #fff;
    h3{
        font-size: .35rem;
        color: #c21a20;
        border-bottom: 1px solid #eee;
        margin-bottom: .2rem;
        padding-bottom: .1rem;
    }
    ul{
        display: flex;
        justify-content: space-between;
        margin-bottom: .3rem;
        li{
            width: 1.5rem;
            height: 2.14rem;
            img{
                width: 1.5rem;
                height: 2.14rem;
            }
        }
    }
}
.hottag{
    padding: .2rem .3rem .3rem;
    background: #fff;
    border-top: 1px solid #eee;
    h3{
        font-size: .35rem;
        color: #c21a20;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            margin-top: .15rem;
            a{
                font-size: .26rem;
            }
        }
    }
}

</style>