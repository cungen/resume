<template>
    <info-wrapper title="Languages">
        <template #left>语言</template>
        <template #right>
            <div class="grid gap-2">
                <div class="flex items-center justify-between">
                    <div class="text-sm">中文 (Native)</div>
                    <div class="text-xs text-[var(--muted)]">母语</div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="text-sm">English (Professional)</div>
                    <div class="text-xs text-[var(--muted)]">CET-4 / Working Proficiency</div>
                </div>
            </div>
        </template>
    </info-wrapper>
</template>

<script lang="ts">
import InfoWrapper from './InfoWrapper.vue'

export default {
    components: { InfoWrapper },
}
</script>
