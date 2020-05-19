<template>
    <div
    class="sidebar-menu">
        <span
        class="sidebar-menu-head"
        :class="[isMenuExpanded ? 'expanded' : null]"
        @click="activateMenu(key)"
        aria-controls="sidebar-menu-collapse"
        :aria-expanded="isMenuExpanded ? 'true' : 'false'">
            <span class="sidebar-menu-head-icon">
                <font-awesome-icon
                :icon="['fas', icon]"
                fixed-width/>
            </span>
            <span class="sidebar-menu-head-title ml-3 mr-auto">
                {{ title }}
            </span>
            <font-awesome-icon
            :icon="['fas', 'angle-down']"
            fixed-width/>
            <font-awesome-icon
            :icon="['fas', 'angle-up']"
            fixed-width/>
        </span>
        <b-collapse
        id="sidebar-menu-collapse"
        v-model="isMenuExpanded">
            <ul class="sidebar-menu-list">
                <the-sidebar-menu-item
                v-for="item in items"
                v-on:active="checkIfCurrentRoute"
                :title="item.title"
                :icon="item.icon"
                :route="item.route"
                :key="item.id"/>
            </ul>
        </b-collapse>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

import TheSidebarMenuItem from '@/components/board/sidebar/TheSidebarMenuItem'

export default {
    name: 'TheSidebarMenu',
    components: {
        TheSidebarMenuItem
    },
    props: {
        'title': {
            type: String,
            required: true
        },
        'icon': {
            type: String,
            required: true
        },
        'items': {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapGetters(['whichSidebarMenuActive'])
    },
    mounted () {
        this.isMenuExpanded = this.isCurrentRoute
    },
    data () {
        return {
            isCurrentRoute: '',
            isMenuExpanded: false,
            key: this.$vnode.key
        }
    },
    methods: {
        ...mapMutations(['setSidebarMenuActive']),

        activateMenu (key) {
            this.setSidebarMenuActive(key)
        },

        checkIfCurrentRoute (boolean) {
            if (this.isCurrentRoute) {
                return true
            }
            this.isCurrentRoute = boolean
        }
    },
    watch: {
        whichSidebarMenuActive: function () {
            if (this.key === this.whichSidebarMenuActive) {
                this.isMenuExpanded = true
            } else {
                this.isMenuExpanded = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar-menu {
    &-head {
        align-items: center;
        display: flex;
        opacity: $opacity;
        padding: 1rem 1.75rem 0.5rem 1.75rem;
        transition: $transition;
        &:hover {
            cursor: pointer;
            opacity: 1;
        }
        &-icon {
            font-size: $font-size * 1.25;
        }
        &-title {
            font-size: $font-size * 0.8;
            font-weight: $font-weight + 200;
            text-transform: uppercase;
        }
    }
    &-list {
        list-style: none;
        margin: 0;
        padding: 0; 
    }
}

.collapsed {
    .sidebar-menu {
        &-head {
            flex-direction: column;
            &-title {
                display: none;
            }
        }
    }
}

.expanded {
    color: $main-color;
    opacity: 1;
}

.expanded > .fa-angle-down, :not(.expanded) > .fa-angle-up {
    display: none;
}

@media screen and (max-width: $view-md) {
    .sidebar-menu {
        &-head {
            &-title {
                display: none;
            }
        }
    }
}
</style>

