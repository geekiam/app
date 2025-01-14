<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
const router = useRouter();
const authStore = useAuthStore();

async function signInWithExtension(): Promise<void> {
  const inputField = document.getElementById('nostrkey') as HTMLInputElement;
  let authenticated = await authStore.signInWithKey(inputField.value);
  if(authenticated){
    await router.push('/');
  }
}
</script>

<template>
  <div class="sign-up-container">
    <div class="relative mb-6">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
       <Icon name="material-symbols-light:key-outline" class="w-8 h-8 mr-3 text-orange-500" />
      </div>
      <input type="text" id="nostrkey" class="input-style" placeholder="npub / nsec / hex">
    </div>
    <div class="relative mb-6">
    <button type="button" class="button-style" @click="signInWithExtension">
     <Icon name="game-icons:ostrich" class="w-6 h-6 mr-2" />
     Sign in
    </button>
    </div>


  </div>
</template>

<style scoped>
.input-style {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-full ps-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500;
}

.button-style {
  @apply w-full text-center inline-flex items-center justify-center text-white bg-orange-500 hover:bg-orange-500/80 focus:ring-4 focus:outline-none focus:ring-orange-500/50 font-medium rounded-3xl text-sm px-5 py-2.5  dark:hover:ring-orange-500/80 dark:focus:ring-orange-500/40 me-2 mb-2;
}
</style>
