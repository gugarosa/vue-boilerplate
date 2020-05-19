<template>
    <div class="forgot">
        <div class="forgot-header mb-4">
            <img src="../../assets/img/logo.png" width="50px">
            <h3 class="mb-0">{{ appName }}</h3>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="text-left mb-4">
                    <h4>Recupere sua senha</h4>
                    <small>
                        Perdeu a sua senha ou não consegue se lembrar mesmo dela?
                        <br>
                        É só preencher a seguir e lhe enviaremos outra!
                    </small>
                </div>
                <b-form>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span
                                class="input-group-text"
                                id="email">
                                    <font-awesome-icon
                                    :icon="['fas', 'envelope']"
                                    fixed-width/>
                                </span>
                            </div>
                            <b-form-input
                            v-model="email"
                            type="text"
                            placeholder="E-mail"
                            aria-label="E-mail"
                            aria-describedby="email" required>
                            </b-form-input>
                        </div>
                    </div>
                    <div class="form-group mb-4">
                        <b-button
                        block
                        variant="secondary">
                            <font-awesome-icon
                            :icon="['fas', 'unlock']"
                            fixed-width/>
                            Resetar Senha
                        </b-button>
                    </div>
                </b-form>
                <hr>
                <div class="row align-items-center justify-content-between no-gutters">
                    <router-link
                    class="card-body-link"
                    to="/login">
                        <small>Quer voltar ao login?</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TheForgotPassword',
    data () {
        return {
            email: ''
        }
    },
    computed: {
        ...mapGetters(['appName'])
    }
}
</script>

<style lang="scss" scoped>
.forgot {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    &-header {
        align-items: center;
        display: flex;
        flex-direction: row;
    }
}

.card {
    &-body {
        &-link {
            color: $black-color;
            text-decoration: none;
            transition: $transition;
            &:hover {
                color: $primary-color;
                cursor: pointer;
            }
        }
    }
}
</style>
