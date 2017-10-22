<template>
    <div>
       <h3>{{ welcomeMessage }}</h3>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                welcomeMessage: 'Home!',
            }
        },

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
