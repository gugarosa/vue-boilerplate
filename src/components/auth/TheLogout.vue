<template>
    <div @click="onLogoutSubmit()">
        <font-awesome-icon
        fixed-width
        :icon="['fas', 'sign-out-alt']"/>
        Sair
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'TheLogout',
    methods: {
        ...mapActions(['logout', 'saveStatus']),
        
        onLogoutSubmit () {
            this.saveStatus('loading')

            this.logout().then(
                () => {
                    this.$router.replace('/login')
                },
                err => {
                    this.saveStatus('error')
                    console.log(err)
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
