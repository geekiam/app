<script setup>


import {useArticlesStore} from "~/stores/articles";
import {marked} from "marked";
import Author from "~/components/feeds/author.vue";

const articlesStore = useArticlesStore();

await articlesStore.getArticles();
const articles = articlesStore.articles;

</script>

<template>
  <section class="container mx-auto px-4 max-h-screen overflow-visible">
     <article v-for="article in articles" :key="article" class="article-container">

         <!-- Image Section -->
         <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg shadow-lg md:h-32 md:w-32 lg:h-48 lg:w-48">
           <img v-if="article.image" :src="article.image" :alt="article.title" loading="lazy" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
         </a>

         <!-- Content Section -->
         <div class="flex flex-col flex-grow lg:max-w-full">
           <!-- Title -->
           <h2 class="text-xl font-bold text-orange-500 lg:text-2xl">
             <a href="#" class="transition duration-100 hover:text-orange-500 active:text-orange-600">
               {{ article.title }}
             </a>
           </h2>
           <div> </div> <!--<Author :pubkey="article.pubkey" /></div>
-->
           <!-- Summary -->
           <div class="content break-all mt-2 lg:mt-4">
             <div class="content" v-html="marked.parse(article.summary)"> </div>
           </div>

           <!-- Metadata -->
           <div class="flex flex-col md:flex-row gap-2 mt-4">
             <span class="text-sm text-gray-400">{{ article.published }}</span>
           </div>

           <!-- Read More Link -->
           <div class="mt-3">
             <a href="#" class="font-semibold text-orange-500 transition duration-100 hover:text-orange-600 active:text-orange-700">
               Read more
             </a>
           </div>
         </div>
    </article>
  </section>
</template>

<style scoped>
.article-container {
  @apply grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 xl:grid-cols-2 xl:gap-16;
  @apply flex flex-col items-center gap-4 md:flex-row lg:gap-9 m-2 border-2 border-gray-700 rounded-lg lg:items-start lg:p-4 shadow-md;
}

.content {
  @apply prose prose-sm max-w-full dark:text-gray-200 text-gray-800 sm:px-1
  dark:prose-blockquote:text-orange-500 prose-blockquote:text-xl
  prose-headings:text-orange-500 prose-a:no-underline
  prose-a:text-orange-500 dark:prose-a:text-orange-500 justify-evenly prose-strong:text-orange-500
}

</style>
