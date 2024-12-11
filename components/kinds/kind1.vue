<script setup lang="ts">
import {useNdkStore} from "~/stores/ndk";
import {NDKArticle, NDKEvent} from "@nostr-dev-kit/ndk";
import {marked} from "marked";
import {format} from "date-fns";
import FeedsAuthor from "#components";

const props = defineProps({
  id: String,
  event: NDKEvent,
})
const store = useNdkStore();
const event = ref()

onMounted(async () => {
  event.value = new NDKEvent(store.ndk, props.event)
})
</script>

<template>
  <div>
    <div v-if="event" class="p-4">
      <div class="" v-html="marked.parse(event.content)"></div>
      <pre class="bg-gray-800 text-white text-xs overflow-x-scroll py-5">
      <code class=" flex-wrap">
        {{ event.rawEvent() }}
      </code>
    </pre>
      <ul>
        <li>Published at: {{ format(new Date(event.created_at * 1000), 'dd MMM yyyy') }}</li>
        <li>Author : {{event.author.pubkey}}</li>

      </ul>
    </div>
    <div v-else>
     <p class="text-indigo-400"> Loading article...</p>
    </div>
  </div>
</template>
<style scoped></style>
