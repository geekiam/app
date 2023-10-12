<script lang="ts" setup>
// Import the package
import NDK, { NDKEvent, NDKNip07Signer } from "@nostr-dev-kit/ndk";
// Create a new NDK instance with explicit relays
const ndk = new NDK({
  explicitRelayUrls: ["wss://relay.nostr.band/", "wss://eden.nostr.land/"],
});
// Now connect to specified relays
await ndk.connect();
function signin() {
  const nip07signer = new NDKNip07Signer();
  const ndk = new NDK({ signer: nip07signer });
  nip07signer.user().then(async (user) => {
    if (!!user.npub) {
      console.log("Permission granted to read their public key:", user.npub);
    }
  });
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
        <button class="bg-orange-500 text-white text-xl py-4 px-8 rounded-lg hover:bg-orange-700 focus:outline-none" @click="signin">
        nostr extension
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
