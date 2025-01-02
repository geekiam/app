<script setup lang="ts">

import {marked} from "marked";

import { useArticlesStore } from '~/stores/articles';
const { emit } = useMitter()


const articlesStore = useArticlesStore();
const articles = articlesStore.articles;
await articlesStore.getArticles();


function select(id: string) {
  emit('selectedArticle', id);
}
</script>

<template>
  <section class="container mx-auto px-4 max-h-screen overflow-visible">

      <article v-for="article in articles" :key="article.id" class="article-container content" @click="select(article.id)"  >
        <!-- Image Section -->
        <div
            class="group image-container">
          <img v-if="article.image" :src="article.image" :alt="article.title" loading="lazy"
               class="image"/>
        </div>
        <!-- Content Section -->
        <div class="flex flex-col flex-grow lg:max-w-full">
          <h2 class="text-xl font-bold text-orange-500 lg:text-2xl">
            {{ article.title }}
          </h2>
          <div class="break-all mt-2 lg:mt-4">
            <div v-html="marked.parse(article.summary)"></div>
          </div>
          <div>
          </div>
          <!-- Metadata -->
          <div class="flex flex-col md:flex-row gap-2 mt-4">
            <span class="text-sm text-gray-400">{{ article.published }}</span>
          </div>
        </div>

      </article>

  </section>
</template>

<style scoped>
.article-container {
  @apply grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 xl:grid-cols-2 xl:gap-16 cursor-pointer ;
  @apply flex flex-col items-center gap-4 md:flex-row lg:gap-9 m-2 border-2 border-gray-700 rounded-lg lg:items-start lg:p-4 shadow-md;
}

.image {
  @apply absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110
}

.image-container {
  @apply relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg shadow-lg md:h-32 md:w-32 lg:h-48 lg:w-48;
}

.content {
  @apply prose prose-sm max-w-full dark:text-gray-200 text-gray-800 sm:px-1
  dark:prose-blockquote:text-orange-500 prose-blockquote:text-xl
  prose-headings:text-orange-500 prose-a:no-underline
  prose-a:text-orange-500 dark:prose-a:text-orange-500 justify-evenly prose-strong:text-orange-500
}

</style>
