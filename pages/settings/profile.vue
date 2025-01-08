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
        <settings-menu />
    </template>

    <template #content>
      <settings-profile />
    </template>
  </nuxt-layout>
</template>

<style scoped>

</style>
