<script lang="ts" setup>
import {
  FireIcon,
  ArrowTrendingUpIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/vue/24/outline'

const sidebarNavigation = [
  { name: 'Popular', href: '#', icon: 'cil:fire', current: true , title: "Most Popular" },
  { name: 'TrendingUp', href: '#', icon: 'ion:trending-up', current: false },
  { name: 'MostDiscussed', href: '#', icon: 'ion:ios-chatbubbles', current: false },
]

</script>

<template>

    <!-- Narrow sidebar-->
    <nav aria-label="Sidebar" class="hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-gray-100 dark:md:bg-gray-800 bg-gray-100">
      <div class="relative flex w-20 flex-col space-y-3 p-3">
        <a v-for="item in sidebarNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
          'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg']">
          <span class="sr-only">{{ item.name }}</span>
          <Icon :name="item.icon" :title="item.name" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </nav>

</template>


