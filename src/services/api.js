import axios from 'axios'
import store from '../store'

export default () => {
    // Vuex variable that holds the access token
    const token = store.getters.token

    // API's base URL
    axios.defaults.baseURL = ''

    // CORS-related boolean variable
    axios.defaults.withCredentials = true

    // Request headers
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

    return axios
}
