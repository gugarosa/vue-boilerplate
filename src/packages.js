import Vue from 'vue'
import _ from 'lodash'
import Collapse from 'bootstrap-vue'
import Notifications from 'vue-notification'
import VueSweetalert2 from 'vue-sweetalert2'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

// Assets (.css, .scss or .js) to be imported
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/_main.scss'

// Adding to FA's library
library.add(fas)

// Instanciating components
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

// Using components
Vue.use(Collapse)
Vue.use(Notifications)
Vue.use(VueSweetalert2, {
    'heightAuto': false
})

// Vue properties to be defined
Object.defineProperty(Vue.prototype, '_', { value: _ })