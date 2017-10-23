function userInitialStoreBuilder () {
    return {
        email: window.localStorage.email,
        loggedIn: window.localStorage.email !== undefined,
        token: window.localStorage.token,
    }
}

export default {
    state: userInitialStoreBuilder(),

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
