<script setup>
import PerfectScrollbar from '@/Components/PerfectScrollbar.vue'
import SidebarLink from '@/Components/Sidebar/SidebarLink.vue'
import { DashboardIcon } from '@/Components/Icons/outline'
import SidebarCollapsible from '@/Components/Sidebar/SidebarCollapsible.vue'
import SidebarCollapsibleItem from '@/Components/Sidebar/SidebarCollapsibleItem.vue'
import {
    UserGroupIcon,
    ShieldExclamationIcon,
    NewspaperIcon,
    DocumentIcon,
    BookmarkIcon,
    PresentationChartBarIcon,
    StarIcon,
    EyeIcon,
    ChatIcon,
} from '@heroicons/vue/outline'
</script>

<template>
    <PerfectScrollbar tagname="nav" aria-label="main" class="relative flex flex-col flex-1 max-h-full gap-4 px-3">
        <SidebarLink title="Início" :href="route('dashboard')" :active="route().current('dashboard')">
            <template #icon>
                <DashboardIcon
                    class="flex-shrink-0 w-6 h-6"
                    aria-hidden="true"
                />
            </template>
        </SidebarLink>

        <SidebarCollapsible title="Usuários">
            <template #icon>
                <UserGroupIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>

            <SidebarCollapsibleItem :href="route('users.create')" title="Novo Usuário" :active="route().current('users.create')" />
            <SidebarCollapsibleItem :href="route('users.index')" title="Listar Usuários" :active="route().current('users.index')" />
        </SidebarCollapsible>

        <SidebarLink title="Permissões" :href="route('roles.index')" :active="route().current('roles.*')">
            <template #icon>
                <ShieldExclamationIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>
        </SidebarLink>

        <SidebarCollapsible title="Notícias" >
            <template #icon>
                <NewspaperIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>

            <SidebarCollapsibleItem :href="route('news.index')" title="Notícias" :active="route().current('news.index')" />
            <SidebarCollapsibleItem :href="route('news.category')" title="Categorias" :active="route().current('news.category')" />
        </SidebarCollapsible>

        <SidebarLink title="Notícias - SPA" :href="route('news.spa')" :active="route().current('news.spa')" >
            <template #icon>
                <NewspaperIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>
        </SidebarLink>

        <SidebarCollapsible title="Conteúdos">
            <template #icon>
                <DocumentIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>

            <SidebarCollapsibleItem :href="route('content.category')" title="Categorias" :active="route().current('content.category')" />
            <SidebarCollapsibleItem :href="route('content.courses')" title="Cursos" :active="route().current('content.courses')" />
            <SidebarCollapsibleItem :href="route('content.series')" title="Séries" :active="route().current('content.series')" />
            <SidebarCollapsibleItem :href="route('content.components')" title="Componentes" :active="route().current('content.components')" />
            <SidebarCollapsibleItem :href="route('content.schoolyear')" title="Anos Letivos" :active="route().current('content.schoolyear')" />
            <SidebarCollapsibleItem :href="route('content.classes')" title="Aulas" :active="route().current('content.classes')" />
        </SidebarCollapsible>

        <SidebarLink title="Conteúdos - SPA" :href="route('content.spa')" :active="route().current('content.spa')">
            <template #icon>
                <DocumentIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>
        </SidebarLink>

        <SidebarLink title="Site" :href="route('site.index')" :active="route().current('site.index')">
            <template #icon>
                <BookmarkIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>
        </SidebarLink>

        <SidebarLink title="Slides" :href="route('slide.index')" :active="route().current('slide.index')">
            <template #icon>
                <PresentationChartBarIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>
        </SidebarLink>

        <SidebarLink title="Prêmios" :href="route('award.index')" :active="route().current('award.index')">
            <template #icon>
                <StarIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>
        </SidebarLink>

        <SidebarCollapsible title="Banners">
            <template #icon>
                <EyeIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>

            <SidebarCollapsibleItem :href="route('banner.index')" title="Banners" :active="route().current('banner.index')"/>
            <SidebarCollapsibleItem :href="route('banner.category')" title="Categorias" :active="route().current('banner.category')"/>
        </SidebarCollapsible>

        <SidebarCollapsible title="Comentários">
            <template #icon>
                <ChatIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true"/>
            </template>

            <SidebarCollapsibleItem :href="route('comment.index')" title="Comentários" :active="route().current('comment.index')" />
            <SidebarCollapsibleItem :href="route('comment.setup')" title="Configurações" :active="route().current('comment.setup')" />
        </SidebarCollapsible>

        <!-- Examples -->
        <!--
        => External link example
        <SidebarLink
            title="Github"
            href="https://github.com/kamona-wd/kui-laravel-breeze"
            external
            target="_blank"
        >
        </SidebarLink>

        => Collapsible examples
        <SidebarCollapsible title="Users" :active="$page.url.startsWith('/users')">
            <SidebarCollapsibleItem :href="route('users.index')" title="List" :active="$page.url === '/users/index'" />
            <SidebarCollapsibleItem :href="route('users.create')" title="Create" :active="$page.url === '/users/create'" />
        </SidebarCollapsible>

        <SidebarCollapsible title="Users" :active="usePage().url.value.startsWith('/users')">
            <template #icon>
                <UserIcon
                    class="flex-shrink-0 w-6 h-6"
                    aria-hidden="true"
                />
            </template>

            <SidebarCollapsibleItem :href="route('users.index')" title="List" :active="route().current('users.index')" />
            <SidebarCollapsibleItem :href="route('users.create')" title="Create" :active="route().current('users.create')" />
        </SidebarCollapsible>-->
    </PerfectScrollbar>
</template>
