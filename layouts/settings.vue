<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800">
    <geekiam-header />
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 end-0">
          <slot name="menu" />
        </div>
        <div class="w-full md:w-2/2">
          <slot name="content" />
        </div>
      </div>
    <geekiam-footer />
  </div>
</template>

<style scoped></style>
