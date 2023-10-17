<script lang="ts" setup>
import login from "~/components/auth/login.vue"
import Auth from "~/layouts/auth.vue";
</script>

<template>
  <nuxt-layout name="auth">
    <template #main >
     <login />
    </template>
  </nuxt-layout>
</template>

<style scoped></style>
