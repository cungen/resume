<template>
    <div class="min-h-screen bg-[var(--bg)] mesh-bg">
        <div class="max-w-3xl mx-auto px-4 py-10">
            <div class="flex items-center justify-between mb-6">
                <h1 class="text-xl font-semibold text-gray-500">
                    Resume
                </h1>
                <div class="flex items-center gap-2">
                    <button
                        class="px-3 py-1.5 rounded-md border border-[var(--border)] text-sm hover:bg-[var(--card)]"
                        @click="toggleDark"
                        aria-label="Toggle dark mode"
                    >
                        <span v-if="isDark">🌙</span>
                        <span v-else>☀️</span>
                    </button>
                    <button
                        class="px-3 py-1.5 rounded-md bg-[var(--accent)] text-white text-sm hover:bg-[var(--accent-600)]"
                        @click="printPage"
                    >
                        Print
                    </button>
                </div>
            </div>
            <div
                class="card glass border-t-8 border-t-[var(--accent)] shadow-xl print:border-transparent print:shadow-transparent"
            >
                <div class="p-7 max-sm:p-4 print:p-8">
                    <base-info></base-info>
                    <the-profile></the-profile>
                    <the-skills></the-skills>
                    <the-experiences></the-experiences>
                    <the-projects></the-projects>
                    <the-education></the-education>
                    <the-certificate></the-certificate>
                    <the-open-source></the-open-source>
                    <the-achievements></the-achievements>
                    <the-languages></the-languages>
                    <footer class="mt-8 text-right">
                        <a
                            href="https://cungen.github.io/resume"
                            class="mx-auto text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:underline"
                            target="_blank"
                            >该简历网址</a
                        >
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import BaseInfo from './components/BaseInfo.vue'
import TheProfile from './components/TheProfile.vue'
import TheEducation from './components/TheEducation.vue'
import TheExperiences from './components/TheExperiences.vue'
import TheCertificate from './components/TheCertificate.vue'
import TheSkills from './components/TheSkills.vue'
import TheProjects from './components/TheProjects.vue'
import TheOpenSource from './components/TheOpenSource.vue'
import TheAchievements from './components/TheAchievements.vue'
import TheLanguages from './components/TheLanguages.vue'

export default defineComponent({
    name: 'App',
    components: {
        BaseInfo,
        TheProfile,
        TheEducation,
        TheExperiences,
        TheCertificate,
        TheSkills,
        TheProjects,
        TheOpenSource,
        TheAchievements,
        TheLanguages,
    },
    setup() {
        const isDark = ref(false)
        const applyDarkClass = (value: boolean) => {
            const root = document.documentElement
            if (value) root.classList.add('dark')
            else root.classList.remove('dark')
        }
        const toggleDark = () => {
            isDark.value = !isDark.value
            localStorage.setItem('resume:dark', String(isDark.value))
            applyDarkClass(isDark.value)
        }
        const printPage = () => window.print()
        onMounted(() => {
            const saved = localStorage.getItem('resume:dark')
            isDark.value = saved === 'true'
            applyDarkClass(isDark.value)
        })
        return { isDark, toggleDark, printPage }
    },
})
</script>

<style lang="scss">
html,
body {
    margin: 0;
}
</style>
