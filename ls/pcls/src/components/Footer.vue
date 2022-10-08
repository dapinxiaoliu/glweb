<template>
<div class="footer">
    <div class="footerwrap w12">
        <div class="footerline">
            <div class="footerlineleft">
                <strong>友情链接：</strong>
                <ul>
                    <li><a href="">链接1</a></li>
                    <li><a href="">链接1</a></li>
                    <li><a href="">链接1</a></li>
                    <li><a href="">链接1</a></li>
                    <li><a href="">链接1</a></li>
                </ul>
            </div>
            <div class="footerlineright">分所招募</div>
        </div>
        <div class="footerbox">
            <div class="footerboxleft">
                <strong>北京冠领律师事务所</strong>
                <p>官方咨询热线：400-8787-666</p>
                <p>办案监督电话：010-51077632&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮编：100052&nbsp;&nbsp;&nbsp;邮箱：69576000@qq.com</p>
                <p>地址：北京市西城区宣武门外大街庄胜广场中央办公楼5层、6层、15层、13层1309-1312</p>
                <p>官网地址：https://www.guanlingls.com/</p>
            </div>
            <div class="footerboxright">
                <div class="telbox">
                    <p>400-8787-666</p>
                    <p>官方咨询热线（7*24）</p>
                </div>
                <ul>
                    <li><img src="@/assets/images/weixin1.jpg" alt=""><p>周旭亮</p></li>
                    <li><img src="@/assets/images/weixin2.jpg" alt=""><p>任战敏</p></li>
                    <li><img src="@/assets/images/weixin3.jpg" alt=""><p>冠领律师事务所</p></li>
                </ul>
            </div>
        </div>
    </div>
    <p class="copyright">《中华人民共和国电信与信息服务业务经营许可证》北京冠领律师事务所拆迁官网@版权所有 京ICP备14040642号</p>
	
	<!-- 左侧悬浮 -->
	<div class="leftfixed">
	    <a href="https://qfdk61.kuaishang.cn/bs/im/4396/3765/335221.htm?ref=www.gaunlingls.com" target="_blank"><img src="@/assets/images/flaot-right.jpg" alt="" ></a>
	</div>
	<!-- 右侧悬浮 -->
	<div class="rightfixed">
	    <ul>
	        <li>
	            <img src="@/assets/images/right_pic5_on.png" alt="">
	            <p>在线咨询</p>
	        </li>
	        <li>
	            <img src="@/assets/images/right_pic8.png" alt="">
	            <img src="@/assets/images/right_pic8_on.png" alt="">
	            <p>电话咨询</p>
	            <div class="phonebox showinfo">
	                <strong>全国咨询电话</strong>
	                <strong>400-8787-666</strong>
	            </div>
	        </li>
	        <li>
	            <img src="@/assets/images/right_pic2.png" alt="">
	            <img src="@/assets/images/right_pic2_on.png" alt="">
	            <p>官方微信</p>
	            <div class="weixinbox showinfo">
	                <img src="@/assets/images/leftewm.jpg" alt="">
	            </div>
	        </li>
	        <li  @click="toinfo('list',13)" >
	            <img src="@/assets/images/right_pic7.png" alt="">
	            <img src="@/assets/images/right_pic7_on.png" alt="">
	            <p>主任团队</p>
	        </li>
	        <li class="backtop">
	            <img src="@/assets/images/right_pic6_on.png" alt="">
	            <img src="@/assets/images/right_pic6.png" alt="">
	            <p>返回顶部</p>
	        </li>
	    </ul>
	</div>
	
</div>


</template>

<script>
	import $ from 'jquery'
	export default{
		name:'Footer',
		data(){
			return {
				
			}
		},
		methods:{
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
		mounted: () => {
			  $(function(){
			        // 返回顶部
			        $('.backtop').click(function(){
			            $('html,body').animate({
			                scrollTop: 0
			            },500)
			        })
			  })
		}
	}
</script>

<style>
.container .footer {
  height: 317px;
  margin-top: 10px;
  position: relative;
  background: url("../assets/images/footer_bg.jpg") no-repeat center top;
}

.container .footer .footerwrap {
  position: relative;
  z-index: 10;
}

.container .footer .footerwrap .footerline {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
}

.container .footer .footerwrap .footerline .footerlineleft {
  display: flex;
}

.container .footer .footerwrap .footerline .footerlineleft strong {
  color: #fff;
  font-size: 18px;
  font-weight: normal;
}

.container .footer .footerwrap .footerline .footerlineleft ul {
  display: flex;
}

.container .footer .footerwrap .footerline .footerlineleft ul li a {
  color: #fff;
  padding: 0 10px;
}

.container .footer .footerwrap .footerline .footerlineright {
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  margin-right: 20px;
}

.container .footer .footerwrap .footerbox {
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.container .footer .footerwrap .footerbox .footerboxleft {
  width: 680px;
}

.container .footer .footerwrap .footerbox .footerboxleft strong {
  font-size: 34px;
  line-height: 100%;
  padding: 16px 0 5px;
  display: block;
}

.container .footer .footerwrap .footerbox .footerboxleft p {
  margin-top: 12px;
}

.container .footer .footerwrap .footerbox .footerboxright {
  padding-right: 20px;
  width: 390px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}

.container .footer .footerwrap .footerbox .footerboxright .telbox {
  width: 230px;
  margin-top: 10px;
  background: url("../assets/images/tel_f.png") no-repeat left 1px;
}

.container .footer .footerwrap .footerbox .footerboxright .telbox p {
  font-size: 24px;
  text-align: right;
}

.container .footer .footerwrap .footerbox .footerboxright .telbox p:last-child {
  font-size: 16px;
}

.container .footer .footerwrap .footerbox .footerboxright ul {
  display: flex;
  justify-content: space-between;
  width: 365px;
  margin-top: 20px;
  position: relative;
  right: -16px;
}

.container .footer .footerwrap .footerbox .footerboxright ul li {
  width: 120px;
}

.container .footer .footerwrap .footerbox .footerboxright ul li img {
  width: 84px;
  height: 84px;
  margin: 0 auto;
}

.container .footer .footerwrap .footerbox .footerboxright ul li p {
  text-align: center;
  margin-top: 6px;
}

.container .footer .copyright {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  position: relative;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 12px;
}

.container .footer::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  background-color: rgba(0, 0, 0, 0.7);
}

.leftfixed {
  position: fixed;
  left: 0;
  top: 185px;
  z-index: 999;
}

.rightfixed {
  width: 78px;
  box-shadow: 0px 0px 5px 2px rgba(190, 186, 186, 0.3);
  position: fixed;
  right: 0;
  top: 185px;
  z-index: 9999;
}

.rightfixed li {
  height: 86px;
  background: #fff;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background .3s linear;
  position: relative;
  overflow: hidden;
}

.rightfixed li p {
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}

.rightfixed li > img {
  height: 25px;
  margin: 15px auto 0;
  transition: all .1s linear;
}

.rightfixed li .phonebox {
  position: absolute;
  width: 240px;
  height: 86px;
  background: #fff;
  right: 78px;
  top: 0;
  box-shadow: 0 0 5px 1px #ccc;
}

.rightfixed li .phonebox strong {
  display: block;
  text-align: center;
}

.rightfixed li .phonebox strong:first-child {
  font-size: 14px;
  font-weight: normal;
  margin-top: 20px;
  margin-bottom: 2px;
}

.rightfixed li .phonebox strong:last-child {
  color: #c01117;
  font-size: 20px;
}

.rightfixed li .phonebox::after {
  content: ' ';
  position: absolute;
  top: 27px;
  width: 0;
  height: 0;
  right: -10px;
  border-top: 10px solid transparent;
  border-left: 10px solid #fff;
  border-bottom: 10px solid transparent;
}

.rightfixed li .weixinbox {
  width: 240px;
  height: 237px;
  position: absolute;
  left: -244px;
  top: 0;
  border: 1px solid #e2e1e1;
}

.rightfixed li .weixinbox::after {
  content: ' ';
  position: absolute;
  top: 27px;
  width: 0;
  height: 0;
  right: -10px;
  border-top: 10px solid transparent;
  border-left: 10px solid #fff;
  border-bottom: 10px solid transparent;
}

.rightfixed li .showinfo {
  opacity: 0;
  transition: all .3s linear;
}

.rightfixed li::after {
  position: absolute;
  content: "";
  width: 50px;
  height: 1px;
  background: #e8e4e4;
  bottom: 5px;
  left: 50%;
  margin-left: -25px;
}

.rightfixed li:hover {
  overflow: inherit;
  background: linear-gradient(to bottom, #e25956 0%, #c21a20 100%);
}

.rightfixed li:hover p {
  color: #fff;
}

.rightfixed li:hover .showinfo {
  opacity: 1;
}

.rightfixed li:hover::after {
  background: transparent;
}

.rightfixed li:first-child {
  background: linear-gradient(to bottom, #e25956 0%, #c21a20 100%);
  color: #fff;
}

.rightfixed li:first-child:hover img {
  transform: scale(1.2);
}

.rightfixed li:first-child::after,
.rightfixed li:last-child::after {
  background-color: transparent;
}

.rightfixed li:nth-child(n+2) > img:nth-of-type(2) {
  display: none;
}

.rightfixed li:nth-child(n+2):Hover > img:nth-of-type(1) {
  display: none;
}

.rightfixed li:nth-child(n+2):Hover > img:nth-of-type(2) {
  display: block;
}
</style>