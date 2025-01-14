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
      <Icon name="material-symbols-light:extension-outline-sharp" class="w-8 h-8 mr-2" />
      <span>Sign in with extension</span>
    </button>
  </div>
</template>

<style scoped>
.sign-up-container {
  @apply items-center;
}

.sign-up-container-button {
  @apply bg-orange-500 text-white text-lg py-1 px-6 rounded-3xl hover:bg-orange-700 focus:outline-none flex items-center;
}
</style>
