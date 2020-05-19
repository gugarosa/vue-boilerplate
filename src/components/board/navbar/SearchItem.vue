<template>
    <div class="search">
        <b-input-group :class="{ 'search-group': toggle }">
            <b-input-group-prepend
            class="search-group-item"
            :class="{ 'search-close': toggle }"
            is-text
            @click="closeSearch()">
                <font-awesome-icon
                :icon="['fas', 'times']"
                fixed-width/>
            </b-input-group-prepend>
            <b-form-input
            class="search-group-item"
            :class="{ 'search-input': toggle }"
            type="text"/>
            <b-input-group-append
            is-text
            @click="openSearch()">
                <font-awesome-icon
                :icon="['fas', 'search']"
                fixed-width/>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
export default {
    name: 'SearchItem',
    data () {
        return {
            toggle: false
        }
    },
    methods: {
        closeSearch () {
            this.toggle = false
        },

        openSearch() {
            if (this.toggle) {
                console.log('do search')
            }
            else {
                this.toggle = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    cursor: pointer;
    &-group {
        background-color: $bg-main-color;
        border-radius: 1rem;
        &-item {
            display: none;
        }
    }

    &-close {
        display: flex;
    }

    &-input {
        background-color: $bg-main-color;
        border: none;
        display: block;
        height: 1.75rem;
        &:focus {
            background-color: $bg-main-color;
            box-shadow: none;
        }
    }
}

.input-group-text {
    background-color: transparent;
    border: none;
    transition: $transition;
    &:hover {
        color: $secondary-color;
    }
}
</style>
