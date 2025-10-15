<template>
    <info-wrapper title="Skills">
        <template #left>能力</template>
        <template #right>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                    v-for="(s, index) in skills"
                    :key="index"
                    class="p-3 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md transition"
                >
                    <div class="text-sm font-medium text-gradient">
                        {{ s.title }}
                    </div>
                    <div class="text-sm mt-1 text-[var(--muted)]">
                        {{ s.content }}
                    </div>
                </div>
            </div>
        </template>
    </info-wrapper>
</template>

<script setup lang="ts">
import InfoWrapper from './InfoWrapper.vue'

const skills = [
    {
        title: '项目经验',
        content: '能针对目标拆解方案，明确路径与风险并落地',
    },
    {
        title: '开发经验',
        content: '熟练原生JS/CSS；具备工程化、性能与安全优化经验',
    },
    {
        title: '可视化',
        content: 'ECharts / D3 熟练，具备复杂可视化与三维开发能力',
    },
    {
        title: 'Vue框架',
        content: 'Vue3/TS 熟练；合理架构与组件设计；编译和运行时优化',
    },
    {
        title: 'NodeJS',
        content: '具备后端经验，理解接口设计、性能与可靠性',
    },
    {
        title: 'DevOps',
        content: '熟悉 Docker、网络与安全实践，能搭建稳定交付流程',
    },
    {
        title: '开发工具',
        content: 'Vim/tmux 与 VS Code 高效工作流',
    },
    {
        title: '机器学习',
        content: '理解 ML/DL 基础原理，能融入业务侧开发',
    },
    {
        title: '团队管理',
        content: '目标制定、排期与复盘、代码评审与技术分享',
    },
    {
        title: '专业',
        content: '软工背景；Linux/DB/网络/算法基础扎实；可无障碍读英文文档',
    },
]
</script>
