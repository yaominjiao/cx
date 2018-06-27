import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

// initial state
const state = {
  loading:false
}

// getters
const getters = {
  
}
// actions
const actions = {
  loading ({commit}, status) {
    commit("loading",status);
  }
}

// mutations
const mutations = {
  loading (state, status) {
    state.loading = status
  }
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		
	}
})




