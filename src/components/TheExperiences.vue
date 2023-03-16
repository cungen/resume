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
                {{ e.description }}
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
                    date: '至今',
                    company: '医渡云技术有限公司',
                    product: '互联网医院、专病数据库',
                    description:
                        '互联网医院移动端公众号相关页面开发；时间轴可视化配置工具的开发，由本人单独完成页面展现及交互的设计与开发，迭代了数次，目前在组内使用，现可满足90%的配置需求；',
                },
                {
                    date: '2019',
                    company: '医渡云技术有限公司',
                    product: '疾病数据中心、科研协作平台',
                    description:
                        '疾病数据中心项目工程初始化及页面结构、导航等的搭建工作（实现了3个子系统的相互跳转：多入口，共用组件库）； 专病库性能优化，主是要针对Vue的整体加载性能及大数据量表格渲染性能的优化工作； 患者时间轴样式优化，主要是时间轴页面各组件及d3绘图方法的优化工作；',
                },
                {
                    date: '2018',
                    company: '医渡云技术有限公司',
                    product: '专病数据库',
                    description:
                        '患者搜索全家桶的复杂组件开发，整合了原来3种搜索方式，对搭建复杂业务组件有了相关的经验； Vue埋点库开发，可以记录用户的点击，页面跳转及页面停留时长的工具类库 ',
                },
                {
                    date: '2017',
                    company: '医渡云技术有限公司',
                    product: '专病数据库',
                    description:
                        '针对某一病种的科研平台, 对该病种关心的数据做更针对的结构化的产品, 由本人初始化框架, 采用Vue及Vuex开发, 使用了ElementUI并定制化了样式及组件； 患者时间轴页面的开发，采用d3开发，可以通过配置来展示用户关注的患者的相关医疗事件 ',
                },
                {
                    date: '2016-08',
                    company: '医渡云技术有限公司',
                    product: '科研平台',
                    description:
                        '帮助医生进行科研探索和科研项目管理的一个产品, 包括了一个内网单中心版本和公网多中心版本及垮平台的移动端, 同样采用angular开发, d3和highchart做数据可视化, 使用我们自己的组件库来进行页面组织, 后由本人重构过一版, 加入了webpack和es6的方式来模块化angular, 移动端也由本人维护一段时间和重构过一次使用Ionic开发, 加入了代码热补丁 ',
                },
                {
                    date: '2015-08',
                    company: '医渡云技术有限公司',
                    product: '医渡搜索',
                    description:
                        '病历搜索和患者的医疗事件详情页，早期采用node的express+angular，后因前后端分离， 前端页面重构只采用了angular后端由python开发, 其中样式框架的组织，专家搜索， 用户反馈及搜索历史的记录与还原等均由本人开发完成；我们开发了自己的组件和样式库，项目中也同时用到了highchart,d3等数据可视化的内容 ',
                },
                {
                    date: '2014-06',
                    company: '医渡云技术有限公司',
                    product: '医渡app',
                    description:
                        'app采用了前端框架ionic开发，ionic以angular为基础，app中登录，以及健康问卷内容，套餐等内容均由本人开发 开发过程还使用了sass,jade等前端的预处理工具，bower前端的包管理工具，gulp前端的自动化构建工具 ',
                },
                {
                    date: '2014-02',
                    company: '翼燊恒通科贸有限公司',
                    description:
                        'PHP和页面开发, 主要工作根据设计稿精准还原页面',
                },
            ],
        }
    },
    components: {
        TimelineItem,
    },
}
</script>
