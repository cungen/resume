<template>
    <info-wrapper title="Certificates">
        <template #left>证书</template>
        <template #right>
            <ul>
                <li v-for="certificate in certificates" :key="certificate.name">
                    {{ certificate.name }} -
                    <span class="text-sm text-[var(--muted)]">{{ certificate.year }}</span>
                </li>
            </ul>
        </template>
    </info-wrapper>
</template>

<script setup lang="ts">
import InfoWrapper from './InfoWrapper.vue'
const certificates = [
    {
        name: '中级软件设计师职业证书',
        year: '2025',
    },
    {
        name: 'PCB设计职业技术证书',
        year: '2025',
    },
    {
        name: 'Coursera-Stanford online Machine Learning',
        year: '2020',
    },
    {
        name: 'CET-4',
        year: '2012',
    },
]
</script>
