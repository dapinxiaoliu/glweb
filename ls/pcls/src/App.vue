<template>
  <div class="container">
	<Header @searchfn='getSearchMsg'/>
	<router-view></router-view>
	<Footer/>
  </div>
</template>
<script>
    import Header  from '@/components/Header'
    import Footer  from '@/components/Footer'
    export default {
        components: {
            Header,
            Footer
        },
		methods:{
			getSearchMsg(data){
				let msg = encodeURI(data.msg)
				this.$router.push({
					path:'/search/index.html',
					query:{'name':msg,id:Math.random()*10000+1}
				})
			}
		},
		mounted() {
			
		}
    }
</script>
<style lang="scss" scoped>
	@import './assets/css/init.css';
	@import './assets/css/common.css';
	.container{
		min-height: 2000px;
	}
</style>
