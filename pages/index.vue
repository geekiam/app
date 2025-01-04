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
      <feeds-preview />
    </template>

  <template #content>
     <feeds-article />
  </template>

  </nuxt-layout>

</template>

