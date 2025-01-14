<script setup lang="ts">
import {marked} from "marked";
import {useArticlesStore} from '~/stores/articles';
import type {Article} from "~/types";

const {emit} = useMitter()
const articlesStore = useArticlesStore();

onMounted(async () => {
  await articlesStore.getArticles();
})

function select(id: string) {
  emit('selectedArticle', id);
}

const articles = Array.from(articlesStore.articles).sort((a, b) => {
  return new Date(a.published).getTime() - new Date(b.published).getTime();
});
</script>
<template>
  <section class="container mx-auto px-1 max-h-screen overflow-visible">
    <article v-for="article in articles" :key="article.id" class="border-2 border-gray-700 rounded-lg m-1 shadow-md">
      <div class="article-container content" @click="select(article.id)">
        <img v-if="article.image" :src="article.image" :alt="article.title" :title="article.title" class="image">
        <nuxt-img v-else :alt="article.title" src="brand/question-mark" :title="article.title" loading="lazy" class="image" />
        <div class="flex flex-col flex-grow lg:max-w-full">
          <div class="flex items-center mb-1">
            <feeds-author :author="article.author" lazy="true" class="mr-2" />
            <p class="text-xs text-gray-400 ml-2">{{ article.published }}</p>
          </div>
          <p class="text-lg font-semibold text-orange-500 justify-center m-1">{{ article.title }}</p>
        </div>
      </div>
      <div class="mt-2 px-5">
      <div v-if="article.summary" class="break-all content">
        <div v-html="marked.parse(article.summary)"></div>
      </div>
      <div class="flex flex-wrap gap-2 mb-2"> <span class="text-md text-orange-300" v-for="tag in article.tags" :key="tag">#{{ tag }}</span>
      </div>
      </div>
    </article>
  </section>
</template>
<style scoped>
.article-container {
  @apply grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 xl:grid-cols-2 xl:gap-8 cursor-pointer ;
  @apply flex flex-col items-center gap-4 md:flex-row lg:gap-9   lg:items-start lg:p-4 ;
}

.image {
  @apply w-28 h-28 object-cover rounded-t-lg mr-4 ml-2;
}

.content {
  @apply prose prose-sm max-w-full dark:text-gray-300 text-gray-800 sm:px-1
  dark:prose-blockquote:text-orange-500 prose-blockquote:text-xl
  prose-headings:text-orange-500 prose-a:no-underline
  prose-a:text-orange-500 dark:prose-a:text-orange-500 justify-evenly prose-strong:text-orange-500
}

</style>
