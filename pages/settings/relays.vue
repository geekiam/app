<script setup lang="ts">
definePageMeta({
  layout: 'settings',
  middleware: 'auth',
  title: 'Relays'
});
</script>

<template>

    <nuxt-layout>
      <template #menu>
        <settings-menu />
      </template>

      <template #content>
        <div class="divide-y ">
          <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
            <div>
              <h2 class="text-base/7 font-semibold text-orange-500">Edit your preffered relays</h2>
            </div>
            <settings-relays />
          </div>
        </div>
      </template>
    </nuxt-layout>

</template>

<style scoped>

</style>
