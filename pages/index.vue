<script lang="ts" setup>
import {useFollowingStore} from "~/stores/articles/followingStore";

const store = useFollowingStore()
onMounted(async () => {
  let settings = getUserSettings()
  await store.feed(settings ? settings.following : null)
})
definePageMeta({
  layout: 'default',
  middleware: 'auth',
  title: 'Home'
 })

</script>

<template>
  <nuxt-layout>
    <template #list >
      <articles-list :store="store" />
    </template>

  <template #content>
     <articles-view />
  </template>

  </nuxt-layout>

</template>

