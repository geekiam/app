<script setup lang="ts">
definePageMeta({
  layout: 'settings',
  middleware: 'auth',
  title: 'Relays'
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
