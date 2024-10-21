<script lang="ts" setup>

import Chat from "~/components/app/chat.vue";
import List from "~/components/app/list.vue";
definePageMeta({
  layout: 'default',
   middleware: 'auth'
 })

</script>

<template>
  <nuxt-layout name="default">
    <template #list >
      <list query="cunt" index-name="asdf"/>
    </template>

  <template #content>
    <chat />
  </template>

  </nuxt-layout>

</template>

