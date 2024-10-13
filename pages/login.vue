<script lang="ts" setup>

</script>

<template>
  <nuxt-layout name="auth">

    <template #left>
      <nuxt-img src="brand/icon" class="h-64 w-64" />
    </template>
    <template #right >
     <nostr-login />
    </template>
  </nuxt-layout>
</template>

<style scoped></style>
