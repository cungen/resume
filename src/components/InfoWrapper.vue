<template>
    <div>
        <div class="title">
            <span>{{ title }}</span>
        </div>
        <div class="flex flex-col sm:flex-row print:flex-row">
            <div
                class="w-28 flex flex-none justify-start pr-3 text-xl text-gray-500 leading-7 mb-3 sm:w-28 sm:justify-end sm:text-base print:justify-end print:text-base"
            >
                <slot name="left"></slot>
            </div>
            <div class="text-gray-800 leading-7 info-wrapper-right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: String,
    },
}
</script>

<style lang="scss" scoped>
.info-wrapper-right:deep(li + li) {
    margin-top: 6px;
}
</style>
