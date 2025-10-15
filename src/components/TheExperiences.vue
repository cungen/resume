<template>
    <div>
        <div class="title">
            <span>Experiences</span>
        </div>
        <timeline-item v-for="(e, index) in experiences" :key="index">
            <template #left>{{ e.date }}</template>
            <template #right-company>{{ e.company }}</template>
            <template #right-product>{{ e.product }}</template>
            <template #right-description>
                <div>{{ e.description }}</div>
                <div class="flex mt-1 flex-wrap gap-1.5" v-if="e.points">
                    <span
                        v-for="(p, pIndex) in e.points"
                        :key="pIndex"
                        class="inline-flex px-2 py-0.5 bg-gray-200 rounded text-xs"
                        >{{ p }}</span
                    >
                </div>
            </template>
        </timeline-item>
    </div>
</template>
<script lang="ts">
import TimelineItem from './TimelineItem.vue'

export default {
    setup() {
        return {
            experiences: [
                {
                    date: 'Now',
                    company: '医二科技',
                    product: '新版模型评测平台, 患者招募小程序',
                    description:
                        '90%代码由本人开发；支持Base与Chat模型评测；支持多类型数据集；支持主观与客观评测；支持多模态模型；支持集群部署评测自动发现可用资源；支持多种评测后端（OpenCompass、Evalscope）',
                    points: ['Python', 'Ray', 'Vue'],
                },
                {
                    date: '2024-09',
                    company: '医二科技',
                    product: '旧版模型评测平台, 模型训推一体机平台开发, 健康管理小程序',
                    description:
                        '90%代码由本人开发；支持Base与Chat模型评测；支持多类型数据集；支持主观与客观评测；支持多模态模型；支持集群部署评测自动发现可用资源；支持多种评测后端（OpenCompass、Evalscope）',
                    points: ['Python', 'Ray', 'Vue'],
                },
                {
                    date: '2023-09',
                    company: '医渡云技术有限公司',
                    product: '全病种、患者管理平台、专病数据库、AI建模平台',
                    description:
                        '现有产品迭代；AI建模平台为新的一款产品，满足用户其于现有数据，对数据进行纳排、展示、预处理及建模的整个流程，前端采用vue3开发；团队管理，团队目标设定、人员排期、每周分享',
                    points: ['团队管理', 'vue3', 'monorepo'],
                },
                {
                    date: '2022',
                    company: '医渡云技术有限公司',
                    product: '全病种、患者管理平台、专病数据库',
                    description:
                        '2款新的产品开发，其中全病种是专病库的延伸，用户可以在该平台中基于纳排创建自己的专病库，患者管理平台涉及PC端及公众号，满足用户对患者的管理需求，包含医患者沟通IM及随访管理、宣教知识管理等，前端采用Vue开发，移动端采用uniapp开发；现有产品优化，其中包含一个复杂页面(项目抽取及导出)的性能优化；团队管理，团队目标设定、人员使用情况、项目排期、每周分享',
                    points: ['团队管理', '性能优化', 'vue', 'uniapp'],
                },
                {
                    date: '2021',
                    company: '医渡云技术有限公司',
                    product: '疾病数据中心、专病数据库',
                    description:
                        '现有产品迭代，及部分业务尝试需求开发；患者时间轴页面优化d3；团队管理，团队目标设定、人员使用情况、项目排期、每周分享',
                    points: ['团队管理', 'vue', 'd3'],
                },
                {
                    date: '2020',
                    company: '医渡云技术有限公司',
                    product: '互联网医院、专病数据库',
                    description:
                        '互联网医院，提供医患沟通、线上问诊、在线开方等功能，参与了移动端公众号相关页面开发；时间轴可视化配置工具的开发，由本人单独完成页面展现及交互的设计与开发，迭代了数次，目前在组内使用，现可满足90%的配置需求；',
                    points: ['移动端', '产品思维', 'vue'],
                },
                {
                    date: '2019',
                    company: '医渡云技术有限公司',
                    product: '疾病数据中心、科研协作平台',
                    description:
                        '疾病数据中心项目，该产品是整合的专病库及科研协作平台，即有多中心的项目管理逻辑，又有基于专病库的纳排及抽取功能，前端采用Vue开发，其中项目初始化及页面结构、导航等的搭建工作及部分页面由本人开发； 专病库性能优化，主是要针对Vue的整体加载性能及大数据量表格渲染性能的优化工作； 患者时间轴样式优化，主要是时间轴页面各组件及d3绘图方法的优化工作；',
                    points: ['框架搭建', 'vue', '性能优化', 'd3'],
                },
                {
                    date: '2018',
                    company: '医渡云技术有限公司',
                    product: '专病数据库',
                    description:
                        '患者搜索全家桶的复杂组件开发，整合了原来3种搜索方式，对搭建复杂业务组件有了相关的经验； Vue埋点库开发，可以记录用户的点击，页面跳转及页面停留时长的工具类库 ',
                    points: ['复杂业务', 'vue', '埋点工具'],
                },
                {
                    date: '2017',
                    company: '医渡云技术有限公司',
                    product: '专病数据库',
                    description:
                        '针对某一病种的科研平台, 对该病种关心的数据，做更有针对性的结构化的一款产品，由本人初始化框架, 采用Vue及Vuex开发, 使用了ElementUI并定制化了样式及组件； 患者时间轴页面的开发，采用d3开发，可以通过配置来展示用户关注的患者的相关医疗事件 ',
                    points: ['框架搭建', 'vue', 'd3'],
                },
                {
                    date: '2016-08',
                    company: '医渡云技术有限公司',
                    product: '科研平台',
                    description:
                        '帮助医生进行科研探索和科研项目管理的一个产品, 包括了一个内网单中心版本和公网多中心版本及垮平台的移动端, 同样采用angular开发, d3和highchart做数据可视化, 使用我们自己的组件库来进行页面组织, 后由本人重构过一版, 加入了webpack和es6的方式来模块化angular, 移动端也由本人维护一段时间和重构过一次使用Ionic开发, 加入了代码热补丁 ',
                    points: ['angular', 'd3', '手机端', 'Ionic'],
                },
                {
                    date: '2015-08',
                    company: '医渡云技术有限公司',
                    product: '医渡搜索',
                    description:
                        '病历搜索和患者的医疗事件详情页，早期采用node的express+angular，后因前后端分离， 前端页面重构只采用了angular后端由python开发, 其中样式框架的组织，专家搜索， 用户反馈及搜索历史的记录与还原等均由本人开发完成；我们开发了自己的组件和样式库，项目中也同时用到了highchart,d3等数据可视化的内容 ',
                    points: ['angular', 'd3', 'highchart'],
                },
                {
                    date: '2014-06',
                    company: '医渡云技术有限公司',
                    product: '医渡app',
                    description:
                        'app采用了前端框架ionic开发，ionic以angular为基础，app中登录，以及健康问卷内容，套餐等内容均由本人开发 开发过程还使用了sass,jade等前端的预处理工具，bower前端的包管理工具，gulp前端的自动化构建工具 ',
                    points: ['angular', 'd3', '手机端', 'Ionic', 'gulp'],
                },
                {
                    date: '2014-02',
                    company: '翼燊恒通科贸有限公司',
                    description:
                        'PHP和页面开发, 主要工作根据设计稿精准还原页面',
                    points: ['php', 'seo'],
                },
            ],
        }
    },
    components: {
        TimelineItem,
    },
}
</script>
