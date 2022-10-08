<template>
	<div class="footer">
		<div class="myform">
		    <h2>立即咨询</h2>
		    <div class="myformwrap">
		        <p>
		            <label for="">*您的姓名</label>
		            <input type="text" v-model="nickname">
		        </p>
		        <p>
		            <label for="">*您的电话</label>
		            <input type="text" v-model="phone">
		        </p>
		        <p>
		            <label for="">*案件简述（最多500字）</label>
		            <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
		        </p>
		    </div>
		    
		    <button @click="sendData()">提交</button>
		</div>
		<div class="lianxi banan">
		    <h2 class="linebox">
		        <strong>联系我们</strong>
		        <em></em>
		        <p>拆迁问题&nbsp;&nbsp;&nbsp;&nbsp;免费咨询</p>
		    </h2>
		    <div class="lianxiwrap">
		        <div class="lianxiinfo">
		            <p><a href="tel:4008787666">400 8787 666</a></p>
		            <p>100052</p>
		            <p>69576000@qq.com</p>
		            <p><span>北京市西城区宣武门外大街庄胜广场中央办公楼5层、6层、15层、13层1309-1312</span></p>
		            <em><img src="@/assets/images/logo.png" alt=""></em>
		        </div>
		        <div class="map" id="bdmap"></div>
		        <div class="zixundianhua">法律咨询电话： <em><a href="tel:4008787666">400-8787-666</a></em></div>
		    </div>
		</div>
		<div class="footer">
		    <h3><em><img src="@/assets/images/img_119.png" alt=""></em></h3>
		    <div class="fontline">
		        <a>联系我们</a>
		        <a>投诉平台</a>
		        <a>友情链接</a>
		    </div>
		    <ul>
		        <li><img src="@/assets/images/weixin.jpg" alt=""><strong>微信</strong></li>
		        <li><img src="@/assets/images/img_123.jpg" alt=""><strong>微博</strong></li>
		    </ul>
		    <p>冠领官方微信：北京冠领律师事务所</p>
		</div>
		
		<div class="fixedfoot">
		    <div class="fixedfootwrap">
		        <a href="tel:400-8787-666">
		            <p>拨打咨询电话</p>
		            <p>400-8787-666</p>
		        </a>
		        <a href="https://qfdk61.kuaishang.cn/bs/im.htm?cas=3765___335221&fi=4396">
		            <p>在线咨询</p>
		        </a>
		    </div>
		</div>
		<div class="showmsg">
			<p>{{showmsg}}</p>
		</div>
	</div>
	
</template>

<script>
	import $ from "jquery"
	import { BMPGL } from '../map/map.js'
	import axios from "axios"
	export default{
		name:'FooterView',
		data(){
			return{
				nickname:'',
				phone:'',
				message:'',
				showmsg:'未知信息',
				ak:'w1ZAZ1thAXkNOCNO5K0WCBo6dXkfMAbC'
			}
		},
		methods:{
		  sendData(){
			  let that = this
			  // console.log(this.nickname+'|'+this.phone+'|'+this.message);
			  if(that.nickname == ''){
				  that.showmsg = '请填写您的姓名'
				  $('.showmsg').fadeIn()
				  setTimeout(()=>{
						$('.showmsg').fadeOut()
				  },1000)
				  return false
			  }
			  if(that.phone == ''){
				  that.showmsg = '请填写您的电话'
				  $('.showmsg').fadeIn()
				  setTimeout(()=>{
						$('.showmsg').fadeOut()
				  },1000)
				  return false
			  }
			 var myreg=/^[1][3,4,5,7,8,9,6][0-9]{9}$/;
			 if (!myreg.test(that.phone)){
				  that.showmsg = '电话格式错误'
				  $('.showmsg').fadeIn()
				  setTimeout(()=>{
						$('.showmsg').fadeOut()
				  },1000)
				  return false
			  } 
			  if(that.message == ''){
				  that.showmsg = '请描述您的案件'
				  $('.showmsg').fadeIn()
				  setTimeout(()=>{
						$('.showmsg').fadeOut()
				  },1000)
				  return false
			  }
			  let data = {'nickname':that.nickname,'phone':that.phone,'message':that.message}
			  axios.post('http://api.guanlingls.com/index.php/api/User/save',data)
			  .then( res => {
				  if(res['data']['code'] == 200){
					  // console.log(res);
					  that.showmsg = "提交成功，请耐心等待~"
					  $('.showmsg').fadeIn()
				  }else{
					   that.showmsg = '提交失败，请重新尝试~'
				  }
				  setTimeout(()=>{
					  $('.showmsg').fadeOut()
				  },1500)
				  
				  
			  })
		  },
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
		  }
		},
		mounted() {
			this.initMap()
			
		}
	}
</script>

<style>
	.showmsg{
		position: fixed;
		width: 4rem;
		height: 2rem;
		background-color: #cc131d;
		top: 35%;
		left: 45%;
		margin-left: -2rem;
		z-index: 99999;
		border-radius: .2rem;
		display: none;
		padding: 0 .5rem;
	}
	.showmsg p{
		font-size: .36rem;
		text-align: center;
		color: #fff;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.myform {
	  background-color: #fff;
	  padding: 0 .2rem .2rem;
	  border-top: 1px solid #e4e3e3;

	}
	
	.myform h2 {
	  text-align: center;
	  color: #cc131d;
	  font-size: .45rem;
	  padding: .2rem 0 .3rem;
	}
	
	.myform p {
	  position: relative;
	  width: 100%;
	  border: 1px solid #cc131d;
	  height: .8rem;
	  border-radius: .15rem;
	  margin-bottom: .2rem;
	  display: flex;
	  align-items: center;
	  overflow: hidden;
	}
	
	.myform p label {
	  width: 2.5rem;
	  font-size: .26rem;
	  padding-left: .2rem;
	}
	
	.myform p input {
	  height: .8rem;
	  width: 100%;
	  border: none;
	  margin-left: .05rem;
	  font-size: .26rem;
	  background: transparent;
	}
	
	.myform p:nth-of-type(3) {
	  border: none;
	  height: auto;
	  height: 2rem;
	  overflow: hidden;
	  border-radius: .15rem;
	  border: 1px solid #cc131d;
	  box-sizing: border-box;
	}
	
	.myform p:nth-of-type(3) label {
	  position: absolute;
	  width: 100%;
	  top: .1rem;
	  background: #fff;
	  padding-bottom: .138rem;
	}
	
	.myform p:nth-of-type(3) textarea {
	  width: 100%;
	  border: none;
	  border-radius: .1rem;
	  overflow: hidden;
	  outline: none;
	  height: 1.1rem;
	  padding: .4rem .3rem .05rem;
	  resize: none;
	}
	
	.myform button {
	  background: #c9b19e;
	  width: 100%;
	  height: .8rem;
	  border: none;
	  outline: none;
	  margin: .2rem 0;
	  font-size: .32rem;
	  color: #fff;
	  border-radius: .5rem;
	}
	
	.lianxi .lianxiwrap {
	  background: #fff;
	  padding: 0 .2rem;
	  overflow: hidden;
	  margin-top: .3rem;
	}
	
	.lianxi .lianxiwrap .lianxiinfo {
	  width: 100%;
	  height: 3.5rem;
	  border: 1px solid #cc131d;
	  margin-top: .5rem;
	  position: relative;
	  z-index: 9;
	}
	
	.lianxi .lianxiwrap .lianxiinfo em {
	  width: 2.5rem;
	  position: absolute;
	  top: -.35rem;
	  left: 50%;
	  margin-left: -1.25rem;
	  background: #fff;
	  z-index: 10;
	}
	
	.lianxi .lianxiwrap .lianxiinfo p {
	  font-size: .26rem;
	  line-height: .36rem;
	  margin: .2rem 0;
	  padding: 0 .3rem;
	  background-repeat: no-repeat;
	  background-position: .3rem center;
	  background-size: .3rem;
	  text-indent: .5rem;
	}
	
	.lianxi .lianxiwrap .lianxiinfo p:nth-of-type(1) {
	  margin-top: .6rem;
	  background-image: url("../assets/images/img_105.png");
	}
	
	.lianxi .lianxiwrap .lianxiinfo p:nth-of-type(2) {
	  background-image: url("../assets/images/img_108.png");
	}
	
	.lianxi .lianxiwrap .lianxiinfo p:nth-of-type(3) {
	  background-image: url("../assets/images/img_112.png");
	}
	
	.lianxi .lianxiwrap .lianxiinfo p:nth-of-type(4) {
	  background-image: url("../assets/images/img_115.png");
	  text-indent: 0;
	}
	
	.lianxi .lianxiwrap .lianxiinfo p:nth-of-type(4) span {
	  display: block;
	  margin-left: .5rem;
	}
	
	.lianxi .lianxiwrap .map {
	  height: 5rem;
	  width: 100%;
	}
	
	.lianxi .lianxiwrap .zixundianhua {
	  text-align: center;
	  padding: .2rem 0;
	  font-size: .26rem;
	}
	
	.lianxi .lianxiwrap .zixundianhua em {
	  color: #f8b300;
	}
	
	.footer {
	  background: #fff;
	}
	
	.footer > p {
	  font-size: .26rem;
	  text-align: center;
	  padding: .2rem 0;
	}
	
	.footer h3 {
	  position: relative;
	  margin: 0 .3rem .3rem;
	}
	
	.footer h3 em {
	  width: .5rem;
	  display: block;
	  position: relative;
	  z-index: 9;
	  background-color: #fff;
	  margin: 0 auto;
	}
	
	.footer h3::after {
	  content: "";
	  position: absolute;
	  width: 100%;
	  height: 1px;
	  background: #ccc;
	  top: 50%;
	  z-index: 1;
	}
	
	.footer .fontline {
	  display: flex;
	  font-size: .26rem;
	  justify-content: center;
	}
	
	.footer .fontline a {
	  padding: 0 .25rem;
	  border-right: 1px solid #ccc;
	  line-height: 100%;
	}
	
	.footer .fontline a:nth-child(3) {
	  border: none;
	}
	
	.footer ul {
	  display: flex;
	  justify-content: center;
	  margin-top: .3rem;
	}
	
	.footer ul li {
	  margin: 0 .2rem;
	}
	
	.footer ul li img {
	  width: 1.2rem;
	}
	
	.footer ul li strong {
	  display: block;
	  text-align: center;
	  font-size: .26rem;
	  margin-top: .1rem;
	  line-height: 100%;
	}
	
	.fixedfoot {
	  position: fixed;
	  bottom: 0;
	  z-index: 999;
	  left: 0;
	  right: 0;
	  width: 100%;
	}
	
	.fixedfoot .fixedfootwrap {
	  display: flex;
	  background: linear-gradient(to bottom, #f5495c, #b6192a);
	  width: 7.5rem;
	  margin: 0 auto;
	}
	
	.fixedfoot .fixedfootwrap a {
	  height: 1rem;
	  flex: 1;
	  background-repeat: no-repeat;
	  background-size: .6rem;
	  background-position: .6rem center;
	  display: flex;
	  flex-wrap: wrap;
	  flex-direction: column;
	  justify-content: center;
	}
	
	.fixedfoot .fixedfootwrap a p {
	  font-size: .26rem;
	  color: #fff;
	  width: 100%;
	  line-height: 100%;
	  margin-left: 1.5rem;
	}
	
	.fixedfoot .fixedfootwrap a:first-child {
	  border-right: 1px solid #fff;
	  background-image: url("../assets/images/tels.png");
	}
	
	.fixedfoot .fixedfootwrap a:first-child p {
	  margin-left: 1.5rem;
	}
	
	.fixedfoot .fixedfootwrap a:first-child p:last-child {
	  margin-top: .05rem;
	}
	
	.fixedfoot .fixedfootwrap a:last-child {
	  background-image: url("../assets/images/xinxi.png");
	}
</style>