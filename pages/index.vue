<script lang="ts" setup>
import {useFollowingStore} from "~/stores/articles/followingStore";

const store = useFollowingStore()

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

