<template>
    <info-wrapper title="Skills">
        <template #left>能力</template>
        <template #right>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Left Column: Skill List -->
                <div class="space-y-2">
                    <div v-for="(skill, index) in skillList" :key="index" class="text-sm leading-relaxed">
                        <div v-html="highlightKeywords(skill)"></div>
                    </div>
                </div>

                <!-- Right Column: Radar Chart -->
                <div class="flex items-center justify-center">
                    <div ref="radarChart" class="w-full h-80"></div>
                </div>
            </div>
        </template>
    </info-wrapper>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import InfoWrapper from './InfoWrapper.vue'

const radarChart = ref<HTMLElement>()

const skillList = [
    '前端经验丰富，具备工程化、性能与安全性优化经验，有跨端开发经验(Web、小程序)，可视化经验丰富(D3,Echarts,ThreeJS)',
    '知识面较广，除前端知识外',
    '  - 后端: Python有2年开发经验，使用过分布式框架Ray',
    '  - 运维：搭建过私有Nas及VPN进行内网穿透，Docker使用熟练，有华为昇腾服务器(910B3)上模型推理环境搭建经验，ansible使用熟练',
    '  - 算法：线上机器学习(吴恩达课程)证书，了解强化学习',
    '  - 硬件：有PCB职业证书，了解嵌入式开发',
    '  - 建模：会使用Blender, Fusion360, Solidworks等3维建模软件，有建模3d打印经验',
    '阅读开源代码：LangChain, Cline, OpenManus',
    '其他：有过~3年带团队经验；软件专业，基础扎实；Cli工具（tmux,vim,ansible）使用熟练，效率贼高。'
]

const keywords = [
    '前端', '工程化', '性能', '安全性', '跨端', 'Web', '小程序', '可视化', 'D3', 'Echarts', 'ThreeJS',
    'Python', '分布式', 'Ray', '运维', 'Nas', 'VPN', 'Docker', '华为昇腾', 'ansible',
    '机器学习', '吴恩达', '强化学习', 'PCB', '嵌入式', 'Blender', 'Fusion360', 'Solidworks', '3d打印',
    'LangChain', 'Cline', 'OpenManus', '团队', '软件专业', 'tmux', 'vim'
]

const highlightKeywords = (text: string) => {
    let highlightedText = text
    keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi')
        highlightedText = highlightedText.replace(regex, '<span class="font-semibold" style="color: var(--accent)">$1</span>')
    })
    return highlightedText
}

const initRadarChart = () => {
    if (!radarChart.value) return

    const chart = echarts.init(radarChart.value)
    const option = {
        title: {
        },
        radar: {
            // shape: 'circle',
            indicator: [

                { name: 'FE', max: 100 },
                { name: 'RD', max: 100 },
                { name: 'DevOps', max: 100 },
                { name: 'Algorithm', max: 100 },
                { name: 'Hardware', max: 100 },
                { name: 'Design', max: 100 }
            ]
        },
        series: [
            {
                type: 'radar',
                data: [
                    {
                        value: [90, 80, 85, 50, 58, 65],
                    },
                ]
            }
        ]
    }

    // const option = {
    //     radar: {
    //         indicator: [
    //             { name: 'FE', max: 100 },
    //             { name: 'RD', max: 100 },
    //             { name: 'DevOps', max: 100 },
    //             { name: 'Algorithm', max: 100 },
    //             { name: 'Hardware', max: 100 },
    //             { name: 'Design', max: 100 }
    //         ],
    //         shape: 'polygon',
    //         splitNumber: 5,
    //         axisName: {
    //             show: true,
    //             color: 'var(--accent-600)',
    //             fontSize: 14,
    //             fontWeight: 'bold',
    //             formatter: function (value: string) {
    //                 return value
    //             }
    //         },
    //         nameGap: 15,
    //         splitLine: {
    //             lineStyle: {
    //                 color: 'rgba(0, 0, 0, 0.1)',
    //                 type: 'dashed'
    //             }
    //         },
    //         splitArea: {
    //             show: true,
    //             areaStyle: {
    //                 color: ['rgba(114, 172, 209, 0.1)', 'rgba(114, 172, 209, 0.05)']
    //             }
    //         },
    //     },
    //     series: [{
    //         name: '技能评估',
    //         type: 'radar',
    //         data: [{
    //             value: [90, 80, 85, 50, 58, 65],
    //             name: '技能水平',
    //             areaStyle: {
    //                 color: 'rgba(10, 182, 212, 0.4)'
    //             },
    //             itemStyle: {
    //                 color: 'var(--accent-600)',
    //                 borderColor: 'var(--accent-600)',
    //                 borderWidth: 2
    //             },
    //             label: {
    //                 show: true,
    //                 color: 'var(--accent-600)',
    //                 fontSize: 16,
    //                 fontWeight: 'bold',
    //                 formatter: function (params: any) {
    //                     return params.indicator.name
    //                 }
    //             }
    //         }]
    //     }],
    //     tooltip: {
    //         trigger: 'item',
    //         backgroundColor: 'var(--card)',
    //         borderColor: 'var(--border)',
    //         textStyle: {
    //             color: 'var(--text)'
    //         }
    //     }
    // }

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
