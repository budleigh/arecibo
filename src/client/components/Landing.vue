<template>
    <div>
        <h3>{{ title }}</h3>
        <form v-on:submit.prevent="onSubmit" id="auth_form" method="POST">
            <input @change="updateField" v-model="authType" type="radio" id="auth_type_up" name="auth_type" value="up" checked/>
            <label for="auth_type_up">Sign Up</label>
            <input @change="updateField" v-model="authType" type="radio" id="auth_type_in" name="auth_type" value="in"/>
            <label for="auth_type_in">Sign In</label>
            <input @input="updateField" type="text" name="email" id="email" placeholder="email"/>
            <input @input="updateField" type="password" name="password" id="password" placeholder="password"/>
            <input type="submit" value="Go"/>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Arecibo Landing Page',
                authType: 'up',
            }
        },

        methods: {
            onSubmit () {
                this.$store.dispatch('submit', {
                    form: 'auth',
                    success: res => {
                        this.$store.commit('login', res)
                        this.$router.push('/home')
                    },
                    error: res => {
                        this.$store.commit('error', res)
                    },
                })
            },

            updateField (e) {
                this.$store.commit('updateField', {
                    form: 'auth',
                    field: e.target.name,
                    val: e.target.value,
                })
            }
        },

        // route guards
        beforeRouteEnter (rto, rfrom, next) {
            next(vm => {
                vm.$store.state.user.loggedIn
                    ? next('/home')
                    : next(true)
            })
        },
    }
</script>

<style>
</style>
