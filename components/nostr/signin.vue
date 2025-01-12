<script setup lang="ts" >
import {useAuthStore} from "~/stores/auth";
const router = useRouter();
const authStore = useAuthStore();

async function signInWithAlby(): Promise<void> {
  let authenticated = await authStore.signInWithSigner();
   if(authenticated){
       await router.push('/');
  }
}

</script>

<template>
  <div class="sign-up-container">
    <p class="sign-up-container-intro-text">Sign in with signer</p>
    <button class="sign-up-container-button"
            @click="signInWithAlby">
      <Icon name="simple-icons:alby" class="w-8 h-8 mr-2"/>
      Sign in with Alby
    </button>

  </div>

</template>

<style scoped>
.sign-up-container {
  @apply items-center
}

.sign-up-container-intro-text {
  @apply text-2xl mb-5 text-gray-800 dark:text-gray-200
}
.sign-up-container-button {
  @apply bg-orange-500 text-white text-xl py-4 px-8 rounded-lg hover:bg-orange-700 focus:outline-none
}

</style>
