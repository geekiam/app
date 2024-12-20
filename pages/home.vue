<script setup lang="ts">
import Chat from "~/components/feeds/chat.vue";
import List from "~/components/feeds/feed.vue";
definePageMeta({
  layout: 'default',
  middleware: 'auth'

})
</script>

<template>
  <nuxt-layout>
    <template #list >
         <feeds-preview-feed />
    </template>

    <template #content>

    </template>

  </nuxt-layout>
</template>

<style scoped>

</style>
