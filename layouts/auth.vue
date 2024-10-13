<script lang="ts" setup>

</script>

<template>

    <div class="flex h-screen flex-col justify-center bg-gray-200 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-2">
          <!-- Column 1 -->
          <div class="w-full sm:w-1/2 px-2">
            <div class="p-4 mb-4  justify-center h-full">
              <slot name="left" />
            </div>
          </div>
          <!-- Column 2 -->
          <div class="w-full sm:w-1/2 px-2">
            <div class="p-4 mb-4 justify-center h-full">
              <slot name="right" />
            </div>
          </div>
        </div>
      </div>
    </div>



    <geekiam-footer/>

</template>

<style scoped>
html, body, #app {
  height: 100%;
}
</style>
