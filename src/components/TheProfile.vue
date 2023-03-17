<template>
    <info-wrapper title="Profile">
        <template #left>简介</template>
        <template #right>
            14年本科毕业，9年前端开发经验，其中有２年多的前端管理经验，近些年主要使用Vue相关的技术栈开发，
            个人兴趣比较广泛，对nodejs、threejs、unity及机器学习也有一定的了解，
            熟悉前端各种开发语言，工具和框架，热爱分享
            <div class="mt-1 text-gray-600">
                爱好：乒乓球打的还行，喝歌也还行，喜欢科幻电影，热门动漫
            </div>
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
