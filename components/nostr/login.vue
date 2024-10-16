<script lang="ts" setup>
import {useAuthStore} from "~/stores/AuthStore";
import {useNdkStore} from "~/stores/NdkStore";
import {NDKNip07Signer} from "@nostr-dev-kit/ndk";
const router = useRouter();
const ndkStore = useNdkStore();
const nip07Signer = new NDKNip07Signer()
const userStore = useAuthStore();

async function logIn() {

      await ndkStore.initialize()
  ndkStore.ndk.signer = nip07Signer
  await ndkStore.ndk.connect()

  const user = await nip07Signer.user()
  await userStore.signIn(user, ndkStore.ndk)

  if(userStore.signedIn) {
    await router.push("/")
  }


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
