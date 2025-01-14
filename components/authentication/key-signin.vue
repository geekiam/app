<script setup lang="ts">

</script>

<template>
  <div class="sign-up-container">
    <div class="relative mb-6">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
       <Icon name="material-symbols-light:key-outline" class="w-6 h-6 text-gray-400 mr-3" />
      </div>
      <input type="text" id="input-group-1" class="input-style" placeholder="npub / nsec / hex">
    </div>
    <div class="relative mb-6">
    <button type="button" class="button-style">
     <Icon name="game-icons:ostrich" class="w-6 h-6 mr-2" />
     Sign in
    </button>
    </div>


  </div>
</template>

<style scoped>
.input-style {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500;
}

.button-style {
  @apply w-full text-center inline-flex items-center justify-center text-white bg-orange-500 hover:bg-orange-500/80 focus:ring-4 focus:outline-none focus:ring-orange-500/50 font-medium rounded-3xl text-sm px-5 py-2.5  dark:hover:ring-orange-500/80 dark:focus:ring-orange-500/40 me-2 mb-2;
}
</style>
