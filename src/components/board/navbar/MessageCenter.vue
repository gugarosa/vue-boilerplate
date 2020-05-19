<template>
    <b-dropdown
    id="message-center"
    class="message-center"
    variant="link"
    right
    no-caret>
        <template slot="button-content">
            <font-awesome-layers
            class="navbar-custom-icon"
            fixed-width>
                <font-awesome-icon :icon="['fas', 'envelope']"/>
                <font-awesome-layers-text
                class="fa-layers-counter fa-layers-counter-darkest"
                transform="shrink-6 down-4 right-2" value="2"/>
            </font-awesome-layers>
        </template>
        <b-dropdown-header>Central de Mensagens</b-dropdown-header>
        <b-dropdown-item
        class="p-0"
        v-for="message in messages.slice(0,3)"
        :key="message.id">
            <div class="row align-items-center message-center-item no-wrap">
                <div class="mr-3">
                    <img src="../../../assets/img/no_profile.png" width="40px">
                </div>
                <div class="message-center-item-text">
                    <span>{{ message.text }}</span>
                    <div class="small text-muted">{{ message.from }} - {{ message.time }}</div>
                </div>
            </div>
            <b-dropdown-divider/>
        </b-dropdown-item>
        <b-dropdown-item class="message-center-footer p-2 text-center text-muted">
            <small>Ler mais mensagens</small>
        </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
    name: 'MessageCenter',
    data () {
        return {
            messages: [
                {
                    from: 'Boilerplate',
                    text: 'Olá! Como você está? Sou uma mensagem do sistema.',
                    time: '58m'
                },
                {
                    from: 'Gustavo Rosa',
                    text: 'Lembre-se sempre de não utilizar informações complexas nos avisos.',
                    time: '3h'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.message-center {
    &-item {
        flex-wrap: nowrap;
        font-size: $font-size * 0.9;
        margin: 0 1.25rem;
        padding: 0.5rem 0;
        white-space: normal;
        &-text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>