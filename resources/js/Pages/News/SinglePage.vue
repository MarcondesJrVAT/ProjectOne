<script setup>
import {ref} from "vue";
const tab = ref('noticias')
import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
</script>

<template>
    <AuthenticatedLayout title="Notícias">
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">
                    Notícias SPA
                </h2>
            </div>
        </template>

        <div class="py-8 relative text-center">
            <button @click="tab = 'noticias'" type="button" class="m-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                Notícias
            </button>
            <button @click="tab = 'categorias'" type="button" class="m-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                Categorias
            </button>
        </div>

        <div v-if="tab === 'noticias'" class="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1">
            Página de Notícias SPA.!
        </div>
        <div v-if="tab === 'categorias'" class="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1">
            Página de Categorias de Notícias SPA.!
        </div>
    </AuthenticatedLayout>
</template>
