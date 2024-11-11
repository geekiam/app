<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
import type {User} from "~/types";


const auth = useAuthStore();
const user: User = auth.user || {};


const USER_MENU_ITEMS = [
  {name: 'Your Profile', href: '/settings/profile'},
  {name: 'Sign out', href: ''},
]

</script>

<template>
  <div>
    <users-menu :user="user" :menuItems="USER_MENU_ITEMS"/>
  </div>
</template>

<style scoped>

</style>
