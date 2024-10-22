<script lang="ts" setup>

import Chat from "~/components/app/chat.vue";
import List from "~/components/app/list.vue";
definePageMeta({
  layout: 'default',
   middleware: 'auth',

 })

</script>

<template>
  <nuxt-layout>
    <template #list >
      <list />
    </template>

  <template #content>
    <chat />
  </template>

  </nuxt-layout>

</template>

