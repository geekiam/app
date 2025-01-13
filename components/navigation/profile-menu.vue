<script setup lang="ts">
const secondaryNavigation = [
  {name: 'Profile', href: '/settings/profile', current: true},

]
</script>

<template>
  <main>
    <header class="border-b border-white/5">
      <!-- Secondary navigation -->
      <nav class="flex overflow-x-auto py-4">
        <ul role="list"
            class="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-400 sm:px-6 lg:px-8">
          <li v-for="item in secondaryNavigation" :key="item.name">
            <a :href="item.href" :class="item.current ? 'text-orange-500' : ''">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </header>
    <slot name="content"/>


  </main>
</template>

<style scoped>

</style>
