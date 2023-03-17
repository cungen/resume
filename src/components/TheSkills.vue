<template>
    <info-wrapper title="Skills">
        <template #left>能力</template>
        <template #right>
            <ul class="">
                <li
                    v-for="(s, index) in skills"
                    :key="index"
                    class="pl-5 -indent-5"
                >
                    {{ index + 1 }}.
                    <strong class="ml-1 mr-1 text-gray-600">{{
                        s.title
                    }}</strong>
                    {{ s.content }}
                </li>
            </ul>
        </template>
    </info-wrapper>
</template>

<script lang="ts">
import InfoWrapper from './InfoWrapper.vue'

export default {
    setup() {
        return {
            skills: [
                {
                    title: '项目经验',
                    content:
                        '比较丰富，能根据项目要求，做出合理且有效的实现方案',
                },
                {
                    title: '开发经验',
                    content:
                        '比较丰富，能熟练使用原生JS及CSS，有较多的代码及性能优化经验，对安全相关知识也有较多了解',
                },
                {
                    title: '可视化',
                    content:
                        '开发经验丰富，可以熟练使用echart、d3做出丰富的可视化效果，同时掌握了threejs可以实现三维效果的web开发',
                },
                {
                    title: 'Vue框架',
                    content:
                        '可以熟练使用，能规划合理的项目结构、组件实现方式，有webpack的编译优化经验及Vue相关的性能优化经验',
                },
                {
                    title: 'NodeJS',
                    content: '有过的开发经验，对后端有一定的了解',
                },
                {
                    title: 'DevOps',
                    content:
                        '平时折腾Nas，对网络、安全，Docker使用都有一定了解，分享过家用私有云搭建方案及内网穿透方案',
                },
                {
                    title: '开发工具',
                    content:
                        '资深Vim使用者，配合tmux窗口管理，开发效率惊人，当然vscode也使用的很6',
                },
                {
                    title: '机器学习',
                    content:
                        '学习过机器学习及深度学习，有Coursera的线上证书，对原理有一定的了解，相关概念比较熟悉，可以更好融入相关业务开发',
                },
                {
                    title: '团队管理',
                    content:
                        '有2年相关经验，对团队目标制定，项目排期、进度把控、复盘，人力资源情况，团队技术分享，代码Review等有一定经验',
                },
                {
                    title: '专业',
                    content:
                        '软件工程专业，linux、数据库、网络、算法等专业课程有相关基础，英文水平过关，无压力阅读英文文档',
                },
            ],
        }
    },
    components: {
        InfoWrapper,
    },
}
</script>
