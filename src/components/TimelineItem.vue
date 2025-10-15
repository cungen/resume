<template>
    <section class="flex">
        <div
            class="w-12 flex flex-none justify-end pr-3 text-right text-[var(--muted)] sm:w-24 print:w-24"
        >
            <slot name="left"></slot>
        </div>
        <div class="relative flex flex-col items-center px-2">
            <div
                class="flex-none w-2.5 h-2.5 mt-1.5 rounded-md bg-[var(--accent)] ring-4 ring-[color-mix(in_srgb,var(--accent)_18%,transparent)]"
            ></div>
            <div
                class="w-px h-full mt-1 bg-[var(--border)]"
            ></div>
        </div>
        <div class="pb-4 text-[var(--text)] leading-5">
            <div class="flex items-baseline">
                <slot name="right-company"></slot>
                <div class="text-[var(--muted)] text-sm ml-4">
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
