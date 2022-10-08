<template>
	<div class="bannerinner">
		<div class="banner">
		    <div class="swiper banbox">
		        <div class="swiper-wrapper">
		          <div class="swiper-slide"><a href=""><img src="@/assets/images/comban1.jpg" alt=""></a></div>
		          <div class="swiper-slide"><a href=""><img src="@/assets/images/comban2.jpg" alt=""></a></div>
		          <div class="swiper-slide"><a href=""><img src="@/assets/images/comban3.jpg" alt=""></a></div>
		          <div class="swiper-slide"><a href=""><img src="@/assets/images/comban4.jpg" alt=""></a></div>
		          <div class="swiper-slide"><a href=""><img src="@/assets/images/comban5.jpg" alt=""></a></div>
		          <div class="swiper-slide"><a href=""><img src="@/assets/images/comban6.jpg" alt=""></a></div>
		          <div class="swiper-slide"><a href=""><img src="@/assets/images/comban7.jpg" alt=""></a></div>
		          <!-- <div class="swiper-slide"><a href=""><img src="@/assets/images/comban8.jpg" alt=""></a></div>
		          <div class="swiper-slide"><a href=""><img src="@/assets/images/comban9.jpg" alt=""></a></div> -->
		        </div>
		        <div class="swiper-pagination"></div>
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
	export default{
		name:"Bannerinner",
		data(){
			return{
				bannData:[]
			}
		},
		methods:{
			getban(){
				let that = this
				request({
					url: '/index/banner?id=4',
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
									that.bannData.push(value)
								}
							})
				
						}
					}]
				})
			}
		},
		mounted() {
			this.getban()
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
		}
	}
</script>

<style scoped>
	.banner{
	        overflow: hidden;
	        position: relative;
	    }
	    .swiper-pagination-bullets{
	        bottom: 0rem !important;
	    }
	    .swiper-pagination-clickable .swiper-pagination-bullet{
	        opacity: 1;
	        background-color: #979191;
	        box-shadow: 0 0 1px 1px #fff;
	        margin: 0 5px;
	    }
	    .swiper-pagination-bullet-active{
	        background: #cc131d !important;
	    }
</style>