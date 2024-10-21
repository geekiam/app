<script lang="ts" setup>
const props = defineProps( {
  indexName: {
    type: String,
    required: true
  },
  query: {
    type: String,
    required: true
  }
})

import { useNdkStore} from "~/stores/NdkStore";
import { useProfileStore } from "~/stores/useProfileStore";
import {NDKEvent} from "@nostr-dev-kit/ndk";

const ndkStore = useNdkStore();
const profileStore = useProfileStore();


const feed = await profileStore.getFeed(profileStore.user, ndkStore.ndk)
console.log(feed)
</script>

<template>
  <div class=" max-h-screen overflow-visible ">
    <div v-for="event in feed" :key="event.id"  class="border border-1 p-2 rounded mb-2 border-gray-700">
      <p class="text-orange-500 text-xl">{{ event.content }}</p>
      <p class="dark:text-gray-100 text-gray-900 pt-5 text-sm">{{ event.author }}</p>
    </div>
  </div>
</template>

<style>

</style>
