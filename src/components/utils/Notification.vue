<template>
    <notifications
    position="bottom right"
    group="helper">
        <template slot="body" slot-scope="props">
            <div
            class="vue-notification-template vue-notification"
            :class="props.item.type">
                <div class="row align-items-center">
                    <div class="col-2">
                        <font-awesome-icon
                        size="2x"
                        :icon="['fas', props.item.data.icon]"
                        fixed-width/>
                    </div>
                    <div class="col-8">
                        <div class="title">
                            <b>{{ props.item.title }}</b>
                        </div>
                        <div v-html="props.item.text">
                        </div>
                    </div>
                    <div class="col-2">
                        <div
                        class="close"
                        @click="props.close">
                            <font-awesome-icon
                            size="xs"
                            :icon="['fas', 'times']"
                            fixed-width/>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </notifications>
</template>

<script>
import { notificationHelpers } from '@/configs/notification'
export default {
    name: 'Notification',
    data () {
        return {
            interval: null,
            intervalTime: 1000000
        }
    },
    methods: {
        getRandomHelper () {
            // Getting current route
            let route = this.$route.name

            // Finding current route-related helper
            let helpers = notificationHelpers[route]

            // Getting a random helper
            let randomRouteHelper = helpers[Math.floor(Math.random() * helpers.length)]

            this.$notify({
                group: 'helper',
                data: {
                    'icon': randomRouteHelper.icon
                },
                duration: 7500,
                type: randomRouteHelper.type,
                title: randomRouteHelper.title,
                text: randomRouteHelper.text
            })
        }
    },
    mounted () {
        // Creates an interval of desired seconds
        this.interval = window.setInterval(function () {
            // Calls a random helper notification based on route
            this.getRandomHelper()
        }.bind(this), this.intervalTime)
    },
    beforeDestroy () {
        // Destroys the interval when destroying this component
        window.clearInterval(this.interval)
    }
}
</script>

<style lang="scss" scoped>
</style>

