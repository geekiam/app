<script setup lang="ts"></script>

<template>
  <div class="min-h-screen">
    <geekiam-header />
      <div class="flex flex-grow">
        <div class="w-full md:w-1/4">
          <slot name="menu" />
        </div>
        <div class="w-full md:w-3/4">
          <slot name="content" />
        </div>
      </div>
    <geekiam-footer />
  </div>
</template>

<style scoped></style>
