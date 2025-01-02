<script setup lang="ts">
import {useArticlesStore} from "~/stores/articles";
import {marked} from "marked";

const articlesStore = useArticlesStore();
const { listen } = useMitter()
listen('selectedArticle', e => select(e))



function select(id: string) {
   console.log("select: ",id)
  articlesStore.select(id);

}
const article = computed(() => articlesStore.selectedArticle);
</script>

<template>
  <section class="container mx-auto px-4 max-h-screen overflow-visible">
  <article v-if="article" class="article-container content">
    <!-- Image Section -->

    <!-- Content Section -->
    <div class="flex flex-col flex-grow lg:max-w-full">
      <h2 class="text-xl font-bold text-orange-500 lg:text-2xl">
        {{ article.title }}
      </h2>
      <div class="break-all mt-2 lg:mt-4">
        <div v-html="marked.parse(article.content)"></div>
      </div>
      <div>
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
  @apply w-full h-auto object-cover object-center transition duration-200 group-hover:scale-110;
}

.image-container {
  @apply relative block w-full self-start overflow-hidden rounded-lg shadow-lg;
}

.content {
  @apply prose prose-sm max-w-full dark:text-gray-200 text-gray-800 sm:px-1
  dark:prose-blockquote:text-orange-500 prose-blockquote:text-xl
  prose-headings:text-orange-500 prose-a:no-underline
  prose-a:text-orange-500 dark:prose-a:text-orange-500 justify-evenly prose-strong:text-orange-500
}
</style>
