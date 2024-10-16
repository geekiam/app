<script setup lang="ts">
import { useNdkStore} from "~/stores/NdkStore";
import { useAuthStore } from "~/stores/AuthStore";
import { Profile } from '~/types/Profile'

const ndkStore = useNdkStore();
const authStore = useAuthStore();

const user: Profile = {
  ...authStore.profile
}
</script>

<template>
  <nuxt-layout name="settings">
    <template #menu>
      <div class="min-h-full max-w-xs shadow-lg">
        <p class="text-2xl">Menu will go here</p>
      </div>
    </template>
    <template #content>


      <label for="email-address-icon" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Username</label>
      <div class="relative">
        <div class="icon-inset">
          <Icon name="material-symbols:alternate-email-rounded" class="icon-style" aria-hidden="true" />
        </div>
        <input type="text" v-model="user.name"  class="text-input" placeholder="name">
      </div>

      <label for="email-address-icon" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Display Name</label>
      <div class="relative">
        <div class="icon-inset">
          <Icon name="material-symbols:person-3-outline" class="icon-style" aria-hidden="true" />
        </div>
        <input type="text" v-model="user.displayName"  class="text-input" placeholder="name">
      </div>

      <label for="email-address-icon" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Website</label>
      <div class="relative">
        <div class="icon-inset">
          <Icon name="gg:website" class="icon-style" aria-hidden="true" />
        </div>
        <input type="text" v-model="user.website"  class="text-input" placeholder="name">
      </div>

      <label for="email-address-icon" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">About me</label>

      <textarea id="message" rows="4" class="text-area" v-model="user.about"></textarea>


      <label for="email-address-icon" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Verified Nost Address (NIP05)</label>
      <div class="relative">
        <div class="icon-inset">
          <Icon name="material-symbols:person-3-outline" class="icon-style" aria-hidden="true" />
        </div>
        <input type="text" v-model="user.nip05"  class="text-input" placeholder="name">
      </div>





    </template>

  </nuxt-layout>

</template>

<style scoped>

.icon-inset {
  @apply absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none
}
.icon-style {
  @apply w-6 h-6 text-orange-400
}
.label-style {
  @apply ml-px block pl-4 text-sm font-medium leading-6 text-gray-900
}
.text-input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}

.text-area {
  @apply block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
</style>
