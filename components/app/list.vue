<script lang="ts" setup>
import { useNdkStore } from "~/stores/NdkStore";
import { useHomeContext } from "~/stores/HomeContext";
import { NDKEvent } from "@nostr-dev-kit/ndk";
import { useAsyncData } from "#app";

// Extracting store hooks into separate constants for clarity
const ndkStore = useNdkStore();
const homeContext = useHomeContext();

// Extracting fetch logic into a named async function for better readability
async function fetchUserFeed() {
  return await homeContext.fetchUserFeed(ndkStore.ndk);
}

// Using the named async function with useAsyncData
const userFeed = await useAsyncData(fetchUserFeed);

</script>

<template>
  <div class=" max-h-screen overflow-visible ">
    <div v-for="event in userFeed.data.value" :key="event.id"  class="border border-1 p-2 rounded mb-2 border-gray-700">
      <p class="text-orange-500 text-xl">{{ event.content }}</p>
      <p class="dark:text-gray-100 text-gray-900 pt-5 text-sm">{{ event.author }}</p>
    </div>
  </div>
</template>

<style>

</style>
