<template>
    <section class="flex">
        <div
            class="w-24 flex flex-none justify-end pr-3 text-gray-500 max-sm:w-12 max-sm:text-right"
        >
            <slot name="left"></slot>
        </div>
        <div class="flex flex-col">
            <div
                class="flex-none w-2 h-2 mt-1.5 mr-3 mr rounded bg-cyan-500"
            ></div>
            <div
                class="w-0 h-full mt-1 ml-0.5 border-l-4 border-dashed border-l-gray-400 scale-x-50"
            ></div>
        </div>
        <div class="pb-4 text-gray-800 leading-5">
            <div class="flex align-middle">
                <slot name="right-company"></slot>
                <div class="text-gray-500 text-sm ml-4">
                    <slot name="right-product"></slot>
                </div>
            </div>
            <div class="text-sm mt-3 leading-6">
                <slot name="right-description"></slot>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
