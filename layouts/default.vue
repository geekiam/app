<template>
  <div class="flex h-full flex-col">
    <app-header />
    <div class="flex min-h-0 flex-1 overflow-hidden">
      <side-bar />
      <main class="min-w-0 flex-1 lg:flex ">
        <aside class="lg:order-first ">
          <div class="relative flex w-96 flex-col overflow-y-auto dark:bg-gray-800 border border-solid border-gray-700 p-2
          dark:text-gray-200 text-gray-900">
            <slot name="list"/>
          </div>
        </aside>
        <section aria-labelledby="primary-heading" class="hidden lg:flex-shrink-0 lg:block h-full min-w-0 flex-1 flex-col overflow-y-auto
        lg:order-last dark:bg-gray-800 bg-gray-100 dark:text-gray-100">
             <slot name="content" />
        </section>
      </main>
    </div>
    <app-footer/>
  </div>
</template>
#'

<script setup>


import AppHeader from "~/components/layout/app-header.vue";
import AppFooter from "~/components/layout/app-footer.vue";




</script>
