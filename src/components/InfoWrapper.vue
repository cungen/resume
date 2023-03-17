<template>
    <div>
        <div class="title">
            <span>{{ title }}</span>
        </div>
        <div class="flex">
            <div
                class="w-28 flex flex-none justify-end pr-3 text-gray-500 leading-7"
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
