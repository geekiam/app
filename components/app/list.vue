<script lang="ts" setup>
const props = defineProps( {
  indexName: {
    type: String,
    required: true
  },
  query: {
    type: String,
    required: true
  }
})

const { result, search } = useAlgoliaSearch(props.indexName)
onMounted(async () => {
  await search({ query: props.query })
})


</script>

<template>
  <div>
    <div v-for="item in result?.hits" class="border border-1 p-2 rounded mb-2 border-gray-700">
      <p class="text-green-500 text-xl">{{ item.name }}</p>
      <p class="dark:text-gray-100 text-gray-900 pt-5 text-sm">{{ item.description }}</p>
    </div>
  </div>
</template>


