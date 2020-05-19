<template>
    <div class="loading-screen">
        <font-awesome-layers
        class="loading-screen-icon"
        fixed-width>
            <font-awesome-icon
            class="loading-screen-icon-reverse"
            size="3x"
            :icon="['fas', 'spinner-third']"
            spin/>
            <font-awesome-icon
            class="loading-screen-icon-inside-reverse"
            size="3x"
            :icon="['fas', 'spinner-third']"
            transform="shrink-6"
            spin/>
            <font-awesome-icon
            class="loading-screen-icon-inside"
            size="3x"
            :icon="['fas', 'spinner-third']"
            transform="shrink-6"
            spin/>
            <font-awesome-icon
            class=""
            size="3x"
            :icon="['fas', 'spinner-third']"
            transform=""
            spin/>
        </font-awesome-layers>
    </div>
</template>

<script>
export default {
    name: 'LoadingScreen',
}
</script>

<style lang="scss" scoped>
.loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: $bg-loading-color;
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    &-icon {
        color: darken($white-color, 10%);
        &-reverse {
            animation-direction: reverse;
        }
        &-inside {
            color: $primary-color;
        }
        &-inside-reverse {
            color: $primary-color;
            animation-direction: reverse;
        }
    }
}
</style>
