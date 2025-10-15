<template>
    <info-wrapper title="Highlights">
        <template #left>亮点</template>
        <template #right>
            <ul>
                <li class="pl-5 -indent-5 hover:translate-x-0.5 transition">
                    1. Reduced critical page TTI by <strong>42%</strong> via virtualization & caching
                </li>
                <li class="pl-5 -indent-5 hover:translate-x-0.5 transition">
                    2. Led 6-engineer team; shipped 3 products on schedule across 2 years
                </li>
                <li class="pl-5 -indent-5 hover:translate-x-0.5 transition">
                    3. Built low-code visualization tool covering <strong>90%+</strong> configuration scenarios
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
