<template>
    <info-wrapper title="Profile">
        <template #left>简介</template>
        <template #right>
            14年本科毕业，9年前端开发经验，其中有２年的前端管理经验，近些年主要使用Vue相关的技术栈开发，
            兴趣比较广泛，对nodejs、threejs、unity及机器学习也有一定的了解，
            熟悉前端各种开发语言，工具和框架，可以解决浏览器兼容性问题，英文水平还可以，可以无压力看英文的技术文档
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
