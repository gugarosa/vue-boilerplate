<template>
    <div
    class="sidebar"
    :class="{ 'collapsed': isSidebarCollapsed }">
        <the-sidebar-header/>
        <hr class="sidebar-divider">
        <the-sidebar-info/>
        <hr class="sidebar-divider">
        <the-sidebar-menu
        v-for="menu in sidebarMenu"
        :title="menu.title"
        :icon="menu.icon"
        :items="menu.items"
        :key="menu.id"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { sidebarMenu } from '@/configs/sidebar'

import TheSidebarHeader from '@/components/board/sidebar/TheSidebarHeader'
import TheSidebarInfo from '@/components/board/sidebar/TheSidebarInfo'
import TheSidebarMenu from '@/components/board/sidebar/TheSidebarMenu'

export default {
    name: 'TheSidebar',
    components: {
        TheSidebarHeader,
        TheSidebarInfo,
        TheSidebarMenu
    },
    computed: {
        ...mapGetters(['isSidebarCollapsed'])
    },
    data () {
        return {
            sidebarMenu: sidebarMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    background-color: $bg-sidebar-color;
    color: $white-color;
    height: 100%;
    min-height: 100vh;
    min-width: $sidebar-size;
    position: relative;
    transition: $sidebar-transition-collapse;
}

@media screen and (max-width: $view-md) {
    .sidebar {
        min-width: $sidebar-size-collapse;
        transform: translateX(-100%);
    }
    .collapsed {
        transform: translateX(0%);
    }
}
</style>
