<script setup lang="ts">
definePageMeta({
  layout: 'settings',
  middleware: 'auth'
});
</script>

<template>
  <nuxt-layout name="settings">
    <template #menu>

        <settings-menu />

    </template>
  </nuxt-layout>
</template>

<style scoped>

</style>
