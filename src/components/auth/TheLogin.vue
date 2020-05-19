<template>
    <div class="login">
        <div class="login-header mb-4">
            <img src="../../assets/img/logo.png" width="45px">
            <h3 class="mb-0">{{ appName }}</h3>
        </div>
        <div class="card">
            <div class="card-body">
                <div  class="mb-4">
                    <h4>Log In</h4>
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
                    <div class="row justify-content-between no-gutters form-group mb-4">
                        <b-form-checkbox switch>
                            <small>Lembrar-me</small>
                        </b-form-checkbox>
                        <router-link
                        class="card-body-link"
                        to="/forgot">
                            <small>Esqueceu sua senha?</small>
                        </router-link>
                        
                    </div>
                    <div class="form-group mb-4">
                        <b-button
                        block
                        variant="secondary"
                        @click="onLoginSubmit">
                            <font-awesome-icon
                            :icon="['fas', 'sign-in-alt']"
                            fixed-width/>
                            Entrar
                        </b-button>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'TheLogin',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters(['appName', 'status'])
    },
    methods: {
        ...mapActions(['login']),

        onLoginSubmit () {
            let data = {
                email: this.email,
                password: this.password
            }

            this.login(data).then(
                () => {
                    this.$router.push('/')
                },
                () => {
                    sessionStorage.removeItem('access_token')
                    this.$swal({
                        type: 'error',
                        title: 'Oops!',
                        text: 'Não foi possível realizar o seu login. Por favor, tente novamente.',
                        buttonsStyling: false,
                        customClass: {
                            'confirmButton': 'btn btn-lg btn-secondary'
                        }
                    })
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
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

.custom-switch {
    padding-right: 2.25rem;
}
</style>
