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
				<!-- <div class="bannerwrapbox">
				 <div v-for="item,index in bannerData" :key="item.id"><router-link :to="{}"><img :src="item.thumb" alt=""></router-link></div>
				</div>
				<ol class="pagination"></ol> -->
				<div class="swiper mySwiper swiper-no-swiping">
				  <div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item,index in bannerData">
						<router-link :to="{}"><img :src="item.thumb" alt=""></router-link>
					</div>
				  </div>
				  <div class="swiper-pagination"></div>
				</div>
			</div>
		</div>
		<div class="nav">
			<div class="navwrap w12">
				<strong><a href="javascript:void(0)" @click="toinfo('home','',title)" >冠领<br>首页</a></strong>
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
						<li><a href="javascript:void(0)" @click="search('周旭亮')">周旭亮</a></li>
						<li><a href="javascript:void(0)" @click="search('任战敏')">任战敏</a></li>
						<li><router-link to="/fensuo/index.html">冠领分所</router-link></li>
						<li><a href="javascript:void(0)" @click="search('拆迁补偿')">拆迁补偿</a></li>
						<li><a href="javascript:void(0)" @click="search('CCTV')">cctv</a></li>
						<li><a href="javascript:void(0)" @click="search('法律讲堂')">法律讲堂</a></li>
					</ul>
				</div>
				<div class="searchright">
					<strong>站内搜索：</strong>
					<el-form :label-position="labelPosition" :model="formLabelAlign" @submit.native.prevent>
					  <el-form-item label="" >
					    <el-input v-model.trim="formLabelAlign.name" @keyup.enter.native ="onSubmit" placeholder="在这里搜搜..."></el-input>
					  </el-form-item>
					  <el-button type="primary" @click="onSubmit" >搜索</el-button>
					</el-form>
					<!-- <input type="text" placeholder="在这里搜索..." v-model="message"> -->
					<!-- <button @click="search()">搜索</button> -->
					 
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
	import {mapGetters,mapMutations,mapState} from 'vuex'
	export default{
		name:'Header',
		emits:['searchfn'],
		data(){
			return {
				bannerData:[],
				message:'',
				labelPosition: 'right',
				formLabelAlign: {
				  name: ''
				},
				searchname:'',
				plain: false,
				title:'北京冠领律师事务所拆迁官网',
				urlTitle:[
					{name:'北京冠领律师事务所拆迁官网',url:'/'},
					{name:'冠领视频',url:'/tv/index.html'},
					{name:'冠领在CCTV',url:'/tv/list/index.html?id=1'},
					{name:'冠领在BRTV',url:'/tv/list/index.html?id=2'},
					{name:'冠领在开庭',url:'/noticle/list/index.html?id=1'},
					{name:'冠领在办案',url:'/noticle/list/index.html?id=2'},
					{name:'冠领团队', url:'/team/index.html'},
					{name:'主任律师', url:'/team/list/index.html?id=13'},
					{name:'专家顾问', url:'/team/list/index.html?id=31'},
					{name:'冠领律师', url:'/team/list/index.html?id=14'},
					{name:'律师助理', url:'/team/list/index.html?id=16'},
					{name:'冠领案例', url:'/anli/index.html'},
					{name:'国家赔偿', url:'/anli/list/index.html?id=5'},
					{name:'违法拆迁', url:'/anli/list/index.html?id=6'},
					{name:'拆迁决定', url:'/anli/list/index.html?id=7'},
					{name:'补偿决定', url:'/anli/list/index.html?id=8'},
					{name:'征收决定', url:'/anli/list/index.html?id=9'},
					{name:'信息公开', url:'/anli/list/index.html?id=10'},
					{name:'冠领荣誉', url:'/honor/index.html'},
					{name:'锦旗荣誉', url:'/honor/list/index.html?id=24'},
					{name:'奖杯荣誉', url:'/honor/list/index.html?id=25'},
					{name:'关于冠领', url:'/news/1677.html'},
					{name:'冠领新闻', url:'/news/index.html'},
					{name:'行业新闻', url:'/news/hy/index.html'},
					{name:'冠领新闻', url:'/news/gl/index.html'},
					{name:'冠领分所', url:'/fensuo/index.html'},
					{name:'冠领招聘', url:'/news/1676.html'},
					{name:'联系冠领', url:'/news/1675.html'}
				]
				// formRules:{
				// 	name:[
				// 		{required: true,message:'请输入想要搜索的内容',trigger: 'blur'}
				// 	]
				// }
			}
		},
		methods:{
			onSubmit(){
				if(this.formLabelAlign.name == '') return this.$message.error('请输入搜索关键词')
				// document.title = this.formLabelAlign.name
				this.searchname = this.formLabelAlign.name
				this.$emit('searchfn',{msg:this.searchname})	
			},
			search(name){
				if(name == '') return this.$message.error('请输入搜索关键词')
				this.searchname = name
				this.$emit('searchfn',{msg:name})
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
				}else if(id == 'home'){
					this.$router.push('/')
				}else{
					this.$router.push({ path:'/tv/'+id+'.html'})
				}
			}
		},
		created() {
			this.getBann()
			// 对title进行再次验证
			this.$nextTick(()=>{
				var swiper = new Swiper(".mySwiper", {
					pagination: {
					  el: ".swiper-pagination",
					  clickable: true,
					  loop:true,
					  autoplay:{
						  delay:5000,
						  disableOnInteraction: false
					  },
					  renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + "</span>";
					  },
					},
				});
			})
			
			this.$nextTick(()=>{
				let local = window.location
				let name = local.pathname+local.search
				if(name == '/'){
					document.title = this.title
				}else if(name.indexOf('search') != -1){//搜索
					//获取关键词
					let sname = decodeURI(this.$route.query.name)
					document.title = sname +'-'+ this.title
				}else{
					let findUrl = this.urlTitle.filter( val => val.url == name)
					document.title = findUrl[0].name+'-'+this.title
				}
			})
		},
		watch:{
		  $route(to, from){
			this.$nextTick(()=>{
				let local = window.location
				let name = local.pathname+local.search
				
				if(name == '/'){
					document.title = this.title
				}else if(name.indexOf('search') != -1){
					document.title = this.searchname +'-'+ this.title
				}else{
					let findUrl = this.urlTitle.filter( val => val.url == name)
					document.title = findUrl[0].name+'-'+this.title
				}
			})
		  }
		}
	}
</script>

<style>
/*  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  } */
  
/*  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  } */
  
/*  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
.el-form{
	display: flex;
	align-items: center;
}
.el-button{
	border-radius: 0 !important;
	line-height: 30px !important;
	padding: 0 !important;
}
.el-form-item{
	margin-bottom: 0 !important;
}
.container .search .searchwrap .searchright input{
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	height: 30px !important;
}
.swiper-pagination-bullet{
	width: 20px;
	height: 20px;
	font-size: 16px;
	border-radius: 0;
	background: #fff;
	box-shadow: 0 0 5px 1px #e1e1e1;
}
.swiper-pagination-bullet-active{
	background-color: #c01921;
	color: #fff;
}

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
  overflow: hidden;
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