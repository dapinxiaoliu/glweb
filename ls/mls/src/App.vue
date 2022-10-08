<template>

  <div class="container">
      <!-- 主体开始 -->
      <HeaderView/>
      <router-view></router-view>
      <FooterView/>
      <!-- 主体结束 -->
  </div>

</template>

<script>
    var deviceWidth = document.documentElement.clientWidth;
var dpr=window.devicePixelRatio;
document.documentElement.setAttribute('data-dpr',dpr );
if(deviceWidth > 750) deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

window.onresize = function(){
    var deviceWidth = document.documentElement.clientWidth;
    var dpr=window.devicePixelRatio;
    document.documentElement.setAttribute('data-dpr',dpr );
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    let a = document.getElementById("header").offsetHeight
    document.getElementById("nav").style.marginTop = a+"px"
    
}
    import HeaderView  from '@/components/HeaderView'
    import FooterView  from '@/components/FooterView'
    export default {
        components: {
            HeaderView,
            FooterView
        }
    }
</script>
<style lang="scss" scoped="scoped">
    @import './assets/css/init.css';
    @import './assets/css/common.css';
</style>
