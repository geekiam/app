<script lang="ts" setup>
import AppFooter from "~/components/layout/app-footer.vue";
import AppHeader from "~/components/layout/app-header.vue";
</script>

<template>
  <div class="flex h-full flex-col">
    <app-header />
    <div class="max-w-full max-h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100  text-center">
             <slot name="main" />
    </div>
    <app-footer/>
  </div>
</template>

<style scoped></style>
