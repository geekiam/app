<script setup lang="ts">
import {marked} from "marked";
import {useArticlesStore} from '~/stores/articles';

const {emit} = useMitter()
const articlesStore = useArticlesStore();

onMounted(async () => {
  console.log('mounted')
  await articlesStore.getArticles();

})

function select(id: string) {
  emit('selectedArticle', id);
}
const articles = articlesStore.articles;
</script>

<template>
  <section class="container mx-auto px-4 max-h-screen overflow-visible">
    <article v-for="article in articles" :key="article.id" class="border-2 border-gray-700 rounded-lg m-2 shadow-md">
      <div class=" article-container content"   @click="select(article.id)">
        <div
            class="group image-container">
          <img v-if="article.image" :src="article.image" :alt="article.title" :title="article.title" loading="lazy"
               class="image"/>
          <nuxt-img v-else :alt="article.title" src="brand/question-mark" loading="lazy" class="image"/>
        </div>
        <!-- Content Section -->

        <div class="flex flex-col flex-grow lg:max-w-full">
          <div class="flex items-center gap-x-2 text-xs">
            <feeds-author :author="article.author" :published="article.published" lazy="true" />
          </div>
          <p class="text-lg font-bold text-orange-500" v-if="article.title">
            {{ article.title }}
          </p>

          <div v-if="article.summary" class="break-all ">
            <div v-html="marked.parse(article.summary)"></div>
          </div>
      </div>



      </div>
      <div class="flex justify-center gap-2 flex-wrap p-4">
        <span class="text-md text-orange-300 ml-1" v-for="tag in article.tags" :key="tag">#{{tag}}</span>
      </div>
    </article>
  </section>
</template>

<style scoped>
.article-container {
  @apply grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 xl:grid-cols-2 xl:gap-16 cursor-pointer ;
  @apply flex flex-col items-center gap-4 md:flex-row lg:gap-9   lg:items-start lg:p-4 ;
}

.image {
  @apply absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110;
}

.image-container {
  @apply relative block h-64 w-full shrink-0 self-start overflow-hidden rounded-lg shadow-lg md:h-24 md:w-24 lg:h-32 lg:w-32;
}

.content {
  @apply prose prose-sm max-w-full dark:text-gray-200 text-gray-800 sm:px-1
  dark:prose-blockquote:text-orange-500 prose-blockquote:text-xl
  prose-headings:text-orange-500 prose-a:no-underline
  prose-a:text-orange-500 dark:prose-a:text-orange-500 justify-evenly prose-strong:text-orange-500
}

</style>
