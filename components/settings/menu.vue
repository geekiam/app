<script setup>

const SETTINGS_MENU_ITEMS = [
  { name: 'Profile', href: '/settings/profile', icon: 'ion:person-circle-outline'},
  { name: 'Relays', href: '/settings/relays', icon: 'simple-icons:relay'},
]
</script>
<template>

    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li v-for="item in SETTINGS_MENU_ITEMS" :key="name">
          <a :href="item.href" class="flex items-center px-6 py-3 hover:bg-gray-700 transition-colors" >
            <Icon class="mr-4" :name="item.icon" />{{ item.name }}</a>
        </li>
      </ul>
    </nav>

</template>



<style scoped>

</style>
