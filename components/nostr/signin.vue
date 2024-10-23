<script lang="ts" setup>
import {useAuthStore} from "~/stores/useAuthStore";
const router = useRouter();
const authStore = useAuthStore();

async function signInWithAlby() {
  await authStore.signIn();
  await redirectToHomeIfAuthenticated();
}

async function redirectToHomeIfAuthenticated() {
  if (authStore.isAuthenticated) {
    await router.push("/");
  }
}
</script>

<template>


  <div class="items-center">
    <p class="txt-2xl mb-5 text-gray-800 dark:text-gray-200 ">Sign in with signer</p>

    <button class="bg-orange-500 text-white text-xl py-4 px-8 rounded-lg hover:bg-orange-700 focus:outline-none"
            @click="signInWithAlby">
      <Icon name="simple-icons:alby" class="w-6 h-6 mr-2"/>
      Sign in with Alby
    </button>

  </div>

</template>

<style scoped></style>
