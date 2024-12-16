<script setup lang="ts">
definePageMeta({
  layout: 'settings',
  middleware: 'auth'
});
</script>

<template>
  <nuxt-layout name="settings">
    <template #menu>
      <div class="min-h-full max-w-xs shadow-lg">
        <settings-menu />
      </div>
    </template>
  </nuxt-layout>
</template>

<style scoped>

</style>
