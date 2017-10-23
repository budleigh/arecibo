<template>
    <div>
        <h3>{{ message }}</h3>
        <h5>{{ email }}</h5>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data () {
            return {
                message: 'Home!',
            }
        },

        computed: mapState({
            email: state => state.user.email,
        }),

        // route guards
        beforeRouteEnter (rto, rfrom, next) {
            next(vm => {
                !vm.$store.state.user.loggedIn
                    ? next('/landing')
                    : next(true)
            })
        }
    }
</script>

<style>
</style>
