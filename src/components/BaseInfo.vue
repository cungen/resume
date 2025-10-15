<template>
    <div class="flex flex-col sm:flex-row print:flex-row">
        <div class="flex flex-1 items-center">
            <div class="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-[var(--accent)] ring-opacity-20">
                <img src="/images/avatar.jpg" alt="avatar" />
            </div>
            <div class="flex flex-col justify-center ml-6">
                <div class="text-2xl font-semibold leading-9 text-gradient">姜存根</div>
                <div class="text-sm text-[var(--muted)]">Frontend Engineer</div>
                <div class="mt-2 flex flex-wrap gap-1.5">
                    <span class="chip">10+ yrs</span>
                    <span class="chip">Vue • TS</span>
                    <span class="chip">Python</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full sm:w-64 mt-4 sm:mt-0 sm:ml-4 print:mt-0">
            <ul class="text-[var(--muted)] space-y-1.5">
                <li>
                    <span class="mr-2">📍</span> Beijing, China
                </li>
                <li class="hover:text-[var(--accent)]">
                    <a href="tel:13240062495">📞 132-4006-2495</a>
                </li>
                <li class="hover:text-[var(--accent)]">
                    <a href="mailto:1360571582@qq.com">📧 1360571582@qq.com</a>
                </li>
                <li class="hover:text-[var(--accent)]">
                    <a href="https://github.com/cungen" target="_blank">
                        👨‍💻 github.com/cungen
                    </a>
                </li>
                <li class="hover:text-[var(--accent)]">
                    <a href="https://cungen.github.io/notes" target="_blank">
                        👨‍💻 我的笔记
                    </a>
                </li>
                <li class="hover:text-[var(--accent)]">
                    <a href="https://www.iamroot.cn" target="_blank">
                        🌎 iamroot.cn
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
