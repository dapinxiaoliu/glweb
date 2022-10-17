import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tv from "./views/Tv.vue"
import Tvlist from "./views/Tvlist.vue"
import Team from "./views/Team.vue"
import Teamlist from "./views/Teamlist.vue"
import Anli from "./views/Anli.vue"
import Anlilist from "./views/Anlilist.vue"
import Honor from "./views/Honor.vue"
import Honormore from './views/Honormore.vue'
import Honorlist from "./views/Honorlist.vue"
import Noticle from "./views/Noticle.vue"
import Noticlelist from "./views/Noticlelist.vue"
import News from "./views/News.vue"
import Newslist from "./views/Newslist.vue"
import Fensuo from "./views/Fensuo.vue"
import Search from "./views/Search.vue"


import Article from "./views/Article.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
	{
	  path: '/tv/index.html',
	  name: 'tv',
	  component: () => import('./views/Tv.vue')
	},
	{
	  path: '/tv/list/index.html',
	  name: 'tvlist',
	  component: () => import('./views/Tvlist.vue'),
	  meta:{ parent: [ {path: '/tv/index.html', name: '冠领视频'}]}
	},
	{
	  path: '/tv/:id.html',
	  name: 'tvhtml',
	  component: () => import('./views/Article.vue'),
	  meta:{ parent: [ {path: '/tv/index.html', name: '冠领视频'}]}
	},
	{
	  path: '/team/index.html',
	  name: 'team',
	  component: () => import('./views/Team.vue')
	},
	{
	  path: '/team/list/index.html',
	  name: 'teamlist',
	  component: () => import('./views/Teamlist.vue'),
	  meta:{ parent: [ {path: '/team/index.html', name: '冠领团队'}]}
	},
	{
	  path: '/team/:id.html',
	  name: 'teamhtml',
	  component: Article,
	  meta:{ parent: [ {path: '/team/index.html', name: '冠领团队'}]}
	},
	{
	  path: '/anli/index.html',
	  name: 'anli',
	  component: () => import('./views/Anli.vue')
	},
	{
	  path: '/anli/list/index.html',
	  name: 'anlilist',
	  component: Anlilist,
	  meta:{ parent: [ {path: '/anli/index.html', name: '冠领案例'}]}
	},
	{
	  path: '/anli/:id.html',
	  name: 'anlihtml',
	  component: Article,
	  meta:{ parent: [ {path: '/anli/index.html', name: '冠领案例'}]}
	},
	{
	  path: '/honor/index.html',
	  name: 'honor',
	  component: Honor
	},
	{
	  path: '/honor/default.html',
	  name: 'honordefault',
	  component: Honormore
	},
	{
	  path: '/honor/list/index.html',
	  name: 'honorlist',
	  component: Honorlist,
	  meta:{ parent: [ {path: '/honor/index.html', name: '冠领荣誉'}]}
	},
	{
	 path: '/honor/:id.html',
	 name: 'honorhtml',
	 component: Article,
	 meta:{ parent: [ {path: '/honor/index.html', name: '冠领荣誉'}]}
	},
	{
	  path: '/noticle/index.html',
	  name: 'noticle',
	  component: Noticle
	},
	{
	  path: '/noticle/list/index.html',
	  name: 'noticlelist',
	  component: Noticlelist,
	  meta:{ parent: [ {path: '/noticle/index.html', name: '冠领公告'}]}
	},
	{
	 path: '/noticle/:id.html',
	 name: 'noticlehtml',
	 component: Article,
	 meta:{ parent: [ {path: '/noticle/index.html', name: '冠领公告'}]}
	},
	{
	  path: '/news/index.html',
	  name: 'news',
	  component: News
	},
	{
	  path: '/:news/:name/index.html',
	  name: 'newslist',
	  component: Newslist,
	  meta:{ parent: [ {path: '/news/index.html', name: '冠领新闻'}]}
	},
	{
	 path: '/:news/:biaoshi/:id.html',
	 name: 'newshtml',
	 component: Article,
	 props: true,
	 meta:{ parent: [ {path: '#', name: '冠领新闻'}]}
	},
	{
	  path: '/fensuo/index.html',
	  name: 'fensuo',
	  component: Fensuo
	},
	{
	  path: '/search/index.html',
	  name: 'search',
	  component: Search,
	  meta:{ parent: [ {path: '#', name: '您的搜索'}]}
	},
	{
	 path: '/ban/:id.html',
	 name: 'banhtml',
	 component: Article,
	 meta:{ parent: [ {path: '#', name: '轮播图'}]}
	},
	{
	 path: '/fagui/list/index.html',
	 name: 'faguilist',
	 component: () => import('./views/Faguilist.vue'),
	 meta:{ parent: [ {path: '/fagui/list/index.html', name: '拆迁法规'}]}
	},
	{
	 path: '/fagui/index.html',
	 name: 'fagui',
	 component:() => import('./views/Fagui.vue'),
	 meta:{ parent: [ {path: '/fagui/index.html', name: '拆迁法规'}]}
	},
	{
	 path: '/fagui/:id.html',
	 name: 'faguihtml',
	 component: Article,
	 meta:{ parent: [ {path: '/fagui/index.html', name: '拆迁法规'}]}
	},
	{
	 path: '/dayi/index.html',
	 name: 'dayi',
	 component:() => import('./views/Dayi.vue'),
	 meta:{ parent: [ {path: '/dayi/index.html', name: '律师答疑'}]}
	},
	{
	 path: '/dayi/list/index.html',
	 name: 'dayilist',
	 component: () => import('./views/Dayilist.vue'),
	 meta:{ parent: [ {path: '/dayi/list/index.html', name: '律师答疑'}]}
	},
	{
	 path: '/dayi/:id.html',
	 name: 'dayihtml',
	 component: Article,
	 meta:{ parent: [ {path: '/dayi/index.html', name: '律师答疑'}]}
	}
	
  ]
})
