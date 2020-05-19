<template>
    <router-link
    :class="{ 'activated': isCurrentRoute() }"
    tag="li"
    :to="route">
        <a class="sidebar-menu-item">
            <span
            id="icon"
            class="sidebar-menu-item-icon"
            v-b-tooltip.hover.right :title=title>
                <font-awesome-icon
                :icon="['fas', icon]"
                fixed-width/>
            </span>
            <span class="sidebar-menu-item-title">
                {{ title }}
            </span>
        </a>
    </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TheSidebarMenuItem',
    props: {
        'title': {
            type: String,
            required: true
        },
        'icon': {
            type: String,
            required: true
        },
        'route': {
            type: String,
            required: true
        }
    },
    computed : {
        ...mapGetters(['isSidebarCollapsed'])
    },
    methods: {
        isCurrentRoute () {
            let currentRoute = null
            const splitRoute = this.$route.path.split('/')

            if (splitRoute[2]) {
                currentRoute = '/' + splitRoute[1] + '/' + splitRoute[2]
            } else {
                currentRoute = this.$route.path
            }

            if (currentRoute === this.route) {
                return true
            }
            return false
        }
    },
    mounted () {
        this.$root.$emit('bv::disable::tooltip', 'icon')
        this.$emit('active', this.isCurrentRoute())
    },
    watch: {
        isSidebarCollapsed: function () {
            if (!this.isSidebarCollapsed) {
                this.$root.$emit('bv::disable::tooltip', 'icon')
            } else {
                this.$root.$emit('bv::enable::tooltip', 'icon')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar-menu-item {
    color: $white-color;
    display: flex;
    opacity: $opacity;
    padding: 0.75rem 1.6rem;
    text-decoration: none;
    transition: $transition;
    &:hover {
        color: $main-color;
        opacity: 1;
    }
    &-icon {
        font-size: $font-size * 0.85;
        margin-right: 0.85rem;
        text-align: center;
        width: 30px;
    }
    &-title {
        font-size: $font-size * 0.85;
    }
}

.activated {
    .sidebar-menu-item {
        color: $main-color;
        opacity: 1;
        ::before {
            border-right: 0.75rem solid $bg-main-color;
            border-top: 0.75rem solid transparent;
            border-bottom: 0.75rem solid transparent;
            content: "";
            cursor: default;
            position: absolute;
            right: -2px;
        }
    }
}

.collapsed {
    .sidebar-menu-item {
        justify-content: center;
        &-icon {
            margin-right: 0;
        }
        &-title {
            display: none;
        }
    }
}

@media screen and (max-width: $view-md) {
    .sidebar-menu-item {
        &-title {
            display: none;
        }
    }
}
</style>

