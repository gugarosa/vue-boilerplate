const state = {
    crumbArray: [{
        text: '',
        to: ''
    }]
}

const getters = {
    crumbArray (state) {
        return state.crumbArray
    }
}

const mutations = {
    popCrumbArray (state) {
        state.crumbArray.pop()
    },
    pushCrumbArray (state, crumb) {
        state.crumbArray.push(crumb)
    },
    resetCrumbArray (state) {
        state.crumbArray = [{
            text: '',
            to: ''
        }]
    }
}

const actions = {
}

export default {
    state,
    getters,
    mutations,
    actions
}
