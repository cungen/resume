<template>
    <info-wrapper title="Certificate">
        <template #left>证书</template>
        <template #right>
            <ul>
                <li>1. PCB设计职业技术证书</li>
                <li>2. Coursera-Stanford online Machine Learning</li>
                <li>3. CET-4</li>
            </ul>
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
