module.exports = {
    methods: {
        updateField (e) {
            this.$store.commit('updateField', {
                form: 'auth',
                field: e.target.name,
                val: e.target.value,
            })
        },
    }
}
