<script lang="ts" setup>

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
      <list filter="Cunt" />
    </template>

  <template #content>
    <chat />
  </template>

  </nuxt-layout>

</template>

