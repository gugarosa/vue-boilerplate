<template>
    <div class="error">
        <font-awesome-icon
        :icon="['fas', 'exclamation-triangle']"
        class="mb-4 text-primary"
        size="6x"
        fixed-width/>
        <h2 class="mt-4 mb-4">Oops! Erro 404 encontrado.</h2>
        <small class="mb-1">A página que você está procurando não existe mais.</small>
        <small>Você será redirecionado em <span class="text-secondary"><b>{{ 5 - elapsedTime }}</b></span> segundos.</small>
    </div>
</template>

<script>
export default {
    name: 'The404',
    data () {
        return {
            creationTime: 0,
            elapsedTime: 0,
            redirectTime: 5
        }
    },
    methods: {
        getCurrentTime () {
            return Math.trunc((new Date()).getTime() / 1000)
        }
    },
    mounted () {
        // Creates an 404 path variable holding application full path
        let path404 = this.$route.fullPath

        // When component is mounted, change its creation time to current time
        this.creationTime = this.getCurrentTime()

        // Creates an intervalId to hold the actual time
        let intervalId = null

        // Sets an windows interval to exactly count the time
        intervalId = window.setInterval(() => {
            // Check elapsed time
            this.elapsedTime = this.getCurrentTime() - this.creationTime
            // Waits for 5 seconds and replace its route
            if (this.elapsedTime === this.redirectTime && this.$route.fullPath === path404) {
                // Replaces router to initial page
                this.$router.replace('/')
                // Clear interval variable
                clearInterval(intervalId)
            }
        }, 1000)
    }
}
</script>

<style lang="scss" scoped>
.error {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
}

h2 {
    text-transform: uppercase;
}



@media screen and (max-width: $view-xxs) {
    h2 {
        font-size: $font-size * 1.5;
    }
    h4 {
        font-size: $font-size;
    }
    h6 {
        font-size: $font-size * 0.75;
    }
}
</style>
