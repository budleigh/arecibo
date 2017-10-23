import Vue from 'vue'
import Vuex from 'vuex'

import UserModule from './user'
import FormsModule from './forms'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        globalErrors: [],
    },
    modules: {
        user: UserModule,
        forms: FormsModule,
    },
})
