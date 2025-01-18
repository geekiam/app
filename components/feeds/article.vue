<script setup lang="ts">
import {useArticlesStore} from "~/stores/articles";
import {marked} from "marked";
import ArticleAuthor from "~/components/feeds/article-author.vue";


const articlesStore = useArticlesStore();
const {listen} = useMitter()

listen('selectedArticle', e => select(e))

onMounted(async () => {

})
function select(id: string) {
  articlesStore.select(id);
}

const article = computed(() => articlesStore.selectedArticle) ;

</script>

<template>
  <section class="container mx-auto max-h-screen overflow-visible">
    <article v-if="article" class="article-container summary">
      <div class="flex flex-col flex-grow max-w-full">
        <div>
          <img class=" w-full object-fill" :src="article.image" :alt="article.title" height="30" />
        </div>
        <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          <div class="mt-6 min-w-0 flex-1 sm:hidden md:block text-center">
            <h1 class="truncate text-2xl font-bold"> {{ article.title }}</h1>
          </div>
        </div>
        <div>
          <div class="break-all mt-2 lg:mt-4 summary justify-start">
            <div v-html="marked.parse(article.content)" ></div>
          </div>

        </div>
        <article-author :author="article.author" />
      </div>

    </article>
  </section>
</template>

<style scoped>

.article-container {
  @apply grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 xl:grid-cols-2 xl:gap-16;
  @apply flex flex-col items-center gap-4 md:flex-row lg:gap-9 m-1 rounded-lg lg:items-start lg:p-4 shadow-md;
}

.summary {
  @apply prose prose-base text-base max-w-full dark:text-gray-200 text-gray-800 sm:px-1
  dark:prose-blockquote:text-orange-500 prose-blockquote:text-lg
  prose-headings:text-orange-500 prose-a:no-underline
  prose-a:text-orange-500 dark:prose-a:text-orange-500  prose-strong:text-orange-500;
}
</style>
