import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './modules/app'
import crumb from './modules/crumb'
import sidebar from './modules/sidebar'

// Vuex packages to be used
Vue.use(Vuex)

// Check if environment is production-ready or not
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    // Note that a module is constructed by 4 main structures:
    // - state: basic variables that operates Vuex
    // - getters: functions to return states
    // - mutations: if you ever net to set a new value to a state
    // - actions: you can also perform async operations, wrapping mutations into commit and dispacthing them
    modules: {
        app,
        crumb,
        sidebar
    },
    strict: debug
})
