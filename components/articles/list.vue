<script setup lang="ts">
import { ref, computed } from 'vue'
import { marked } from "marked"
import ListAuthor from "~/components/articles/list-author.vue";
import type {IStore} from "~/types";


const props = defineProps({
  store: {
    type:  Object as () => IStore,
    required: true
  }
})

const { emit } = useMitter()
const articlesStore = props.store;
const selected = ref<string | undefined>(undefined)

// Make authors reactive by moving it into a computed property
const authors = computed(() => Array.from(articlesStore.authors))

const options = computed(() =>
    authors.value.map(author => ({
      label: `${author.name} ${author.displayName !== undefined || true ? `- ${author.displayName}` : ''}`,
      value: author.name,
    }))
)

/*onMounted(async () => {
  let settings = getUserSettings()
  await articlesStore.feed(settings ? settings.following : null)


})*/

function select(id: string) {
  emit('selectedArticle', id)
}

const articles = computed(() => {
  let filteredArticles = [...articlesStore.articles]

  if (selected.value) {
    filteredArticles = filteredArticles.filter(article =>
        article.author.name === selected.value
    )
  }

  return filteredArticles.sort((a, b) => {
    const dateA = new Date(a.published).getTime()
    const dateB = new Date(b.published).getTime()
    return dateB - dateA
  })
})
</script>
<template>
  <section class="container mx-auto max-h-screen overflow-y-visible overflow-x-hidden pt-1 min-h-screen">
    <USelect
        v-model="selected"
        :options="options"
        placeholder="All"
        class=" mb-2 mx-auto w-auto m-2"  />

    <article v-for="article in articles" :key="article.id" class="border-2 border-gray-700 rounded-lg mb-2 shadow-md">
      <div class="article-container summary" @click="select(article.id)">
        <div class="flex flex-col px-1 lg:w-full">
          <div class="flex flex-row items-center justify-start gap-1 pt-2">
            <list-author :author="article.author" lazy="true" class="mr-1" />
            <span class="text-xs text-gray-400">{{ article.published }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <div class="flex flex-col lg:w-full sm:flex-row items-center">
              <img v-if="article.image" :src="article.image" :alt="article.title" :title="article.title" class="image">
              <nuxt-img v-else :alt="article.title" src="brand/question-mark" :title="article.title" loading="lazy"
                        class="mb-1 image"/>
              <div class="text-left lg:flex-1 ml-2">
                <span class="text-base sm:text-lg font-semibold text-orange-500">{{ article.title }}</span>
              </div>
            </div>
          </div>
          <div v-if="article.summary" class="summary lg:order-3 px-1 text-xs">
            <div v-html="marked.parse(article.summary)"></div>
            <div class="flex flex-1 mb-1">
              <div class="flex flex-wrap flex-1 mb-1">
    <span
        class="inline-flex items-center rounded-md bg-orange-100 me-1 px-1.5 py-0.5 text-xs font-medium text-orange-600 mr-2 mt-1"
        v-for="tag in article.tags" :key="tag">{{ tag }}
    </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
<style scoped>
.article-container {
  @apply grid  sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 xl:grid-cols-2 xl:gap-8 cursor-pointer ;
  @apply flex flex-col items-center gap-4 lg:flex-row lg:gap-2 lg:items-start lg:p-4;
}

.image {
  @apply w-full lg:w-20 h-auto object-scale-down sm:h-16 rounded-t-lg ;
}

.summary {
  @apply prose text-xs max-w-full dark:text-gray-300 text-gray-800 sm:px-1
  dark:prose-blockquote:text-orange-500 prose-blockquote:text-xl
  prose-headings:text-orange-500 prose-a:no-underline
  prose-a:text-orange-500 dark:prose-a:text-orange-500 justify-evenly prose-strong:text-orange-500;
}

</style>

