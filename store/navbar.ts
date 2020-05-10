const state = () => ({
	isNavBarExpand: false
})

const mutations = {
	setNavBarStatus(state: { isNavBarExpand: boolean }, navBarExpandStatus: boolean) {
		state.isNavBarExpand = navBarExpandStatus
	}
}

const actions = {
	setNavBarStatus(vuexContext: any, navBarExpandStatus: boolean) {
		vuexContext.commit('setNavBarStatus', navBarExpandStatus)
	}
}

const getters = {
	getNavBarStatus(state: { isNavBarExpand: boolean }) {
		return state.isNavBarExpand
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}