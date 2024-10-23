<template>
  <div class="flex h-full flex-col">
    <geekiam-header />
    <div class="flex  min-h-screen flex-1 overflow-hidden">
      <side-bar />
      <main class="flex flex-col lg:flex-row min-w-0 flex-1">
        <aside class="flex-1 dark:bg-gray-800 border border-solid border-gray-700 p-2 dark:text-gray-200 text-gray-900">
          <div class="relative flex flex-col overflow-y-auto">
            <slot name="list"/>
          </div>
        </aside>
        <section aria-labelledby="primary-heading" class="flex-1 h-full min-w-0 flex-col overflow-y-auto dark:bg-gray-800 bg-gray-100 dark:text-gray-100">
          <slot name="content" />
        </section>
      </main>
    </div>
    <geekiam-footer/>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script setup>






</script>
