<template>
    <div>
        <router-link to="/">
                <font-awesome-icon
                :icon="['fas', 'home']"
                fixed-width/>
        </router-link>
        <b-breadcrumb :items="crumbArray"></b-breadcrumb>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'Breadcrumb',
    computed: {
        ...mapGetters(['crumbArray'])
    },
    created () {
        this.getCrumbs()
    },
    methods: {
        ...mapMutations(['resetCrumbArray', 'pushCrumbArray']),

        // This is the method that computes the actual crumbs
        getCrumbs () {
            // Every time we call this method, we reset the crumbs
            this.resetCrumbArray()

            // We define a path variable as an empty string
            let path = ''

            // We also split the current route to iterate over it
            let splitCurrentRoute = this.$route.path.split('/')

            // If there is a meta route defined, we use it
            let metaRoute = (this.$route.meta.crumbs || '').split('/')

            // Iterate over splitted route
            for (let i = 1; i < metaRoute.length; i++) {
                // Define a crumb variable as either the meta route or a piece of the splitted route
                let crumb = metaRoute[i] || splitCurrentRoute[i]

                // If splitted route is null, please continue
                if (splitCurrentRoute[i] === '') {
                    continue
                }

                // We rebuild the path with split routes
                path += '/' + splitCurrentRoute[i]

                // Finally, we keep adding the current crumb to Vuex's crumbArray
                this.pushCrumbArray({
                    text: crumb,
                    to: path,
                    active: true
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
    background-color: transparent;
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        display: inline-block;
    }
}

a {
    color: $black-color;
    text-decoration: none;
    transition: $transition;
    &:hover {
        color: $secondary-color;
        text-decoration: none;
    }
}
</style>
