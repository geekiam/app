<script setup lang="ts">
import {useNdkStore} from "~/stores/ndk";
import {NDKArticle, NDKEvent} from "@nostr-dev-kit/ndk";
import {marked} from "marked";
import {format} from "date-fns";

const props = defineProps({
  id: Number,
  event: NDKEvent
})
const store = useNdkStore();

const article = ref()

onMounted(async () => {
  article.value = new NDKEvent(store.ndk, props.event)
})

</script>

<template>
  <div>
    <div v-if="article" class="p-4">
      <h1>{{ article.title }}</h1>
      <ul>
        <li>Published at: {{ format(new Date(article.created_at * 1000 ),'dd MMM yyyy')}} </li>
        <li>Author: {{ article.author.pubkey }}</li>
      </ul>
      <div class="" v-html="marked.parse(article.content)"></div>
      <pre class="bg-gray-800 text-white text-xs overflow-x-scroll">
      <code class="">
        {{ article.rawEvent() }}
      </code>
    </pre>
    </div>
    <div v-else>
      Loading article...
    </div>
  </div>
</template>
<style scoped></style>
