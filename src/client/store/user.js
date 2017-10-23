import $ from 'jquery'

export default {
    state: {
        email: null,
        loggedIn: false,
        token: null,
    },

    mutations: {
        login (state, {email, token}) {
            state.email = email
            state.loggedIn = true
            state.token = token
        },

        logout (state) {
            state.email = null
            state.loggedIn = false
            state.token = null
        },
    },
}
