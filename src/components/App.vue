<template>
  <div>
    <!-- 头部 -->
    <mt-header title="401信息管理系统" ref="header"></mt-header>

    <transition name="rv" mode="out-in">      
      <router-view class="tmpl" :appRefs="$refs"></router-view> 
    </transition>

    <mt-tabbar v-model="selected" ref="footer">
      <mt-tab-item id="home">
        <img slot="icon" src="../static/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="../static/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="../static/img/shopcart.png">
        购物车<mt-badge size="small" type="error">30</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="../static/img/search.png">
        查找
      </mt-tab-item>
    </mt-tabbar> 
  </div>
</template>

<script>
  export default {
    data(){
      return {selected:''}
    },
    watch:{
      selected(newV){
        this.$router.push({ name:newV }) // 让锚点值改变
      }
    }
  }
</script>
<style scoped>
.rv-enter-active, .rv-leave-active {
  transition: opacity 1s
}
/*  元素移除home 默认透明度 1->0 */
/*  元素插入news 默认透明度 0->1 */
.rv-entry, .rv-leave-to {
  opacity: 0
}
  .mint-tabbar{
    position: fixed;
    bottom:0;
  }
</style>