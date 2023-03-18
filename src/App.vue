<template>
    <div
        class="container mx-auto mb-7 p-8 border border-solid border-t-8 border-cyan-500 shadow-xl max-sm:p-4"
    >
        <base-info></base-info>
        <the-profile></the-profile>
        <the-skills></the-skills>
        <the-experiences></the-experiences>
        <the-education></the-education>
        <the-certificate></the-certificate>
        <footer class="mt-8 text-right">
            <a
                href="https://cungen.github.io/resume"
                class="mx-auto text-gray-500 text-sm hover:text-cyan-500 hover:underline"
                target="_blank"
                >该简历网址</a
            >
        </footer>
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
