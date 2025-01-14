<script setup lang="ts" >
import {useAuthStore} from "~/stores/auth";
const router = useRouter();
const authStore = useAuthStore();

async function signInWithExtension(): Promise<void> {
  let authenticated = await authStore.signInWithSigner();
   if(authenticated){
       await router.push('/');
  }
}

</script>

<template>
  <div class="sign-up-container">
    <button class="sign-up-container-button" @click="signInWithExtension">
      <Icon name="material-symbols-light:extension-outline-sharp" class="w-6 h-6 mr-2" />
      <span>Sign in with extension</span>
    </button>
  </div>
</template>

<style scoped>
.sign-up-container {
  @apply items-center;
}

.sign-up-container-button {
  @apply w-full text-center inline-flex items-center justify-center border border-orange-500 text-orange-500 hover:text-gray-100 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500/50 font-medium rounded-3xl text-sm px-5 py-2.5  dark:hover:ring-orange-500/80 dark:focus:ring-orange-500/40 me-2 mb-2;
}
</style>
