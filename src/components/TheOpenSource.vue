<template>
    <info-wrapper title="Open Source">
        <template #left>开源</template>
        <template #right>
            <ul>
                <li class="pl-5 -indent-5">
                    1. Contributed PRs to <strong>vuejs/core</strong> and <strong>vitejs/vite</strong> (docs & bugfixes)
                </li>
                <li class="pl-5 -indent-5">
                    2. Author of <strong>vue-d3-timeline</strong> component (2k+ weekly downloads)
                </li>
                <li class="pl-5 -indent-5">
                    3. Maintainer of internal <strong>analytics-sdk</strong> OSS mirror
                </li>
            </ul>
        </template>
    </info-wrapper>
</template>

<script lang="ts">
import InfoWrapper from './InfoWrapper.vue'

export default {
    components: { InfoWrapper },
}
</script>
