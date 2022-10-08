<template>
	
	<div class="article">
		
		<div class="tvwrap w12">
			<div class="tvwrapleft comborder">
				<Html :lmname="lmname" :id="arcid" :leibie="leibie">
					<template #title>
						<h3>{{title}}</h3>
					</template>
					<template #createtime>
						{{time}}
					</template>
				</Html>
			</div>
			
			<Aside :lmname="lmname" @changeUrl="gotoMore"/>

		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import Aside from "../components/Aside"
	import {request} from '../network/request.js'
	import GLOBAL from '../global/global.js'
	import Html from '../components/Html.vue'
	import {mapState,mapGetters} from 'vuex'
	export default{
		name:'Article',
		props:['lmname','id'],
		components:{
			Aside,
			Html
		},
		data(){
			return {
				arcData:[],
				arcHtml:'',
				// count:0,
				arcTime:'',
				title:'',
				time:'',
				leibie:'',
				catid:0,
				prenextarc:'',
				upArc:[],
				downArc:[],
				preshow: false,
				nextshow: false,
				currentUrl:'',
				prenextarc:'',
				lmpath:'',
				breadcrumbList:[],
				showmb:false,
				shwovideo:false,
				fontsize:'18px',
				lmname:'',
				arcid:0,
				
			}
		},
		methods:{


			getPNArc(id,catid){
				let that = this
				let url = that.prenextarc+id+'&catid='+catid
				request({
					url: url,
					responseType: 'json',
					transformResponse:[function(data){
						let jsondata = JSON.parse(data)
						// console.log(jsondata);
						if(jsondata['code'] == 200){
							if(jsondata['data']['down'] == null){
								that.nextshow = true
							}else{
								that.nextshow = false
								that.downArc = jsondata['data']['down']
							}
							if(jsondata['data']['up'] == null){
								that.preshow = true
							}else{
								that.preshow = false
								that.upArc = jsondata['data']['up']
							}
						}
					}]
				})
			},
			goback(){
				let path = this.lmpath.substr(1,this.lmpath.length-2)
				localStorage.setItem(path+'catid',this.catid)
				this.$router.push({ path:this.lmpath+'list/index.html',query:{'id':this.catid}})
			},
			changefont(name){
				
				if(name == 'b'){
					$('.contenttitle em').eq(0).addClass('active').siblings().removeClass()
					$('.contentbox p span').animate({
						'font-size':'20px',
						'line-height':'28px !important'
					})
					
				}else if(name == 'm'){
					$('.contenttitle em').eq(1).addClass('active').siblings().removeClass()
					$('.contentbox p span').animate({
						'font-size':'16px',
						'line-height':'24px !important'
					})
					
				}else if(name == 's'){
					$('.contenttitle em').eq(2).addClass('active').siblings().removeClass()
					$('.contentbox p span').animate({
						'font-size':'14px',
						'line-height':'22px !important'
					})
				}
			},
			gotoMore(obj){
				this.$store.commit('setMoreName',obj.name)
				this.$router.push({
					name:obj.url
				})
			}
		},

		computed:{
			...mapGetters(['getList']),
			...mapGetters(['getMoreName'])
		},
		created(){
			//进入页面保存信息，避免刷新丢失
			let arctitle = this.getList.title
			if(arctitle){
				this.title = this.getList.title
				this.leibie = this.getList.leibie
				this.time = this.getList.time
				localStorage.setItem('arcleibie',this.getList.leibie)
				localStorage.setItem('arctitle',this.getList.title)
				localStorage.setItem('arctime',this.getList.time)
			}else{
				this.leibie = localStorage.getItem('arcleibie')
				this.title = localStorage.getItem('arctitle')
				this.time = localStorage.getItem('arctime')
			}
			
			this.arcid = this.id
			if(this.getMoreName){
				this.lmname = this.getMoreName
				localStorage.setItem('morename',this.getMoreName)
			}else{
				let morename = localStorage.getItem('morename')
				this.lmname = morename
			}
			
			
			
			
			
		},
		mounted() {
			
			
			let meta = this.$route.meta;
			if(meta && meta.parent){
				this.breadcrumbList = meta.parent
			}else{
				this.breadcrumbList = [{path: meta.path.split('/')[1], name: meta.name}]
			}
			
			


	
		},
		watch:{
		  $route(to, from){

		  }
		}
	}
</script>

<style lang="scss" scoped>
.tvwrap .tvwrapleft h2.comtitle a{
	margin-right: 0;
}
.comtitle strong{
	width: auto !important;
	padding: 0 50px!important;
	font-size: 16px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-shadow: 0 0 1px #fff;
}
.videobox{
	width: 600px;
	background: #333;
	margin: 0 auto;
	video{
		width: 600px;
	}
}
.tvwrap{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .tvwrapleft{
        width: 915px;
        background-color: #fff;
        h2.comtitle{
            justify-content: flex-start;
            strong{
                width: 220px;
                margin-left: 5px;
            }
            strong::after{
                left: 19%;
            }
            span{
                font-size: 14px;
                margin-left: 15px;
                
            }
           
        }

        .shangxia{
            padding: 0 35px;
            margin-top: 60px;
            a{
                display: block;
                color: #545455;
                line-height: 40px;
                position: relative;
                text-indent: 10px;
            }
            a::after{
                content: "";
                width: 4px;
                height: 4px;
                border-radius: 50%;
                position: absolute;
                left: 0;
                top: 50%;
                background: #626263;
            }
        }
        .tuijian{
            padding: 0 35px 30px; 
            margin-top: 60px;
            strong{
                font-size: 18px;
                font-weight: normal;
            }
            ul{
                li{
                    color: #545455;
                    list-style-type: disc;
                    margin-left: 16px;
                    padding-top: 10px;
                    line-height: 30px;
                    font-size: 12px;
                    a{
                        font-size: 16px;
                    }
                }
            }  
        }

        
    }




}
</style>