<script lang="ts" setup>

</script>

<template>
  <nuxt-layout name="auth">
    <template #left>
      <nuxt-img src="brand/icon" class="h-72 w-72" />
    </template>
    <template #right >
      <div>
        <p class="text-4xl font-bold text-style">What are you going to learn today? </p>
        <p class="text-style mb-10">Geekiam is built using the <a href="https://nostr.com/" class="underline" target="_blank">nostr protocol</a> which enables you to own
        and manage your social identity</p>
        <authentication-extension-signer />
      </div>
    </template>
  </nuxt-layout>
</template>

<style scoped>
.text-style{
  @apply dark:text-gray-100 text-gray-900 mb-10;
}
</style>
