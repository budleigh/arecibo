import $ from 'jquery'
import _ from 'underscore'

export default {
    state: {
        auth: {
            fields: {
                email: '',
                password: '',
                auth_type: 'up',
            },
            endpoint: '/auth/',
            method: 'POST',
        },
    },

    actions: {
        submit ({commit, state}, {form, success, error}) {
            const url = state[form].endpoint
            $.ajax({
                url,
                data: JSON.stringify(_.omit(state[form].fields, '__ob__')),
                method: state[form].method,
                contentType: 'application/json',
                success,
                error,
            })
        },
    },

    mutations: {
        updateField (state, {form, field, val}) {
            state[form].fields[field] = val
        },
    },
}
