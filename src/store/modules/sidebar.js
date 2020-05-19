const state = {
    active: undefined,
    collapsed: false,
}

const getters = {
    isSidebarCollapsed: state => state.collapsed,
    whichSidebarMenuActive: state => state.active
}

const mutations = {
    setSidebarCollapse (state) {
        state.collapsed = !state.collapsed
    },
    setSidebarMenuActive (state, key) {
        if (state.active === key) {
            state.active = undefined
        } else {
            state.active = key
        }
    }
}

const actions = {
    setSidebarCollapse ({commit}, collapsed) {
        commit('setSidebarCollapse', collapsed)
    },
    setSidebarMenuActive ({commit}, active) {
        commit('setSidebarMenuActive', active)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
