const state = () => ({
	page: 'index'
})

const mutations = {
	setPage(state: { page: string }, page: string) {
		state.page = page
	}
}

const actions = {
	setPage(vuexContext: any, page: string) {
		vuexContext.commit('setPage', page)
	}
}

const getters = {
	getPage(state: { page: string }) {
		return state.page
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}
