<script lang="ts" setup>
import {useFollowingStore} from "~/stores/articles/followingStore";

definePageMeta({
  layout: 'default',
  middleware: 'auth',
  title: 'Home'
})

const store = useFollowingStore()
onMounted(async () => {
  const settings = getUserSettings()
  await store.feed(settings?.following ?? null)
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

