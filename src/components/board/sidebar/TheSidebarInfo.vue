<template>
    <div class="sidebar-info">
        <div class="sidebar-info-logo">
            <img src="../../../assets/img/no_profile.png">
        </div>
        <div class="sidebar-info-text ml-3">
            <span class="sidebar-info-text-user">{{ name ? name : 'Usuário' }}</span>
            <span class="sidebar-info-text-company">{{ company ? company : 'Empresa' }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TheSidebarInfo',
    computed: {
        ...mapGetters(['name', 'company'])
    }
}
</script>

<style lang="scss" scoped>
.sidebar-info {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 1rem;
    &-logo > img {
        border: 2px solid $main-color;
        border-radius: 100%;
        min-width: 45px;
        width: 45px;
    }
    &-text {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        &-user {
            font-size: $font-size * 0.9;
            font-weight: $font-weight + 200;
        }
        &-company {
            font-size: $font-size * 0.8;
        }
    }
}

.collapsed {
    .sidebar-info {
        &-text {
            display: none;
        }
    }
}

@media screen and (max-width: $view-md) {
    .sidebar-info {
        &-text {
            display: none;
        }
    }
}
</style>

