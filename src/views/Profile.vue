<template>
    <div>
        <content-header
        title="Perfil do Usuário"
        subtitle="Cansado da sua foto? Perdeu o seu e-mail? Mude o que precisar conosco."/>
        <div class="mt-4 row no-gutters justify-content-center">
            <div
            id="profile"
            class="card p-3">
                <div class="row align-items-center text-center text-md-left">
                    <div class="text-center text-md-left col-12 col-md-4 col-lg-3">
                        <b-img
                        class="profile-img"
                        fluid
                        v-b-tooltip.hover.bottom title="Editar Imagem de Perfil"
                        :src="getImage()"/>
                    </div>
                    <div class="col-12 col-md-4 col-lg-5">
                        <div class="mb-1">
                            <span class="h4 mr-2">{{ name ? name : 'Nome' }}</span>
                        </div>
                        <div class="mb-1">
                            <span class="h5 text-secondary">{{ company ? company : 'Empresa' }}</span>
                        </div>
                        <div class="mb-4">
                            <span class="text-muted">
                                <font-awesome-icon
                                :icon="['fas', 'map-marker-alt']"
                                fixed-width/>
                                São Paulo
                            </span>
                        </div>
                        <div class="mb-2">
                            <span class="h6 text-bold mr-2">Usuário:</span>
                            <span class="text-muted">{{ username ? username : 'user.name' }}</span>
                        </div>
                        <div class="mb-4">
                            <span class="h6 text-bold mr-2">E-mail:</span>
                            <span class="text-muted">teste@teste.com</span>
                        </div>
                    </div>
                    <div class="text-md-right col-12 col-md-4 col-lg-4">
                        <b-button
                        block
                        class="mb-2 mr-2"
                        type="submit"
                        variant="primary">
                            <font-awesome-icon
                            :icon="['fas', 'user-edit']"
                            fixed-width/>
                                <span class="ml-1">Editar Perfil</span>
                        </b-button>
                        <b-button
                        block
                        class="mb-2 mr-2"
                        type="submit"
                        variant="danger">
                            <font-awesome-icon
                            :icon="['fas', 'user-lock']"
                            fixed-width/>
                                <span class="ml-1">Editar Admin</span>
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ContentHeader from '@/components/board/content/ContentHeader'

export default {
    name: 'Profile',
    components: {
        ContentHeader
    },
    computed: {
        ...mapGetters(['username', 'name', 'company'])
    },
    methods: {
        getImage () {
            return require('@/assets/img/no_profile.png')
        }
    }
}
</script>

<style lang="scss" scoped>
.profile-img {
    width: 190px;
    transition: $transition;
    &:hover {
        cursor: pointer;
        opacity: $opacity;
    }
}

@media screen and (max-width: $view-lg) {
    #profile {
        flex: 1 1 auto;
    }
}
</style>