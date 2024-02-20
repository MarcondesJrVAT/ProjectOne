<script setup>
import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
import {ref} from "vue";
import CarrouselCoverflow from "@/Components/CarrouselCoverflow.vue";
import CarrouselCards from "@/Components/CarrouselCards.vue";
import CarrouselProgress from "@/Components/CarrouselProgress.vue";
import CarrouselParallax from "@/Components/CarrouselParallax.vue";
import CarrouselScrollbar from "@/Components/CarrouselScrollbar.vue";
import OrgChart from "@/Components/OrgChart.vue";

const tab = ref('')
</script>

<template>
    <AuthenticatedLayout title="Dashboard">
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">
                    Principal
                </h2>
            </div>
        </template>

        <div class="py-8 relative text-center">
            <button @click="tab = 'coverflow'" type="button" class="m-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                CoverFlow
            </button>
            <button @click="tab = 'cards'" type="button" class="m-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                Cards
            </button>
            <button @click="tab = 'progress'" type="button" class="m-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                Progress
            </button>
            <button @click="tab = 'parallax'" type="button" class="m-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                Parallax
            </button>
            <button @click="tab = 'scrollbar'" type="button" class="m-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                Scrollbar
            </button>
            <button @click="tab = 'org'" type="button" class="m-1 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                Organograma
            </button>
        </div>

        <div class="py-12" v-if="tab === 'coverflow'">
            <div class="max-w-screen-xl mx-auto sm:px-6 lg:px-8">
                <div class="h-full bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <CarrouselCoverflow />
                </div>
            </div>
        </div>
        <div class="xl:grid xl:grid-cols-2 sm:grid-cols-1">
            <div class="py-6" v-if="tab === 'cards'">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="h-full bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                        <CarrouselCards />
                    </div>
                </div>
            </div>
            <div class="py-6" v-if="tab === 'progress'">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="h-full bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                        <CarrouselProgress />
                    </div>
                </div>
            </div>
        </div>

        <div class="xl:grid xl:grid-cols-2 sm:grid-cols-1">
            <div class="py-6"  v-if="tab === 'parallax'">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="h-80 bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                        <CarrouselParallax />
                    </div>
                </div>
            </div>
            <div class="py-6" v-if="tab === 'scrollbar'">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="h-80 bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                        <CarrouselScrollbar />
                    </div>
                </div>
            </div>
        </div>

        <div class="py-6" v-if="tab === 'org'">
            <div class="max-w mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <OrgChart />
                </div>
            </div>
        </div>

<!--        <div class="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1">-->
<!--            Você está Logado.!-->
<!--        </div>-->
    </AuthenticatedLayout>
</template>
