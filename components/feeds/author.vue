<script setup lang="ts">


import type {Author} from "~/types";


const props = defineProps({
  author: {
        type: Object as () => Author,
        required : true
  },
    published: {
      type: String,
      required : true
    },
})




</script>

<template>
  <div class="flex items-center md:space-x-2">
    <UAvatar v-if="props.author.avatar" :src="props.author.avatar" :alt="props.author.name" class=" h-4 border rounded-full" />
    <nuxt-img v-else src="brand/incognito" :alt="props.author.name" class=" h-8 w-8 border rounded-full" />
    <p class="text-sm">{{ props.author.name }} • {{ props.published }}</p>
  </div>

</template>

<style scoped></style>
