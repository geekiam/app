<script lang="ts" setup>

import Chat from "~/components/app/chat.vue";
definePageMeta({
  layout: 'default',
   middleware: 'auth'
 })

</script>

<template>
  <nuxt-layout name="default">
    <template #list >

    </template>

  <template #content>
    <chat />
  </template>

  </nuxt-layout>

</template>

