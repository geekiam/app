<script setup lang="ts">
import {sidebarNavigation} from "~/components/sidebars/menu";


</script>

<template>
  <nav aria-label="Sidebar" class="">
    <div class="relative flex w-40 flex-col space-y-3 p-3">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="item in sidebarNavigation" :key="item.name">
              <a :href="item.href" :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                <Icon :name="item.icon" class="size-6 shrink-0 text-orange-500" aria-hidden="true" />
                {{ item.title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>





<!--      <a v-for="item in sidebarNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
          'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg']">
        <span class="sr-only">{{ item.name }}</span>
        <Icon :name="item.icon" :title="item.name" class="h-6 w-6 text-orange-500" aria-hidden="true" />
      </a>-->
    </div>
  </nav>
</template>

<style scoped>

</style>
