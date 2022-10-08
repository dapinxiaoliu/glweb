import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Honor from './views/Honor.vue'
import Tv from './views/Tv.vue'
import Tvcctv from './views/Tvcctv.vue'
import Tvbrtv from './views/Tvbrtv.vue'
import Noticle from './views/Noticle.vue'
import Media from './views/Media.vue'
import Anli from './views/Anli.vue'
import Team from './views/Team.vue'
import Search from "./views/Search.vue"

import Article from './views/Article.vue'


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
      path: '/honor/index.html',
      name: 'honor',
      component: Honor
    },
	{
	  path: '/honor/:id.html',
	  name: 'honorhtml',
	  component: Article,
	  meta:{ parent: [ {path: '/honor/index.html', name: '冠领荣誉'}]}
	},
	{
	  path: '/tv/index.html',
	  name: 'tv',
	  component: Tv
	},
	{
	  path: '/tv/cctv/index.html',
	  name: 'cctv',
	  component: Tvcctv
	},
	{
	  path: '/tv/cctv/:id.html',
	  name: 'cctvhtml',
	  component: Article,
	  meta:{ parent: [ {path: '/tv/cctv/index.html', name: '央视普法'}]}
	},
	{
	  path: '/noticle/index.html',
	  name: 'noticle',
	  component: Noticle
	},
	{
	  path: '/noticle/:id.html',
	  name: 'noticlehtml',
	  component: Article,
	  meta:{ parent: [ {path: '/noticle/index.html', name: '冠领公告'}]}
	},
	{
	  path: '/media/index.html',
	  name: 'media',
	  component: Media
	},
	{
	  path: '/media/:id.html',
	  name: 'mediahtml',
	  component: Article,
	  meta:{ parent: [ {path: '/media/index.html', name: '媒体报道'}]}
	},
	{
	  path: '/anli/index.html',
	  name: 'anli',
	  component: Anli
	},
	{
	  path: '/anli/:id.html',
	  name: 'anlihtml',
	  component: Article,
	  meta:{ parent: [ {path: '/anli/index.html', name: '胜诉案例'}]}
	},
	{
	  path: '/team/index.html',
	  name: 'team',
	  component: Team
	},
	{
	  path: '/team/:id.html',
	  name: 'teamhtml',
	  component: Article,
	  meta:{ parent: [ {path: '/team/index.html', name: '冠领团队'}]}
	},
	{
	  path: '/about.html',
	  name: 'abouthtml',
	  component: Article,
	  meta:{ parent: [ {path: '/about.html', name: '关于我们'}]}
	},
	{
	  path: '/search/index.html',
	  name: 'search',
	  component: Search,
	  meta:{ parent: [ {path: '/search/index.html', name: '搜索如下：'}]}
	}
  ]
})
