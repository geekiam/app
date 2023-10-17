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
     <list indexName="Sample_Phone_Store_Index" query="Samsung" />
    </template>

  <template #content>
    <chat >
      <p class="text-white">The Page Content will go here</p>
    </chat>
  </template>

  </nuxt-layout>

</template>

