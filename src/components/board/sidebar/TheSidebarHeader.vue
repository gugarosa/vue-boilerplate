<template>
    <div class="sidebar-header">
        <div class="sidebar-header-logo">
            <img src="../../../assets/img/logo_alt.png">
        </div>
        <div class="sidebar-header-title ml-1">
            {{ appName }}
        </div>
        <font-awesome-icon
        class="sidebar-header-toggler"
        @click="setSidebarCollapse"
        :icon="['fas', togglerIcon]"
        fixed-width/>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'TheSidebarHeader',
    computed: {
        ...mapGetters(['appName', 'isSidebarCollapsed']),
    },
    data () {
        return {
            togglerIcon: 'toggle-off'
        }
    },
    methods: {
        ...mapMutations(['setSidebarCollapse'])
    },
    watch: {
        isSidebarCollapsed: function () {
            if (this.isSidebarCollapsed) {
                this.togglerIcon = 'toggle-on'
            } else {
                this.togglerIcon = 'toggle-off'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar-header {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: $font-size * 1.2;
    justify-content: center;
    padding: 0.75rem;
    &-logo > img {
        min-width: 40px;
        width: 40px;
    }
    &-title {
        cursor: default;
        text-transform: uppercase;
    }
    &-toggler {
        margin-left: 0.5rem;
        transition: $transition;
        &:hover {
            color: $main-color;
            cursor: pointer;
        }
    }
}

.collapsed {
    .sidebar-header {
        flex-direction: column;
        padding: 0.6rem;
        &-logo > img {
            margin-bottom: 0.25rem;
            min-width: 30px;
            width: 30px;
        }
        &-title {
            display: none;
        }
        &-toggler {
            color: $main-color;
            margin-left: 0rem;
        }
    }
}

@media screen and (max-width: $view-md) {
    .sidebar-header {
        padding: 1rem;
        &-logo, &-title {
            display: none;
        }
    }

    .collapsed {
        .sidebar-header {
            padding: 1rem;
        }
    }
}
</style>
