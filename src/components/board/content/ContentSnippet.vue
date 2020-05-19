<template>
    <router-link
    :to="route"
    tag="div">
        <div
        class="card content-snippet"
        :style="{'border-left': '3px solid ' + color }">
            <div class="card-body content-snippet-body row justify-content-between align-items-center">
                <div>
                    <div
                    class="content-snippet-title text-muted mb-1">
                        {{ title }}
                    </div>
                    <h5>
                        {{ value }}
                    </h5>
                </div>
                <div>
                    <font-awesome-icon
                    size="2x"
                    :icon="['fas', icon]"
                    :style="{'color': color }"
                    fixed-width/>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'ContentSnippet',
    props: {
        'route': {
            type: Object,
            required: true
        },
        'color': {
            type: String,
            required: true
        },
        'icon': {
            type: String,
            required: true
        },
        'title': {
            type: String,
            required: true
        },
        'value': {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.content-snippet {
    border: none;
    border-radius: 0px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.13);
    transition: $transition;
    top: 0;
    &-body {
        padding: 1.25rem 3rem;
    }
    &-title {
        font-size: $font-size * 0.7;
        font-weight: 500;
        text-transform: uppercase;
    }
    &:hover {
        box-shadow: 0 4px 8px rgba(38,38,38,.2);
        cursor: pointer;
        top: -6px;
    }
}
</style>

