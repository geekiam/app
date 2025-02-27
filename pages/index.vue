<script lang="ts" setup>

definePageMeta({
  layout: 'default',
  middleware: 'auth',
  title: 'Home'

 })

</script>

<template>
  <nuxt-layout>
    <template #list >
      <articles-list />
    </template>

  <template #content>
     <articles-view />
  </template>

  </nuxt-layout>

</template>

