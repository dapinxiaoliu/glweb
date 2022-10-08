<template>
  <div class="container">
	<Header/>
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
