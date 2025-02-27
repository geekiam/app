<script setup lang="ts">
import type {Author} from "~/types";

const props = defineProps({
  author: {
    type: Object as () => Author,
    required: true
  }
})

</script>

<template>
  <div class="w-full rounded max-w-2xl mx-auto overflow-hidden bg-gray-300 dark:bg-gray-800 backdrop-blur-lg">
    <div class="relative p-6 ">
      <div class="relative flex flex-col md:flex-row md:items-center gap-6">
        <div class="flex-shrink-0">
          <div class="relative group">
            <div
                class="absolute w-28 h-28 -inset-0.5  rounded-full">
            </div>
            <u-avatar
                :src="author.avatar"
                class="border-2 border-white dark:border-gray-700"
                :alt="author.displayName"
                size="3xl"
            />
          </div>
        </div>
        <div class="flex-1 space-y-4">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">{{ author.displayName }}</h2>
            <p class="mt-1 text-gray-600 dark:text-gray-100">
              {{ author.about }}
            </p>
          </div>

          <div class="flex gap-4" v-if="author.website">
            <a :href="author.website" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-200">
              <Icon name="lineicons:website" class="w-6 h-6 text-orange-500"/>
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
