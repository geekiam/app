<script lang="ts" setup>
import {userAuthStore} from '~/stores/userAuthStore'

function logIn() {

  const store = userAuthStore();
  store.signIn();


}
</script>

<template>

  <p class="txt-2xl mb-5">Sign in with an existing nostr account </p>
  <p>
    <button class="bg-orange-500 text-white text-xl py-4 px-8 rounded-lg hover:bg-orange-700 focus:outline-none"
            @click="logIn">
      nostr extension
    </button>
  </p>


</template>

<style scoped></style>
