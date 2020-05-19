<template>
    <div class="register">
        <div class="register-header mb-4">
            <img src="../../assets/img/logo.png" width="50px">
            <h3 class="mb-0">{{ appName }}</h3>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="mb-4">
                    <h4>Novo Usuário?</h4>
                    <small>
                        Primeiramente, seja bem-vindo ao Boilerplate.
                        <br>
                        A partir desta página todos os seus problemas serão resolvidos por nós.
                    </small>
                </div>
                <b-form>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span
                                class="input-group-text"
                                id="username">
                                    <font-awesome-icon
                                    :icon="['fas', 'user']"
                                    fixed-width/>
                                </span>
                            </div>
                            <b-form-input
                            v-model="username"
                            type="text"
                            placeholder="Escolha um usuário"
                            aria-label="Usuário"
                            aria-describedby="username" required>
                            </b-form-input>
                        </div>
                    </div>
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
                            placeholder="Seu endereço de e-mail"
                            aria-label="E-mail"
                            aria-describedby="email" required>
                            </b-form-input>
                        </div>
                    </div>
                    <div class="row justify-content-around">
                        <div class="form-group col-12 col-sm-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span
                                    class="input-group-text"
                                    id="password">
                                        <font-awesome-icon
                                        :icon="['fas', 'key']"
                                        fixed-width/>
                                    </span>
                                </div>
                                <b-form-input
                                v-model="password"
                                type="password"
                                placeholder="Senha"
                                aria-label="Senha"
                                aria-describedby="password" required>
                                </b-form-input>
                            </div>
                        </div>
                        <div class="form-group col-12 col-sm-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span
                                    class="input-group-text"
                                    id="confirm-password">
                                        <font-awesome-icon
                                        :icon="['fas', 'key']"
                                        fixed-width/>
                                    </span>
                                </div>
                                <b-form-input
                                v-model="confirmPassword"
                                type="password"
                                placeholder="Confirmar Senha"
                                aria-label="Confirmar Senha"
                                aria-describedby="confirm-password" required>
                                </b-form-input>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-12 col-sm-6 text-left mb-2">
                            <b-form-checkbox>
                                <small>Li e aceito os Termos & Condições.</small>
                            </b-form-checkbox>
                        </div>
                        <div class="col-12 col-sm-6 text-left text-sm-right mb-2">
                            <b-form-checkbox>
                                <small>Enviar a revista semanal.</small>
                            </b-form-checkbox>
                        </div>
                    </div>
                    <div class="form-group mb-4">
                        <b-button
                        block
                        variant="secondary">
                            <font-awesome-icon
                            :icon="['fas', 'external-link']"
                            fixed-width/>
                            Registrar
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
    name: 'TheRegister',
    data () {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    computed: {
        ...mapGetters(['appName'])
    }
}
</script>

<style lang="scss" scoped>
.register {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 2rem;
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
