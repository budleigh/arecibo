import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import Landing from './components/Landing.vue'
import Home from './components/Home.vue'
import store from './store/'
import vuexform from './mixins/vuex_form'

Vue.use(VueRouter)

Vue.mixin(vuexform)  // drops 'updateField'

function initializeRouter () {
    const routes = [
        { path: '/', redirect: '/landing' },
        { path: '/landing', component: Landing },
        { path: '/home', component: Home },
    ]
    return new VueRouter({
        routes
    })
}

const router = initializeRouter()

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
})
