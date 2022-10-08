<template>
	<div class="news" v-cloak>
		<div class="tvwrap w12">
			<div class="tvwrapleft">
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>冠领新闻</strong>
						<a href="javascript:void(0)" class="margina"  @click="tolist('冠领新闻')">更多></a>
					</h2>
					<ul>
						<li v-for="item,index in guanlingData" :key="item.id"><a href="javascript:void(0)" @click="toinfo($event,item.id,create_time,'冠领新闻')">{{item.title}}</a><span>{{item.create_time}}</span></li>
					</ul>
				</div>
				<div class="tvwrapleftitem comborder">
					<h2 class="comtitle">
						<strong>行业新闻</strong>
						<a href="javascript:void(0)" class="margina" @click="tolist('行业新闻')">更多></a>
					</h2>
					<ul>
						<li v-for="item,index in hangyeData" :key="item.id"><a href="javascript:void(0)" @click="toinfo($event,item.id,create_time,'行业新闻')">{{item.title}}</a><span>{{item.create_time}}</span></li>
					</ul>
				</div>
			</div>
			<Aside :lmname="lmname"/>

		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import Aside from "../components/Aside"
	import {mapMutations} from 'vuex'
	export default{
		name:'News',
		components:{
			Aside
		},
		data(){
			return {
				lmname:'冠领新闻',
				guanlingData:[],
				hangyeData:[]
			}
		},
		methods:{
			getData(lmid){
				let that = this
				if(lmid == 29){
					that.guanlingData = []
				}else if(lmid == 32){
					that.hangyeData = []
				}
				request({
					url: '/news/read?id='+lmid+'&page=1&page_size=10',
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							let beforeData = jsondata['data']
							beforeData['data'].forEach(function(value,index,arr){
								value['create_time'] = value['create_time'].split(' ')[0]
								if(lmid == 29){
									that.guanlingData.push(value)
								}else if(lmid == 32){
									that.hangyeData.push(value)
								}
							})
						}
					}]
				})
			},
			toinfo($event,id,time,name){
				// localStorage.setItem('newscatid',catid)
				let title = $event.target.innerText
				this.$store.commit('setData',{
					id:id,
					leibie:'xinnew',
					title:title,
					time:time
				})
				this.$router.push({ path:'/news/'+id+'.html'})
				this.$store.commit('setMoreName',name)
			},
			tolist(name){
				this.$store.commit('setMoreName',name)
				this.$router.push({ name:'newslist' })
			}
		},
		beforeCreate() {
			
		},
		created() {
			
			this.getData(29)
			this.getData(32)
		}
	}
</script>

<style lang="scss" scoped>
.tvwrap{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .tvwrapleft{
        width: 915px;
        background: #fff;
            h2.comtitle{
                strong{
                    width: 155px;
                    margin-left: 25px;
                    padding: 0;
                }
                strong::after{
                    left: 33%; 
                }
                a{
                    margin-right: 35px;
                }
            }
            .tvwrapleftitem{
                margin-bottom: 10px;
				height: 647px;
            }
            .tvwrapleftitem:last-child{
                margin-bottom: 0;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 25px;
                padding: 0 26px;
                margin-top: 20px;
                li{
                    width: 100%;
                    font-size: 18px;
                    border-bottom: 1px solid #ecebeb;
                    height: 55px;
                    line-height: 55px;
                    display: flex;
                    justify-content: space-between;
                    position: relative;
					margin: 0 !important;
                    a{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        width: 80%;
                        margin-left: 20px;
                        color: #333;
                        font-size: 16px;
                    }
                    span{
                        font-size: 16px;
                        color: #333;
                    }
                }
                li::after{
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 22px;
                    width: 9px;
                    height: 9px;
                    background: #e73825;
                    margin-right: 10px;
                }  
                li:last-child{
                    border: none;
                }
            }
    }




}
</style>