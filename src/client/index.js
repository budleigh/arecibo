import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import Landing from './components/Landing.vue'
import Home from './components/Home.vue'
import store from './store/'
import router from './router'
import vuexform from './mixins/vuex_form'

Vue.mixin(vuexform)  // drops 'updateField'

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
})
