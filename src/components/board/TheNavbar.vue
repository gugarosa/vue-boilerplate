<template>
    <div class="navbar-custom">
        <div class="navbar-custom-brand">
            <img src="../../assets/img/logo.png" width="40px">
        </div>
        <font-awesome-icon
        id="toggler"
        class="navbar-custom-icon"
        @click="setSidebarCollapse()"
        :icon="['fas', 'toggle-off']"
        fixed-width/>
        <search-item
        id="search"
        class="navbar-custom-icon mr-auto"/>
        <dropdown/>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

import Dropdown from '@/components/board/navbar/Dropdown'
import SearchItem from '@/components/board/navbar/SearchItem'

export default {
    name: 'TheNavbar',
    components: {
        Dropdown,
        SearchItem
    },
    methods: {
        ...mapMutations(['setSidebarCollapse'])
    }
}
</script>

<style lang="scss" scoped>
.navbar-custom {
    align-items: center;
    background-color: $bg-navbar-color;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.13);
    display: flex;
    font-size: $font-size * 1.2;
    padding: 0.88rem;
    &-icon {
        margin-left: 1.5rem;
        transition: $transition;
        &:hover {
            color: $secondary-color;
            cursor: pointer;
        }
    }
    &-brand, &-icon#toggler {
        display: none;
    }
    &-icon#search {
        margin-left: 0;
    }
}

.expanded {
    .navbar-custom {
        padding: 1.15rem;
    }
}

@media screen and (max-width: $view-md) {
    .navbar-custom {
        padding: 0.37rem 0.75rem;
        &-brand, &-icon#toggler {
            display: inline;
        }
        &-icon#search {
            margin-left: 1.5rem;
        }
    }

    .expanded {
        .navbar-custom {
            padding: 0.37rem 0.75rem;
            &-icon#toggler {
                display: none;
            }
            &-icon#search {
                margin-left: 1rem;
            }
        }
    }
}

@media screen and (max-width: $view-xxs) {
    .navbar-custom {
        justify-content: space-around;
        &-icon {
            margin-left: 1rem;
        }
    }
    .mr-auto {
        display: none;
    }
}
</style>

