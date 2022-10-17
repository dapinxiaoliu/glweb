<template>
	<div class="html">
		<h2 class="comtitle">
			<strong>{{lmname}}</strong>
			<span class="mianbao">当前位置：
				<a href="/" @click.prevent="$router.push('/')">北京冠领律师事务所拆迁官网<em>></em> </a>
				<a @click.prevent="gotoList">{{lmname}}<em>></em></a>
			</span> 
		</h2>
		<div class="content">
			<slot name="title"></slot>
			<div class="contenttitle">
				<span>文章来源：北京冠领律师事务所</span>  
				<!-- <span>阅读：{{count}}</span>  -->
				<span>发布时间：<slot name="createtime"></slot></span>  
				<span>字体： [
					<em v-for="item,index in changeFont" :key="item.id" :class="idx == index ? 'activeColor' : ''" @click="change(index,item.size)">{{item.name}}</em>
					]</span>  
			</div>
			<!-- <div class="videobox" v-if=""><video :src="" controls></video></div> -->
			 <div class="contentbox" v-html="arcHtml" ref="htmlnode"></div> 
		</div>
 		<div class="shangxia">
			<a href="javascript:void(0)" >上一篇：没有了</a>
			<a href="javascript:void(0)" >下一篇：没有了</a>
			
<!--			<a href="javascript:void(0)" v-if="nextshow">下一篇：没有了</a>
			<router-link v-else :to="{path:lmpath+downArc.id+'.html'}" >下一篇：{{downArc.title}}</router-link>-->
		</div> 
		<div class="tuijian">
			<strong>相关推荐</strong>
			<ul>
				<li v-for="item,index in tuijianData" :key="item.id">
					<router-link :to="{path:lmpath+item.id+'.html'}">{{item.title}}</router-link>
				</li>
			</ul>
		</div>
	
	</div>
</template>

<script>
	import {request} from '../network/request.js'
	export default{
		name:'Html',
		props:['lmname','id','leibie'],
		emits:['tolist'],
		data(){
			return {
				arcHtml:[],
				url:'',
				replaceUrl:'',
				idx:1,
				changeFont:[
					{name:'大'},
					{name:'中'},
					{name:'小'}
				]
			}
		},
		created() {
			let ofPage = this.$route.name
			//新闻页面
			console.log(this.leibie)
			if(this.leibie == 'z'){
				this.replaceUrl = 'http://www.guanlingls.com'
			}else{
				this.replaceUrl = 'http://api.guanlingls.com'
			}
			if(ofPage == 'newshtml'){
				if(this.leibie == 'z'){//织梦
					this.url = '/news/zmnewslist?id='
				}else{
					this.url = '/news/newslist?id='
				}
			}
			this.getArcInfo()
		},

		methods:{
			//获取文章内容
			getArcInfo(){
				let that = this
				request({
					url: that.url + that.id,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							// that.arcData = []
							let beforeData = jsondata['data']
							if(that.leibie == 'x'){
								that.arcHtml= beforeData['content'].replace(/\s(src=")/g, " $1"+that.replaceUrl)
							}else{
								that.arcHtml= beforeData['body'].replace(/\s(src=")/g, " $1"+that.replaceUrl)
							}
							if(beforeData['video_url'] != undefined){
								// that.shwovideo = true
								// that.videourl = beforeData['video_url']
							}
						}
					}]
				})
			},
			//相关推荐
			relevant(){
				let that = this
				request({
					url: '',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						console.log(jsondata);				
						if(jsondata['code'] == 200){
							
						}
					}]
				})
			},
			change(id){
				this.idx = id
				let className = ''
				if(id == 0){
					className = 'big'
				}else if(id == 1){
					className = 'mid'
				}else{
					className = 'lit'
				}
				this.$refs.htmlnode.classList.value = className
			},
			gotoList(){
				let name = this.$route.name
				let routename = this.$route.path.split('/')
				if(name = 'newshtml'){
					name = 'newslist'
				}
				this.$emit('tolist',routename[1]+'/'+routename[2].slice(0,2))
			}
		}
	}
</script>

<style lang="scss" scoped>

	.big{
		font-size: 18px !important;
	}

	.mid{
		font-size: 16px !important;
	}
	.lit{
		font-size: 14px !important;
	}
	.activeColor{
		color: #c21a20;
		font-weight: bold;
	}
	.html{
		padding-bottom: 80px;
	}
        .content{
            margin-top: 40px;
            padding: 0 35px;
            h3{
                text-align: center;
                font-size: 34px;
                color: #333;
                font-weight: normal;
                
            }
            .contenttitle{
                display: flex;
                justify-content: space-evenly;
                margin: 20px 0;
                border-bottom: 1px solid #eeecec;
                padding-bottom: 15px;
                span{
                    font-size: 14px;
                    color: #666666;
                    em{
                        padding: 0 2px;
                        cursor: pointer;
                        transition: color .1s linear ;
                    }
                    em.active{
                        color: #c21a20;
                    }
                    em:hover{
                        color: #c21a20;
                    }
                }
            }

        }
</style>