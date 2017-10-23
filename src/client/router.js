import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/landing' },
    { path: '/landing', component: Landing },
    { path: '/home', component: Home },
]

export default new VueRouter({
    routes
})
