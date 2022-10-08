<template>
	<div class="head">
		<div class="header">
			<div class="headerwrap w12">
				<a href=""><img src="@/assets/images/nav_foot_logo.png" alt=""></a>
				<a href="javascript:void(0)">咨询电话：400-8787-666</a>
			</div>
		</div>
		<div class="banner">
			<div class="bannerwrap">
				<div class="bannerwrapbox">
				  <div v-for="item,index in bannerData" :key="item.id"><router-link :to="{}"><img :src="item.thumb" alt=""></router-link></div>

				</div>
				<ol class="pagination"></ol>
			</div>
		</div>
		<div class="nav">
			<div class="navwrap w12">
				<strong><router-link to='/'>冠领<br>首页</router-link></strong>
				<strong><a href="javascript:void(0)" @click="toinfo('listx','','冠领视频')" >冠领<br>视频</a></strong>
				<ul>
					<li><a href="javascript:void(0)" @click="toinfo('listx',1,'冠领在CCTV')" >冠领在CCTV</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('listx',2,'冠领在BRTV')" >冠领在BRTV</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('nolist',1,'冠领在开庭')" >冠领在开庭</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('nolist',2,'冠领在办案')" >冠领在办案</a></li>
				</ul>
				<strong><a href="javascript:void(0)" @click="toinfo('teamlist','','冠领团队')" >冠领<br>团队</a></strong>
				<ul>
					<li><a href="javascript:void(0)" @click="toinfo('teamlist',13,'主任律师')" >主任律师</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('teamlist',31,'专家顾问')" >专家顾问</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('teamlist',14,'冠领律师')" >冠领律师</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('teamlist',16,'律师助理')" >律师助理</a></li>
				</ul>
				<strong><a href="javascript:void(0)" @click="toinfo('anlilist','','冠领案例')" >冠领<br>案例</a></strong>
				<ul>
					<li><a href="javascript:void(0)" @click="toinfo('anlilist',5,'国家赔偿')" >国家赔偿</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('anlilist',6,'违法拆迁')" >违法拆迁</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('anlilist',7,'拆违决定')" >拆违决定</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('anlilist',8,'补偿决定')" >补偿决定</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('anlilist',9,'征收决定')" >征收决定</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('anlilist',10,'信息公开')" >信息公开</a></li>
				</ul>
				<strong><a href="javascript:void(0)" @click="toinfo('hlist','','冠领荣誉')" >冠领<br>荣誉</a></strong>
				<ul>
					<li><a href="javascript:void(0)" @click="toinfo('hlist',24,'锦旗荣誉')" >锦旗荣誉</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('hlist',25,'奖杯荣誉')" >奖杯荣誉</a></li>
				</ul>
				<strong><a href="javascript:void(0)" @click="toinfo('about',25,'关于冠领')" >关于<br>冠领</a></strong>
				<ul>
					<li><a href="javascript:void(0)" @click="toinfo('newslist',25,'冠领新闻')" >冠领新闻</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('fensuo',25,'冠领分所')" to="/fensuo/index.html">冠领分所</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('zhaopin',25,'冠领招聘')" to="/news/1676.html">冠领招聘</a></li>
					<li><a href="javascript:void(0)" @click="toinfo('lianxi',25,'联系冠领')" to="/news/1675.html">联系冠领</a></li>
				</ul>
			</div>
		</div>
		<!-- 搜索 -->
		<div class="search">
			<div class="searchwrap w12">
				<div class="searchleft">
					<strong>热门标签：</strong>
					<ul>
						<li><a href="javascript:void(0)" @click="search('bq','周旭亮')">周旭亮</a></li>
						<li><a href="javascript:void(0)" @click="search('bq','任战敏')">任战敏</a></li>
						<li><router-link to="/fensuo/index.html">冠领分所</router-link></li>
						<li><a href="javascript:void(0)" @click="search('bq','拆迁补偿')">拆迁补偿</a></li>
						<li><a href="javascript:void(0)" @click="search('bq','CCTV')">cctv</a></li>
						<li><a href="javascript:void(0)" @click="search('bq','法律讲堂')">法律讲堂</a></li>
					</ul>
				</div>
				<div class="searchright">
					<strong>站内搜索：</strong>
					<input type="text" placeholder="在这里搜索..." v-model="message">
					<button @click="search()">搜索</button>
				</div>
			</div>
		</div>
	</div>
	

</template>

<script>

	import $ from 'jquery'
	import Swiper from 'swiper'
	import "swiper/css/swiper.min.css"
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	export default{
		name:'Header',
		data(){
			return {
				bannerData:[],
				message:''
			}
		},
		methods:{
			search(bq='',name=''){
				let sum = Math.random()*10000+1
				
				if(bq == 'bq'){
					this.$router.push({ path:'/search/index.html',query:{'name':encodeURI(name),'id':sum}})
				}else{
					if(this.message == ''){
						alert('请输入您要搜索的关键词')
						return false;
					}
					this.$router.push({ path:'/search/index.html',query:{'name':encodeURI(this.message),'id':sum}})
				}
				
			},
			getBann(){
			  let that = this
			  request({
				url: '/index/banner?id=3',
				responseType: 'json',
				transformResponse:[function(data){
					let jsondata = JSON.parse(data)
					// console.log(jsondata);
					if(jsondata['code'] == 200){
						that.bannerData = []
						let beforeData = jsondata['data']
						beforeData.forEach(function(value,index,arr){
							if(value['thumb'].length > 100){
								let beforeimg = value['thumb'].split(':')[21];
								value['thumb'] = GLOBAL.httpurl+beforeimg.substr(1,beforeimg.length-4)
								that.bannerData.push(value)
							}
						})
					}
				}]
			  })
			},
			toinfo(id,catid,name=''){
				// localStorage.setItem('tvcatid',catid)
				document.title=name+'-北京冠领律师事务所'
				if(id == 'list'){
					this.$router.push({ path:'/tv/list/index.html'})
				}else if(id == 'listx'){
					if(name == '冠领视频'){
						this.$router.push({ path:'/tv/index.html'})
					}else{
						localStorage.setItem('tvcatid',catid)
						this.$router.push({ path:'/tv/list/index.html',query:{'id':catid}})
					}
					
				}else if(id == 'teamlist'){
					if(name == '冠领团队'){
						this.$router.push({ path:'/team/index.html'})
					}else{
						localStorage.setItem('teamcatid',catid)
						this.$router.push({ path:'/team/list/index.html',query:{'id':catid}})
					}
				}else if(id == 'anlilist'){
					if(name == '冠领案例'){
						this.$router.push({ path:'/anli/index.html'})
					}else{
						localStorage.setItem('anlicatid',catid)
						this.$router.push({ path:'/anli/list/index.html',query:{'id':catid}})
					}
				}else if(id == 'hlist'){

					if(name == '冠领荣誉'){
						this.$router.push({ path:'/honor/index.html'})
					}else{
						localStorage.setItem('honorcatid',catid)
						this.$router.push({ path:'/honor/list/index.html',query:{'id':catid}})
					}
				}else if(id == 'nolist'){
					localStorage.setItem('noticlecatid',catid)
					this.$router.push({ path:'/noticle/list/index.html',query:{'id':catid}})
				}else if(id == 'newslist'){
					this.$router.push({ path:'/news/index.html'})
				}else if(id == 'fensuo'){
					this.$router.push({ path:'/fensuo/index.html'})
				}else if(id == 'zhaopin'){
					this.$router.push({ path:'/news/1676.html'})
				}else if(id == 'lianxi'){
					this.$router.push({ path:'/news/1675.html'})
				}else if(id == 'about'){
					this.$router.push({ path:'/news/1677.html'})
				}else{
					this.$router.push({ path:'/tv/'+id+'.html'})
				}
			}
		},
		created() {
			this.getBann()
			// 对title进行再次验证
			
			setTimeout(function(){
				$(function(){
					//banner
					let itmediv = $('.banner .bannerwrapbox div'),
						pagination = $('.banner .pagination'),
						itemsize = itmediv.length,
						timeid = null,
						linode = '',
						index = 0,
						delay = 5000
					for(let i = 1;i<=itemsize;i++){
						linode += "<li>"+i+"</li>"
					}
					pagination.append(linode)
					let pli = $('.banner .pagination li')
					pli.eq(0).addClass('active')
					pli.mouseover(function(){
						clearInterval(timeid)
						let idx = $(this).index()
						index = idx
						pli.eq(index).addClass('active').siblings().removeClass('active')
						itmediv.eq(idx).stop().fadeIn().siblings().hide()
					}).mouseout(function(){
						timeid = setInterval(runban,delay)
					})
					timeid = setInterval(runban,delay)
					function runban(){
						index >= (itemsize-1) ? index = 0 : index++
						pli.eq(index).addClass('active').siblings().removeClass('active')
						itmediv.eq(index).stop().fadeIn().siblings().hide()
					}
					itmediv.mouseover(function(){
						clearInterval(timeid)
					}).mouseout(function(){
						timeid = setInterval(runban,delay)
					}) 
				})
			},300)
			// console.log(this.$route);
			if(this.$route.name == 'honor'){
				document.title='冠领荣誉-北京冠领律师事务所'
			}else if(this.$route.name == 'honorlist' && this.$route.query.id == 24){
				document.title='锦旗荣誉-北京冠领律师事务所'
			}else if(this.$route.name == 'honorlist' && this.$route.query.id == 25){
				document.title='奖杯荣誉-北京冠领律师事务所'
			}
			if(this.$route.name == 'anlilist' && this.$route.query.id == 5){
				document.title='国家赔偿-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 6){
				document.title='违法拆迁-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 7){
				document.title='拆违决定-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 8){
				document.title='补偿决定-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 9){
				document.title='征收决定-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 10){
				document.title='信息公开-北京冠领律师事务所'
			}else if(this.$route.name == 'noticlelist' && this.$route.query.id == 1){
				document.title='冠领在开庭-北京冠领律师事务所'
			}else if(this.$route.name == 'noticlelist' && this.$route.query.id == 2){
				document.title='冠领在办案-北京冠领律师事务所'
			}else if(this.$route.path == '/news/1677.html'){
				document.title='关于冠领-北京冠领律师事务所'
			}else if(this.$route.path == '/news/1676.html'){
				document.title='冠领招聘-北京冠领律师事务所'
			}else if(this.$route.path == '/news/1675.html'){
				document.title='联系冠领-北京冠领律师事务所'
			}else if(this.$route.path == '/fensuo/index.html'){
				document.title='冠领分所-北京冠领律师事务所'
			}else if(this.$route.path == '/news/index.html'){
				document.title='冠领新闻-北京冠领律师事务所'
			}
			if(this.$route.name == 'anli'){
				document.title='冠领案例-北京冠领律师事务所'
			}
			if(this.$route.name == 'home'){
				document.title='北京冠领律师事务所'
			}else if(this.$route.name == 'tv'){
				document.title='冠领视频-北京冠领律师事务所'
			}else if(this.$route.name == 'tvlist' && this.$route.query.id == 1){
				document.title='冠领在CCTV-北京冠领律师事务所'
			}else if(this.$route.name == 'tvlist' && this.$route.query.id == 2){
				document.title='冠领在BRTV-北京冠领律师事务所'
			}else if(this.$route.name == 'team'){
				document.title='冠领团队-北京冠领律师事务所'
			}else if(this.$route.name == 'teamlist' && this.$route.query.id == 13){
				document.title='主任律师-北京冠领律师事务所'
			}else if(this.$route.name == 'teamlist' && this.$route.query.id == 31){
				document.title='专家顾问-北京冠领律师事务所'
			}else if(this.$route.name == 'teamlist' && this.$route.query.id == 14){
				document.title='冠领律师-北京冠领律师事务所'
			}else if(this.$route.name == 'teamlist' && this.$route.query.id == 16){
				document.title='律师助理-北京冠领律师事务所'
			}
			
		},
		watch:{
		  $route(to, from){
			console.log(this.$route);
			if(this.$route.name == 'anli'){
				document.title='冠领案例-北京冠领律师事务所'
			}
			if(this.$route.name == 'home'){
				document.title='北京冠领律师事务所'
			}else if(this.$route.name == 'tv'){
				document.title='冠领视频-北京冠领律师事务所'
			}else if(this.$route.name == 'tvlist' && this.$route.query.id == 1){
				document.title='冠领在CCTV-北京冠领律师事务所'
			}else if(this.$route.name == 'tvlist' && this.$route.query.id == 2){
				document.title='冠领在BRTV-北京冠领律师事务所'
			}else if(this.$route.name == 'team'){
				document.title='冠领团队-北京冠领律师事务所'
			}else if(this.$route.name == 'teamlist' && this.$route.query.id == 13){
				document.title='主任律师-北京冠领律师事务所'
			}else if(this.$route.name == 'teamlist' && this.$route.query.id == 31){
				document.title='专家顾问-北京冠领律师事务所'
			}else if(this.$route.name == 'teamlist' && this.$route.query.id == 14){
				document.title='冠领律师-北京冠领律师事务所'
			}else if(this.$route.name == 'teamlist' && this.$route.query.id == 16){
				document.title='律师助理-北京冠领律师事务所'
			}
			if(this.$route.name == 'honor'){
				document.title='冠领荣誉-北京冠领律师事务所'
			}else if(this.$route.name == 'honorlist' && this.$route.query.id == 24){
				document.title='锦旗荣誉-北京冠领律师事务所'
			}else if(this.$route.name == 'honorlist' && this.$route.query.id == 25){
				document.title='奖杯荣誉-北京冠领律师事务所'
			}
			if(this.$route.name == 'anlilist' && this.$route.query.id == 5){
				document.title='国家赔偿-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 6){
				document.title='违法拆迁-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 7){
				document.title='拆违决定-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 8){
				document.title='补偿决定-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 9){
				document.title='征收决定-北京冠领律师事务所'
			}else if(this.$route.name == 'anlilist' && this.$route.query.id == 10){
				document.title='信息公开-北京冠领律师事务所'
			}else if(this.$route.name == 'noticlelist' && this.$route.query.id == 1){
				document.title='冠领在开庭-北京冠领律师事务所'
			}else if(this.$route.name == 'noticlelist' && this.$route.query.id == 2){
				document.title='冠领在办案-北京冠领律师事务所'
			}else if(this.$route.path == '/news/1677.html'){
				document.title='关于冠领-北京冠领律师事务所'
			}else if(this.$route.path == '/news/1676.html'){
				document.title='冠领招聘-北京冠领律师事务所'
			}else if(this.$route.path == '/news/1675.html'){
				document.title='联系冠领-北京冠领律师事务所'
			}else if(this.$route.path == '/fensuo/index.html'){
				document.title='冠领分所-北京冠领律师事务所'
			}else if(this.$route.path == '/news/index.html'){
				document.title='冠领新闻-北京冠领律师事务所'
			}
		  }
		}
	}
</script>

<style>
.container .header {
  background-color: #fff;
}

.container .header .headerwrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
}

.container .header .headerwrap a:first-child {
  width: 162px;
}

.container .header .headerwrap a:last-child {
  font-size: 18px;
  color: #e25956;
  font-weight: bold;
}

.container .banner {
  min-width: 1200px;
  overflow: hidden;
  position: relative;
}

.container .banner .bannerwrap {
  position: relative;
}

.container .banner .bannerwrap .bannerwrapbox {
  position: relative;
}

.container .banner .bannerwrap .bannerwrapbox div {
  display: none;
}

.container .banner .bannerwrap .bannerwrapbox div:first-child {
  display: block;
}

.container .banner .bannerwrap .pagination {
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  justify-content: center;
}

.container .banner .bannerwrap .pagination li {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #fff;
  margin: 0 5px;
  cursor: pointer;
  transition: all .1s linear;
}

.container .banner .bannerwrap .pagination li:Hover {
  background: #ca2f2a;
  color: #fff;
}

.container .nav .navwrap {
  margin-top: 10px;
  height: 80px;
  background: linear-gradient(to bottom, #e25956 5%, #c21a20 45%, #e25956 100%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 10px;
  padding-right: 12px;
}

.container .nav .navwrap a {
  color: #fff;
}

.container .nav .navwrap strong {
  width: 66px;
  font-weight: normal;
  border-right: 2px solid #ab1f23;
  text-align: center;
}

.container .nav .navwrap strong a {
  font-size: 22px;
}

.container .nav .navwrap strong a:hover {
  color: #fff !important;
}

.container .nav .navwrap ul {
  display: flex;
  flex-wrap: wrap;
  width: 192px;
  margin-left: 10px;
}

.container .nav .navwrap ul li {
  padding: 3px 0;
  position: relative;
}

.container .nav .navwrap ul li a {
  font-size: 14px;
  color: #fff;
  opacity: .8;
}

.container .nav .navwrap ul li a:hover {
  color: #fff !important;
}

.container .nav .navwrap ul li:nth-child(odd) {
  margin-right: 20px;
}

.container .nav .navwrap ul li:nth-child(odd)::after {
  content: "";
  height: 15px;
  width: 2px;
  background: #fff;
  position: absolute;
  right: -11px;
  bottom: 4px;
  opacity: .8;
}

.container .nav .navwrap ul:nth-of-type(2) {
  width: 144px;
}

.container .nav .navwrap ul:nth-of-type(4) {
  width: 61px;
}

.container .nav .navwrap ul:nth-of-type(4) li {
  margin-right: 0;
}

.container .nav .navwrap ul:nth-of-type(4) li::after {
  background-color: transparent;
}

.container .nav .navwrap ul:nth-of-type(3) {
  width: 228px;
}

.container .nav .navwrap ul:nth-of-type(3) li {
  margin-right: 20px;
}

.container .nav .navwrap ul:nth-of-type(3) li::after {
  content: "";
  height: 15px;
  width: 2px;
  background: #fff;
  position: absolute;
  right: -11px;
  bottom: 4px;
  opacity: .8;
}

.container .nav .navwrap ul:nth-of-type(3) li:nth-child(3),
.container .nav .navwrap ul:nth-of-type(3) li:last-child {
  margin-right: 0 !important;
}

.container .nav .navwrap ul:nth-of-type(3) li:nth-child(3)::after,
.container .nav .navwrap ul:nth-of-type(3) li:last-child::after {
  background: transparent;
}

.container .nav .navwrap ul:nth-of-type(5) {
  width: 146px;
}

.container .nav .navwrap ul:nth-of-type(5) li {
  margin-right: 20px;
}

.container .nav .navwrap ul:nth-of-type(5) li:nth-child(2),
.container .nav .navwrap ul:nth-of-type(5) li:last-child {
  margin-right: 0 !important;
}

.container .nav .navwrap ul:nth-of-type(5) li:nth-child(2)::after,
.container .nav .navwrap ul:nth-of-type(5) li:last-child::after {
  background: transparent;
}

.container .search .searchwrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #eeeeed;
  border: 1px solid #e8e6e6;
}

.container .search .searchwrap .searchleft {
  height: 48px;
  display: flex;
  align-items: center;
}

.container .search .searchwrap .searchleft strong {
  color: #ee782d;
  font-size: 14px;
  font-weight: normal;
}

.container .search .searchwrap .searchleft ul {
  display: flex;
  align-items: center;
}

.container .search .searchwrap .searchleft ul li a {
  color: #232323;
  margin: 0 10px;
  font-size: 14px;
}

.container .search .searchwrap .searchright {
  display: flex;
  align-items: center;
}

.container .search .searchwrap .searchright strong {
  color: #c01921;
  margin: 0 10px;
  font-weight: normal;
  font-size: 14px;
}

.container .search .searchwrap .searchright input {
  width: 210px;
  height: 28px;
  border: 1px solid #b8c2db;
  padding: 0 10px;
  color: #333;
  background-color: #fff;
}

.container .search .searchwrap .searchright ::placeholder {
  color: #333;
}

.container .search .searchwrap .searchright button {
  background: #e9b63a;
  width: 65px;
  height: 30px;
  border: transparent;
  color: #fff;
  cursor: pointer;
  position: relative;
}

.container .search .searchwrap .searchright button::after {
  content: "";
  height: 26px;
  width: 60px;
  background-color: transparent;
  border: 1px solid #f5dca6;
  position: absolute;
  left: 2px;
  top: 2px;
  box-sizing: border-box;
}

</style>