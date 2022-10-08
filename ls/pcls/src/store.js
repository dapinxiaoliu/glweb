import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  arcinfo:{
		 id:0,
		 leibie:'',
		 title:'',
		 time:'',
		 
	  },
	  morename:''
	
  },
  getters:{
	getList:state => state.arcinfo,
	getMoreName:state => state.morename
  },
  mutations: {
	setData(state,obj){
		state.arcinfo.id = obj.id
		state.arcinfo.leibie = obj.leibie
		state.arcinfo.title = obj.title
		state.arcinfo.time = obj.time
		
	},
	setMoreName(state,name){
		state.morename = name
	}
  },
  actions: {
	
  }
})
