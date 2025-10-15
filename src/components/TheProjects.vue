<template>
    <info-wrapper title="Projects">
        <template #left>项目</template>
        <template #right>
            <div class="grid gap-3">
                <div v-for="(p, i) in projects" :key="i" class="p-3 rounded-lg border border-[var(--border)] bg-[var(--card)]">
                    <div class="flex items-center justify-between">
                        <div class="font-medium">
                            <a :href="p.link" target="_blank" class="hover:underline">{{ p.name }}</a>
                        </div>
                        <div class="text-xs text-[var(--muted)]">{{ p.period }}</div>
                    </div>
                    <div class="text-sm mt-1 text-[var(--muted)]">{{ p.summary }}</div>
                    <div class="mt-2 flex flex-wrap gap-1.5">
                        <span v-for="(t, ti) in p.stack" :key="ti" class="px-2 py-0.5 rounded-md text-xs bg-[var(--card)] border border-[var(--border)]">{{ t }}</span>
                    </div>
                </div>
            </div>
        </template>
    </info-wrapper>
    
</template>

<script lang="ts">
import InfoWrapper from './InfoWrapper.vue'

export default {
    components: { InfoWrapper },
    setup() {
        const projects = [
            {
                name: 'AI Modeling Platform',
                link: 'https://example.com/ai-platform',
                period: '2023 - Present',
                summary:
                    'Low-code dataset curation and model training with experiment tracking and RBAC.',
                stack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'ECharts'],
            },
            {
                name: 'Patient Timeline Visualization',
                link: 'https://example.com/timeline',
                period: '2022',
                summary:
                    'Config-driven patient journey visualization with virtualized rendering.',
                stack: ['D3', 'Vue', 'Web Workers'],
            },
            {
                name: 'Specialty Disease Registry',
                link: 'https://example.com/registry',
                period: '2021',
                summary:
                    'High-volume data capture and extraction workflows with custom query engine.',
                stack: ['Vue', 'TypeScript', 'Node.js'],
            },
        ]
        return { projects }
    },
}
</script>
