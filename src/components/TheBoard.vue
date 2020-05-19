<template>
    <div class="board">
        <div
        class="board-sidebar"
        :class="{ 'collapsed': isSidebarCollapsed }">
            <the-sidebar/>
        </div>
        <div class="board-main">
            <div
            class="board-main-navbar"
            :class="{ 'expanded': isSidebarCollapsed }">
                <the-navbar/>
            </div>
            <div class="board-main-content">
                <router-view/>
            </div>
        </div>
        <notification/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TheNavbar from '@/components/board/TheNavbar'
import TheSidebar from '@/components/board/TheSidebar'
import Notification from '@/components/utils/Notification'

export default {
    name: 'TheBoard',
    components : {
        TheNavbar,
        TheSidebar,
        Notification
    },
    computed: {
        ...mapGetters(['isSidebarCollapsed'])
    }
}
</script>

<style lang="scss" scoped>
.board {
    align-items: stretch;
    display: flex;
    &-sidebar {
        max-width: $sidebar-size;
    }
    &-main {
        display: flex;
        flex-flow: column;
        width: 100%;
        &-content {
            background-color: $bg-main-color;
            height: 100%;
            padding: 2.25rem;
        }
    }
}

.collapsed {
    min-width: $sidebar-size-collapse;
    max-width: $sidebar-size-collapse;
}

@media screen and (max-width: $view-md) {
    .board {
        &-sidebar {
            width: 0% !important;
        }
        &-main {
            &-content {
                padding: 1.25rem;
            }
        }
    }
}
</style>

