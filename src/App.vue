<template>
    <div
        class="mx-auto mb-7 p-8 border border-solid border-t-8 border-cyan-500 shadow-xl"
        style="width: 768px"
    >
        <base-info></base-info>
        <the-profile></the-profile>
        <the-education></the-education>
        <the-experiences></the-experiences>
        <the-certificate></the-certificate>
        <the-skills></the-skills>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseInfo from './components/BaseInfo.vue'
import TheProfile from './components/TheProfile.vue'
import TheEducation from './components/TheEducation.vue'
import TheExperiences from './components/TheExperiences.vue'
import TheCertificate from './components/TheCertificate.vue'
import TheSkills from './components/TheSkills.vue'

export default defineComponent({
    name: 'App',
    components: {
        BaseInfo,
        TheProfile,
        TheEducation,
        TheExperiences,
        TheCertificate,
        TheSkills,
    },
})
</script>

<style lang="scss">
html,
body {
    margin: 0;
}
</style>
