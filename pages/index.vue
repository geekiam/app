<script lang="ts" setup>

import Chat from "~/components/feeds/chat.vue";
import List from "~/components/feeds/feed.vue";
import PreviewFeed from "~/components/feeds/preview.vue";
definePageMeta({
  layout: 'default',
  middleware: 'auth'

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

