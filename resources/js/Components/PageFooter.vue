<script setup>
import { HeartIcon } from '@heroicons/vue/solid'
</script>

<template>
    <footer class="flex-shrink-0 px-6 py-4">
        <p
            class="flex items-center justify-center gap-1 text-sm text-gray-600  dark:text-gray-400"
        >
            <span>Desenvolvido com </span>

            <span>
                <HeartIcon class="w-6 h-6 text-red-500" />

                <span className="sr-only">.</span>
            </span>

            <span>por</span>

            <a
                href="https://github.com/Kamona-WD"
                target="_blank"
                class="text-blue-600 hover:underline"
            >
                Marcondes Junior
            </a>
        </p>
    </footer>
</template>
