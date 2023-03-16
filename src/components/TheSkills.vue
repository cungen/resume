<template>
    <info-wrapper title="Skills">
        <template #left>能力</template>
        <template #right>
            <ul>
                <li
                    v-for="(s, index) in skills"
                    :key="index"
                    class="pl-5 -indent-5"
                >
                    {{ `${index + 1}.&nbsp; ${s}` }}
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
                '项目经验丰富，能根据项目要求，做出合理且有效的实现方案',
                '前端开发经验丰富，能熟练使用原生JS及CSS，有较多的优化经验',
                '可视化开发经验丰富，可以熟练使用d3做出丰富的可视化效果',
                '熟练使用Vue框架，能规划合理的项目结构、组件实现方式，有一定的Vue的编译及性能优化能力',
                '有过NodeJS的开发经验，对后端有一定的了解',
                '软件工程专业，linux、数据库、网络、算法等专业课程有相关基础',
            ],
        }
    },
    components: {
        InfoWrapper,
    },
}
</script>
