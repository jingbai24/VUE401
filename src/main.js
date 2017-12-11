// 引入资源
import Vue from 'vue';


// 路由相关组件 开始
import Home from './components/Home/Home.vue'
import App from './components/App.vue'
import Member from './components/Member/Member.vue'
import Shopcart from './components/Shopcart/Shopcart.vue'
import Search from './components/Search/Search.vue'
import NewsList from './components/News/NewsList.vue'
import NewsDetail from './components/News/NewsDetail.vue'
import PhotoList from './components/Photo/PhotoList.vue'
import PhotoDetail from './components/Photo/PhotoDetail.vue'

import GoodsList from './components/Goods/GoodsList.vue'
import GoodsDetail from './components/Goods/GoodsDetail.vue'
// 路由相关组件 结束


//VuePreview 开始
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
//VuePreview 结束

// 注册全局组件开始
import MyUl from './components/Commons/MyUl.vue'
import MyLi from './components/Commons/MyLi.vue'
import NavBar from './components/Commons/NavBar.vue'
import Comment from './components/Commons/Comment.vue'
Vue.component(Comment.name,Comment)
Vue.component(NavBar.name,NavBar)
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name,MyLi)
// 注册全局组件结束


// 注册全局过滤器 开始
import Moment from 'moment'
Vue.filter('convertTime',(value)=>{
  //2015-04-16T03:50:28.000Z
  return Moment(value).format('YYYY-MM-DD')
})
// 处理title太长的问题
Vue.filter('convertTitle',(value,limit)=>{
  if(!value) return
  //判断
  if(value.length>limit){
    return value.substr(0,limit) + '...'
  }
  // 返回原数据
  return value
})
// 注册全局过滤器 结束



// VueRouter 开始
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router = new VueRouter()
router.addRoutes([
    // 重定向到首页
  {path:'/', redirect:{name:'home'}},
  {name:'home', path: '/home', component:Home},
  {name:'member', path:'/member', component: Member},
  {name:'shopcart', path:'/shopcart', component: Shopcart},
  {name:'search', path:'/search', component: Search},
  {name:'news.list', path:'/news/list', component: NewsList},//新闻列表
  {name:'news.detail', path:'/news/detail', component: NewsDetail},//新闻详情
  {name:'photo.list', path:'/photo/list/:categoryId', component: PhotoList},//图文分享
  {name:'photo.detail', path:'/photo/detail/:imgId', component: PhotoDetail},//图文详情
  // {name:'test', path:'/test', component: GoodsListTest},//测试路由
  {name:'goods.list', path:'/goods/list', component:GoodsList},//商品列表
  {name:'goods.detail', path:'/goods/detail/:goodsId',component:GoodsDetail},//商品详情
])
  
// VueRouter 结束

// MintUi 开始
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)
// MintUi 结束

// 考虑未来可能会有样式覆盖，在之后再引入自己的css
import './static/css/global.css'


// Axios 开始
import Axios from 'axios'
Vue.prototype.$axios= Axios
//设置默认URL请求基础路径
Axios.defaults.baseURL ='http://vue.studyit.io/api/'
// Axios.defaults.baseURL ='http://192.168.159.66:8899/api/'

// Axios 结束


new Vue({
    el:'#app',
    render:c=>c(App),
    router
});