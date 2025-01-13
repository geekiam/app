<script setup lang="ts">

definePageMeta({
  layout: 'settings',
  middleware: 'auth',
  title: 'Profile'
});

</script>

<template>
  <nuxt-layout>
    <template #menu>
       <navigation-profile-menu />
    </template>

    <template #content>
      <div class="divide-y ">
        <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <h2 class="text-base/7 font-semibold text-orange-500">Nostr profile details</h2>
          </div>
         <settings-profile />
        </div>
      </div>
    </template>
  </nuxt-layout>
</template>

<style scoped>

</style>
