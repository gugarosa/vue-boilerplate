<template>
    <div class="row content-header text-center text-sm-left">
        <div class="col-12 col-sm-6 mb-2">
            <h4>
                {{ title }}
            </h4>
            <small>
                {{ subtitle }}
            </small>
        </div>
        <div class="col-12 col-sm-6 align-self-end text-sm-right mb-2">
            <small>
                <breadcrumb/>
            </small>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/utils/Breadcrumb'

export default {
    name: 'ContentHeader',
    components: {
        Breadcrumb
    },
    props: {
        'title': {
            type: String,
            required: true
        },
        'subtitle': {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

