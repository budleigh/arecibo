import Vue from 'vue'
import Vuex from 'vuex'

import UserModule from './user'
import FormsModule from './forms'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        globalErrors: [],
    },

    actions: {
        // does this make any sense as an action?
        updateLocalStorage (_, obj) {
            debugger
            const storage = window.localStorage
            for (let key in obj) {
                storage.setItem(key, obj[key])
            }
        },
    },

    modules: {
        user: UserModule,
        forms: FormsModule,
    },
})
