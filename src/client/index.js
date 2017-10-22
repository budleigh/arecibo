import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Landing from './components/Landing.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

function initializeRouter () {
    const routes = [
        { path: '/landing', component: Landing },
    ]
    return new VueRouter({
        routes
    })
}

const router = initializeRouter()

new Vue({
    el: '#app',
    render: h => h(App),
})
