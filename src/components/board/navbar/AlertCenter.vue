<template>
    <b-dropdown
    id="alert-center"
    class="alert-center"
    variant="link"
    right
    no-caret>
        <template slot="button-content">
            <font-awesome-layers fixed-width>
                <font-awesome-icon :icon="['fas', 'bell']"/>
                <font-awesome-layers-text
                class="fa-layers-counter"
                transform="shrink-6 down-4 right-1" value="3"/>
            </font-awesome-layers>
        </template>
        <b-dropdown-header>Central de Alertas</b-dropdown-header>
        <b-dropdown-item
        class="p-0"
        v-for="alert in alerts.slice(0,3)"
        :key="alert.id">
            <div class="row align-items-center alert-center-item no-wrap">
                <div class="mr-3">
                    <font-awesome-icon 
                    :class=getTypeClass(alert.type)
                    :icon="['fas', alert.icon]"
                    fixed-width/>
                </div>
                <div>
                    <div class="small text-muted">{{ alert.date }}</div>
                    <span>{{ alert.text }}</span>
                </div>
            </div>
            <b-dropdown-divider/>
        </b-dropdown-item>
        <b-dropdown-item class="alert-center-footer p-2 text-center text-muted">
            <small>Ver mais alertas</small>
        </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
    name: 'AlertCenter',
    data () {
        return {
            alerts: [
                {
                    date: '12 de Abril de 2019',
                    icon: 'bell',
                    text: 'Um alerta é um simples aviso para o usuário.',
                    type: 'secondary'
                },
                {
                    date: '15 de Abril de 2019',
                    icon: 'database',
                    text: 'Lembre-se sempre de não utilizar informações complexas nos avisos.',
                    type: 'danger'
                },
                {
                    date: '15 de Abril de 2019',
                    icon: 'exclamation-triangle',
                    text: 'Um número máximo de alertas poderá ser utilizado.',
                    type: 'warning'
                }
            ]
        }
    },
    methods: {
        getTypeClass(type) {
            return 'text-' + type
        }
    }
}
</script>

<style lang="scss" scoped>
.alert-center {
    &-item {
        flex-wrap: nowrap;
        font-size: $font-size * 0.9;
        margin: 0 1.25rem;
        padding: 0.5rem 0;
        white-space: normal;
    }

}
</style>