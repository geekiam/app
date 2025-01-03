<script lang="ts" setup>

import PreviewFeed from "~/components/feeds/preview.vue";
definePageMeta({
  layout: 'default',
  middleware: 'auth',
  title: 'Home'

 })

</script>

<template>
  <nuxt-layout>
    <template #list >
      <preview-feed  />
    </template>

  <template #content>
     <feeds-article />
  </template>

  </nuxt-layout>

</template>

