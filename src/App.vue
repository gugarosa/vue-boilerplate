<template>
    <div id="app">
        <!-- <loading-screen v-if="this.status === 'loading'"/> -->
        <router-view/>
    </div>
</template>

<script>
// import axios from 'axios'
// import store from './store'
// import router from './router'

import { mapGetters } from 'vuex'

// import LoadingScreen from '@/components/utils/LoadingScreen'

export default {
    name: 'App',
    components: {
        // LoadingScreen
    },
    computed: {
        ...mapGetters(['status'])
    },
    created () {
        // axios.interceptors.request.use(
        //     function (config) {
        //         if (store.getters.status !== 'loading') {
        //             store.commit('saveStatus', 'loading')
        //         }
        //         return config
        //     }
        // )

        // axios.interceptors.response.use(
        //     function (success) {
        //         store.commit('saveStatus', 'success')
        //         return Promise.resolve(success)
        //     },

        //     function (err) {
        //         store.commit('saveStatus', 'error')
        //         if (err.response) {
        //             if (err.response.status === 400) {
        //                 store.dispatch('logout')
        //                 router.replace('/login')
        //             }
        //         }
        //         return Promise.reject(err)
        //     }
        // )
    }
}
</script>

<style lang="scss">
#app {
    background-color: $bg-main-color;
    height: 100%;
}
</style>
