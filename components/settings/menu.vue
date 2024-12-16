<script setup>
import {MenuItem} from "@headlessui/vue";

const SETTINGS_MENU_ITEMS = [
  {name: 'Profile', href: '/settings/profile', icon: 'ion:person-circle-outline'},
  { name: 'Relays', href: '/settings/relays', icon: 'simple-icons:relay'},
]
</script>
<template>
  <div class="min-h-full max-w-xs">
  <aside class="w-64 bg-gray-800 text-white">
    <nav class="mt-4">
      <ul  >
        <li v-for="item in SETTINGS_MENU_ITEMS" :key="name">
          <a
              :href="item.href"
              class="flex items-center px-6 py-3 hover:bg-gray-700 transition-colors"
          >
            <Icon class="mr-4" :name="item.icon" />
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
  </div>
</template>



<style scoped>

</style>
