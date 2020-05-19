<template>
    <span class="navbar-dropdown">
        <b-dropdown
        id="dropdown"
        offset="-70"
        :text="username ? username : 'user.name'"
        variant="link">
            <b-dropdown-item>
                <router-link
                tag="div"
                to="/profile">
                    <div>
                        <font-awesome-icon
                        fixed-width
                        :icon="['fas', 'user']"
                        @click="onLogoutSubmit()"/>
                        Meu Perfil
                    </div>
                </router-link>
            </b-dropdown-item>
            <b-dropdown-item>
                <the-logout></the-logout>
            </b-dropdown-item>
        </b-dropdown>
    </span>
</template>

<script>
import { mapGetters } from 'vuex'

import TheLogout from '@/components/auth/TheLogout'

export default {
    name: 'NavbarDropdown',
    components: {
        TheLogout
    },
    computed: {
        ...mapGetters(['username'])
    }
}
</script>

<style lang="scss" scoped>
.dropdown-item {
    font-size: 14px;
    padding: 0.5rem 1.5rem;
    &:hover {
        background-color: lighten($bg-sidebar-color, 50%);
    }
}
</style>
