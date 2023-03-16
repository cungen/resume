<template>
    <info-wrapper title="Education">
        <template #left>~ 2014</template>
        <template #right>
            <div class="text-gray-800 mb-1">石家庄铁道大学</div>
            <div class="text-sm text-gray-500">本科 · 软件工程专业</div>
        </template>
    </info-wrapper>
</template>

<script lang="ts">
import InfoWrapper from './InfoWrapper.vue'

export default {
    components: {
        InfoWrapper,
    },
}
</script>
