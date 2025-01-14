<script setup lang="ts">
import type {Author} from "~/types";

const props = defineProps({
  author: {
        type: Object as () => Author,
        required : true
  }
})
</script>

<template>
  <div class="flex items-center md:space-x-1 break-before-all">
    <UAvatar v-if="props.author.avatar" :src="props.author.avatar" :alt="props.author.name" class="avatar" />
    <nuxt-img v-else src="brand/incognito" :alt="props.author.name" class="avatar" />
    <p class="text-sm ml-2 mr-2">{{ props.author.name }}</p>
  </div>
</template>

<style scoped>
.avatar {
  @apply h-6 w-6 border rounded-full ml-2
}
</style>
