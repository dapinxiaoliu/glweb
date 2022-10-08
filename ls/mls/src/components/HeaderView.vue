<template>
    <div>
        <div class="header" id="header">
            <h1><a href="/"><img src="@/assets/images/logo.png" alt=""></a></h1>
            <div class="headerbox">
                <ul>
                    <li>
                        <strong><a href="tel:4008787666">电话</a></strong>
                    </li>
                    <li class="search">
                        <strong>搜索</strong>
                    </li>
                    <li class="daohang">
                        <strong>导航</strong>
                    </li>
                </ul>
                <div class="searchbox">
                    <p><input type="text" placeholder="请输入搜索内容" v-model="message"><button @click="search()">确定</button></p>
                    <h2>热门搜索</h2>
                    <div class="searchwrap">
                        <p><router-link to="/team/1.html"><em>1</em>周旭亮</router-link></p>
                        <p><router-link to="/team/9.html"><em>2</em>任战敏</router-link></p>
                        <p><a href="javascript:void(0)" @click="search('拆迁律师')"><em>3</em>拆迁律师</a></p>
                        <p><a href="javascript:void(0)" @click="search('厂房拆迁')"><em>4</em>厂房拆迁</a></p>
                        <p><a href="javascript:void(0)" @click="search('农村拆迁')"><em>5</em>农村拆迁</a></p>
                        <p><a href="javascript:void(0)" @click="search('房屋征收')"><em>6</em>房屋征收</a></p>
                        <p><a href="javascript:void(0)" @click="search('拆迁补偿')"><em>7</em>拆迁补偿</a></p>
                        <p><a href="javascript:void(0)" @click="search('安置协议')"><em>8</em>安置协议</a></p>
                    </div>
                </div>
                <div class="sonnav">
                    <ol>
                       <li><a href="/">首页</a></li>
                       <li><router-link to="/team/index.html">冠领团队</router-link></li>
                       <li><router-link to="/anli/index.html">胜诉案例</router-link></li>
                       <li><router-link to="/noticle/index.html">冠领公告</router-link></a></li>
                       <li><router-link to="/tv/index.html">央视普法</router-link></a></li>
                       <li><a href="#">关于冠领</a></li>
                       <li><router-link to="/media/index.html">媒体报道</router-link></li>
                       <li><router-link to="/honor/index.html">冠领荣誉</router-link></li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="nav" id="nav">
            <ul>
                <li><a href="/">首页</a></li>
                <li><router-link to="/team/index.html">冠领团队</router-link></li>
                <li><router-link to="/anli/index.html">胜诉案例</router-link></li>
                <li><router-link to="/noticle/index.html">冠领公告</router-link></a></li>
                <li><router-link to="/tv/index.html">央视普法</router-link></a></li>
                <li><router-link to="/about.html">关于冠领</router-link></li>
                <li><router-link to="/media/index.html">媒体报道</router-link></li>
                <li><router-link to="/honor/index.html">冠领荣誉</router-link></li>
            </ul>
        </div>

    </div>
    
    
  </template>
  
  <script>
  import $ from 'jquery'
  export default {
    name: 'HeaderView',
    data(){
        return {
			message:'',
			islock:'1'
		}
    },
    components: {
  
    },
    methods:{
		search(names = ''){
			if(names != ''){
				this.islock = 1
				$('.searchbox').hide()
				this.$router.push({ path:'/search/index.html',query:{'name':encodeURI(names)}})
			}else{
				let msg = this.message
				if(msg == ''){
					alert('请输入您想要搜索的内容')
				}else{
					this.islock = 1
					$('.searchbox').hide()
					this.$router.push({ path:'/search/index.html',query:{'name':encodeURI(msg)}})
				}
			}
			
		}
		// toinfo(type,id,catid){
		// 	if(type == 'law'){
		// 		localStorage.setItem('teamname','拆迁律师')
		// 		this.$router.push({ path:'/team/index.html'})
		// 	}
		// }
    },
    mounted(){
		let that = this
        let b = document.getElementById("header").offsetHeight
        document.getElementById("nav").style.marginTop = b+"px"

		let navli = $('.nav li')
		navli.click(function(){
			localStorage.setItem('honorname','k')
			localStorage.setItem('noticlename','k')
			localStorage.setItem('medianame','k')
			localStorage.setItem('anliname','k')
			localStorage.setItem('cctvname','k')
			localStorage.setItem('brtvname','k')
			localStorage.setItem('teamname','k')
			$(this).siblings().removeClass()
		})
		
		
		
		
		// console.log(this.$route.params.id);
        $(function(){
            let search = $('.search'),
            searchbox = $('.searchbox')
            search.click(function(e){
                e.stopPropagation()
                if(that.islock == 1){
                    that.islock = 0
                    isshow = 1
                    searchbox.slideDown()
                    sonnav.hide()
                }else{
                    that.islock = 1
                    searchbox.slideUp()
                }
            })
            let daohang = $('.daohang'),
            sonnav = $('.sonnav'),
            isshow = 1
            daohang.click(function(){
                if(isshow == 1){
                    isshow = 0
                    that.islock = 1
                    sonnav.slideDown()
                    searchbox.hide()
                }else{
                    isshow = 1
                    sonnav.slideUp()
                }
                
            })
        })
    },
	watch:{
		$route(to, from){
			// let navli = $('.nav li')
			// navli.removeClass('router-link-active')
			// if(this.$route.path.indexOf('honor') != -1){
			// 	navli.eq(7).addClass('router-link-active')
			// }else if(this.$route.path.indexOf('noticle') != -1){
			// 	navli.eq(3).addClass('router-link-active')
			// }
		}
		
	}
  }
  </script>

  <style>
    .nav li.cur{
    background: #cc131d;
    
  }
  .nav li.cur a{
    color: #fff;
  }
    .header {
  height: 1rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 7.5rem;
  z-index: 100;
  top: 0;
}

.header h1 {
  width: 3.5rem;
  margin-left: .2rem;
}

.header .headerbox {
  margin-right: .2rem;
}

.header .headerbox ul {
  width: 2rem;
  display: flex;
  justify-content: space-between;
}

.header .headerbox ul li {
  font-size: .24rem;
  background-repeat: no-repeat;
  background-position: center .15rem;
  background-size: .4rem;
  height: 1rem;
}

.header .headerbox ul li strong {
  display: block;
  margin-top: .55rem;
  white-space: nowrap;
}

.header .headerbox ul li:first-child {
  background-image: url("../assets/images/dianhua.png");
}

.header .headerbox ul li:nth-child(2) {
  background-image: url("../assets/images/serch.png");
}

.header .headerbox ul li:nth-child(3) {
  background-image: url("../assets/images/nav2.png");
}

.header .headerbox .searchbox {
  position: absolute;
  background: #fff;
  left: 0;
  right: 0;
  top: 1rem;
  z-index: 99;
  display: none;
}

.header .headerbox .searchbox p {
  display: flex;
  width: 100%;
}

.header .headerbox .searchbox p input {
  border: 1px solid #cc131d;
  height: .8rem;
  width: 85%;
  text-indent: .3rem;
  line-height: .8rem;
  box-sizing: border-box;
  border-radius: 0;
}

.header .headerbox .searchbox p ::placeholder {
  font-size: .24rem;
  color: #ccc;
}

.header .headerbox .searchbox p button {
  width: 15%;
  font-size: .24rem;
  color: #fff;
  background-color: #cc131d;
  border: none;
  height: .8rem;
}

.header .headerbox .searchbox h2 {
  font-size: .3rem;
  font-weight: normal;
  padding: .3rem .22rem;
  color: #333;
}

.header .headerbox .searchbox .searchwrap {
  padding: 0 .2rem .3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.header .headerbox .searchbox .searchwrap p {
  width: 48%;
  background: #efefef;
  margin-bottom: .15rem;
  height: .5rem;
  line-height: .5rem;
  font-size: .24rem;
  border-top-left-radius: .1rem;
  border-bottom-left-radius: .1rem;
  overflow: hidden;
}
.header .headerbox .searchbox .searchwrap p a{
	width: 100%;
	display: flex;
}
.header .headerbox .searchbox .searchwrap p em {
  width: .4rem;
  background-color: #8b8b8b;
  color: #fff;
  text-align: center;
  margin-right: .1rem;
}

.header .headerbox .searchbox .searchwrap p:first-child em {
  background: #ec0a00;
}

.header .headerbox .searchbox .searchwrap p:nth-child(2) em {
  background: #ff3f00;
}

.header .headerbox .searchbox .searchwrap p:nth-child(3) em {
  background: #ffa303;
}

.header .headerbox .sonnav {
  position: absolute;
  z-index: 99;
  right: 0;
  background: #fff;
  padding: 0 .3rem .5rem;
  width: 2.6rem;
  display: none;
}

.header .headerbox .sonnav ol li {
  height: .6rem;
  line-height: .6rem;
  border-bottom: 1px #ddd solid;
}

.header .headerbox .sonnav ol li a {
  color: #cc131d;
  font-size: .24rem;
}

.nav ul {
  display: flex;
  flex-wrap: wrap;
}

.nav ul li {
  line-height: .8rem;
  height: .8rem;
  width: 25%;
  background: #f7f8fb;
  text-align: center;
  border-right: 1px solid #eeeff1;
  border-bottom: 1px solid #eeeff1;
  box-sizing: border-box;
}

.nav ul li a {
  color: #cc131d;
  font-weight: bold;
  font-size: .3rem;
}
  </style>
  