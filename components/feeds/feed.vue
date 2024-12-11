<script lang="ts" setup>
import {format} from "date-fns";
import { marked } from "marked"
const props = defineProps({
  filter: {
    type : String,
    required: true
  }
})
import { useHomeStore } from "~/stores/home";
import {NDKKind} from "@nostr-dev-kit/ndk";
const homeContext = useHomeStore();
const events = ref()

async function fetchUserFeed() {

  return await homeContext.fetchFeed([NDKKind.Article]);
}

onMounted(async () => {
  let userFeed = await useAsyncData(fetchUserFeed);
  events.value = userFeed.data.value;
})



</script>

<template>
  <div class="column-style">

    <div v-for="event in events" :key="event.id" class="box-style">
      <h1>{{ event.title }}</h1>
      <div class="text-orange-500 text-lg break-all">
        <div class="" v-html="marked.parse(event.content )"> </div>
        </div>
      <p class="text-orange-200 text-xl">{{ format(new Date(event.created_at * 1000 ),'dd MMM yyyy')}}</p>
      <p class="dark:text-gray-100 text-gray-900 pt-5 text-sm">{{ event.author }}</p>
    </div>
  </div>
</template>

<style>
.column-style {
  @apply max-h-screen overflow-visible
}
.box-style {
  @apply border p-2 rounded mb-2 border-orange-100 text-wrap
}
</style>
