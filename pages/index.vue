<script lang="ts" setup>


import List from "~/components/app/list.vue";
import {AsyncLocalStorage} from "async_hooks";
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

