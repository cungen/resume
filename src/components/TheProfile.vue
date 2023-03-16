<template>
    <info-wrapper title="Profile">
        <template #left>简介</template>
        <template #right>
            14年本科毕业，6年前端开发经验，热爱技术，熟悉前端各种开发语言，工具和框架，可以解决浏览器兼容性问题，可以用前端框架（Ionic等）开发跨平台应用，爱好鼓捣技术、看漫画、摄影等
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
