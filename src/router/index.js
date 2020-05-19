// Vue
import Vue from 'vue'

// VueRouter
import Router from 'vue-router'

// Components
import TheBoard from '@/components/TheBoard'
import TheForgotPassword from '@/components/auth/TheForgotPassword'
import TheLogin from '@/components/auth/TheLogin'
import TheRegister from '@/components/auth/TheRegister'
import The404 from '@/components/utils/The404'

// Views
import Dashboard from '@/views/Dashboard'
import Profile from '@/views/Profile'

// Using package
Vue.use(Router)

// Exporting VueRouter router
export default new Router({
    routes: [
        {
            path: '/forgot',
            component: TheForgotPassword
        },
        {
            path: '/login',
            component: TheLogin
        },
        {
            path: '/register',
            component: TheRegister
        },
        {
            path: '/',
            component: TheBoard,
            children: [
                {
                    path: '',
                    component: Dashboard,
                    name: 'dashboard',
                    meta: {
                        crumbs: '/Dashboard/Dashboard'
                    }
                },
                {
                    path: '/profile',
                    component: Profile,
                    name: 'profile',
                    meta: {
                        crumbs: '/Meu Perfil'
                    }
                }
            ]
        },
        {
            path: '*',
            component: The404,
            name: '404'
        }
    ]
})
