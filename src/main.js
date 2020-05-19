import Vue from 'vue'
import App from './App.vue'

// VueRouter
import router from './router'

// Vuex
import store from './store'

// External packages and assets
import './packages'

// Set if environment is production-ready or not
Vue.config.productionTip = false

// Define a new Vue application
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
