<template>
    <div class="min-h-screen bg-[var(--bg)] mesh-bg font-sans">
        <div class="max-w-3xl mx-auto px-4 py-10 print:py-0 print:px-2">
            <div class="relative">
                <div
                    class="absolute print:hidden z-10 flex flex-col gap-2 top-4 -right-14 max-lg:right-2 max-lg:top-2"
                >
                    <button
                        class="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--card)]/90 text-base shadow-md hover:scale-105 transition"
                        @click="printPage"
                        aria-label="Print resume"
                    >
                        <span class="text-xl">🖨️</span>
                    </button>
                    <button
                        class="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--card)]/90 text-base shadow-md hover:scale-105 transition"
                        @click="toggleDark"
                        aria-label="Toggle dark mode"
                    >
                        <span v-if="isDark" class="text-xl">🌙</span>
                        <span v-else class="text-xl">☀️</span>
                    </button>
                </div>
                <div
                    class="card glass shadow-xl print:border-transparent print:shadow-transparent"
                >
                    <div class="p-7 max-sm:p-4 print:p-8">
                        <base-info></base-info>
                        <the-profile></the-profile>
                        <the-skills></the-skills>
                        <the-experiences></the-experiences>
                        <the-certificate></the-certificate>
                        <the-education></the-education>
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
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import BaseInfo from './components/BaseInfo.vue'
import TheProfile from './components/TheProfile.vue'
import TheEducation from './components/TheEducation.vue'
import TheExperiences from './components/TheExperiences.vue'
import TheCertificate from './components/TheCertificate.vue'
import TheSkills from './components/TheSkills.vue'
// removed extra sections

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
</script>

<style lang="scss">
html,
body {
    margin: 0;
}
</style>
