<script lang="ts" setup>


import List from "~/components/app/list.vue";
</script>

<template>
  <nuxt-layout name="default">
    <template #list >
     <list indexName="Sample_Phone_Store_Index" query="Samsung" />
    </template>

  <template #content> <p class="text-white">The Page Content will go here</p></template>

  </nuxt-layout>

</template>

