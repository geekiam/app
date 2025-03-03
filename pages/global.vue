<script lang="ts" setup>
import {useGlobalStore} from "~/stores/articles/globalStore";

definePageMeta({
  layout: 'default',
  middleware: 'auth',
  title: 'Global Feed'
})

const store = useGlobalStore()
onMounted(async () => {
  await store.feed(null)
})


</script>

<template>
  <nuxt-layout>
    <template #list >
      <articles-list :store="store" />
    </template>

    <template #content>
      <articles-view :store="store" />
    </template>

  </nuxt-layout>

</template>
