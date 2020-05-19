const state = {
    appName: 'Boiler',
    appVersion: '1.0.0',
    name: 'Usuário',
    company: 'Empresa',
    username: 'user.name'
}

const getters = {
    appName (state) {
        return state.appName
    },
    appVersion (state) {
        return state.appVersion
    },
    name (state) {
        return state.name
    },
    company (state) {
        return state.company
    },
    username (state) {
        return state.username
    }
}

const mutations = {
}

const actions = {
}

export default {
    state,
    getters,
    mutations,
    actions
}
