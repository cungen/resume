<template>
    <info-wrapper title="Skills">
        <template #left>能力</template>
        <template #right>
            <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> -->
            <!-- Right Column: Radar Chart -->
            <div class="flex items-center justify-center">
                <div ref="radarChart" class="w-full h-80"></div>
            </div>
            <!-- Left Column: Skill List -->
            <div class="space-y-2 text-sm marked-content">
                <div v-html="skillMarkdown"></div>
            </div>
            <!-- </div> -->
        </template>
    </info-wrapper>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { Marked } from 'marked'
import { nextTick, onMounted, ref } from 'vue'
import InfoWrapper from './InfoWrapper.vue'

const radarChart = ref<HTMLElement>()
const marked = new Marked()

// const keywords = ['性能优化', 'D3', 'ThreeJS', 'Ray', 'PCB职业证书']
const keywords: string[] = []

const highlightKeywords = (text: string) => {
    let highlightedText = text
    keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi')
        highlightedText = highlightedText.replace(
            regex,
            '<span class="font-semibold" style="color: var(--accent)">$1</span>',
        )
    })
    return highlightedText
}

const skillMarkdown = marked.parse(
    highlightKeywords(
        `
- **前端经验丰富**，有工程化、性能优化经验，有跨端开发经验(Web、小程序, HybridApp)，可视化经验丰富(D3, ECharts, ThreeJS)
- **知识面较广**，除前端知识外
  - **后端**: Python有2年+开发经验，使用过分布式框架 Ray
  - **运维**：搭建过私有Nas及自建[🔗VPN进行内网穿透](https://iamroot.cn/tailscalezu-wang-shen-qi/)，Docker使用熟练，有华为昇腾服务器(910B3)上模型推理环境搭建经验，Ansible使用熟练
  - **算法**：有线上机器学习(吴恩达课程)证书，了解过一些[🔗强化学习](https://cungen.github.io/notes/Cards/%E3%80%8CRL%E3%80%8D%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0)
  - **硬件**：有PCB职业证书，了解嵌入式开发
  - **建模**：会使用Blender, Fusion360, SolidWorks等3维建模软件，有3D打印经验
- **阅读过较多开源代码**：Vue, LangChain, Cline, [🔗OpenManus](https://cungen.github.io/notes/Cards/LangManus%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90), [🔗LangManus源码分析](https://cungen.github.io/notes/Cards/LangManus%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90) [🔗DeerFlow源码分析](https://cungen.github.io/notes/Cards/DeerFlow%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90), FastGPT, OpenCompass, CherryStudio等
- 其他：有过3年+带团队经验；软件专业，基础扎实；Cli工具(Tmux, Vim, Ansible, Docker等)使用熟练，效率很高，两三层楼那么高。
`.trim(),
    ),
)

const initRadarChart = () => {
    if (!radarChart.value) return

    const chart = echarts.init(radarChart.value)
    const option = {
        title: {},
        radar: {
            // shape: 'circle',
            indicator: [
                { name: 'FE', max: 100 },
                { name: 'RD', max: 100 },
                { name: 'DevOps', max: 100 },
                { name: 'Algorithm', max: 100 },
                { name: 'Hardware', max: 100 },
                { name: 'Design', max: 100 },
            ],
        },
        series: [
            {
                type: 'radar',
                data: [
                    {
                        value: [90, 80, 80, 55, 60, 65],
                    },
                ],
            },
        ],
    }

    chart.setOption(option)

    // Handle window resize
    const handleResize = () => {
        chart.resize()
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    onMounted(() => {
        return () => {
            window.removeEventListener('resize', handleResize)
            chart.dispose()
        }
    })
}

onMounted(() => {
    nextTick(() => {
        initRadarChart()
    })
})
</script>
