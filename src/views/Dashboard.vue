<template>
    <div>
        <content-header
        class="mb-3"
        title="Dashboard"
        subtitle="Seja bem-vindo ao seu painel de controle! O que deseja consultar?"/>
        <div class="row">
        </div>
    </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

import ContentHeader from '@/components/board/content/ContentHeader'

export default {
    name: 'Dashboard',
    components: {
        ContentHeader
    }
}
</script>

<style lang="scss" scoped>
</style>