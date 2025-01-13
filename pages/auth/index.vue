<script lang="ts" setup>

</script>

<template>
  <nuxt-layout name="auth">

    <template #left>
      <nuxt-img src="brand/icon" class="h-72 w-72" />
    </template>
    <template #right >
      <div>
        <p class="text-4xl font-bold text-white mb-10">What are you going to learn today? </p>
        <authentication-alby-signer />
      </div>

    </template>
  </nuxt-layout>
</template>

<style scoped></style>
