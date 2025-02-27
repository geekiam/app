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
    <UAvatar v-if="props.author.avatar" :src="props.author.avatar" :alt="props.author.name" size="3xs" class="avatar" />
    <nuxt-img v-else src="brand/incognito" :alt="props.author.name" class="avatar" />
    <span class="text-xs ml-5 mr-2">{{ props.author.name }}</span>
  </div>
</template>

<style scoped>
.avatar {
  @apply ml-2  rounded-full
}
</style>
