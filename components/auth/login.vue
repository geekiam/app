<script lang="ts" setup>
import{userAuthStore} from '~/stores/userAuthStore'
function logIn() {

  const store = userAuthStore();
   store.signIn();


}
</script>

<template>
  <div class="container mx-auto p-4 min-h-screen">
    <div class="grid grid-cols-2 gap-4">
      <!-- First Column -->
      <div class=" p-4 rounded-lg text-center">
        <!-- Content for the first column -->
        <p>This is the left column content.</p>
      </div>

      <!-- Second Column -->
      <div class="p-4 rounded-lg text-center">
        <p class="text-5xl mb-5">Whats happening today?</p>
        <p class="text-4xl mb-5">Join today.</p>
        <!-- Content for the second column -->
        <p class="txt-2xl mb-5">Sign in with an existing nostr account </p>
        <button class="bg-orange-500 text-white text-xl py-4 px-8 rounded-lg hover:bg-orange-700 focus:outline-none" @click="logIn">
        nostr extension
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
