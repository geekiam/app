<script lang="ts" setup>
import {useAuthStore} from "~/stores/AuthStore";
import {Profile} from '~/types/Profile'

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

      <div class="container mx-auto px-4 sm:px-8 lg:px-16">

        <div class="group-container">
          <label class="label-style"
                 for="username">Username</label>
          <div class="relative">
            <div class="icon-inset">
              <Icon aria-hidden="true" class="icon-style" name="material-symbols:alternate-email-rounded"/>
            </div>
            <input v-model="user.name" class="text-input" name="username" placeholder="name" type="text">
          </div>
        </div>
        <div class="group-container">
          <label class="label-style" for="displayName">Display
            Name</label>
          <div class="relative">
            <div class="icon-inset">
              <Icon aria-hidden="true" class="icon-style" name="material-symbols:person-3-outline"/>
            </div>
            <input v-model="user.displayName" name="displayName" class="text-input" placeholder="name" type="text">
          </div>
        </div>
        <div class="group-container">
          <label class="label-style"
                 for="website">Website</label>
          <div class="relative">
            <div class="icon-inset">
              <Icon aria-hidden="true" class="icon-style" name="gg:website"/>
            </div>
            <input v-model="user.website" name="website" class="text-input" placeholder="name" type="text">
          </div>
        </div>
        <div class="group-container">
          <label class="label-style" for="about">About
            me</label>

          <textarea id="message" v-model="user.about" name="about" class="text-area" rows="4"></textarea>

        </div>
        <div class="group-container">
          <label class="label-style" for="email-address-icon">Verified
            Nost Address (NIP05)</label>
          <div class="relative">
            <div class="icon-inset">
              <Icon aria-hidden="true" class="icon-style" name="material-symbols:person-3-outline"/>
            </div>
            <input v-model="user.nip05" class="text-input" placeholder="name" type="text">
          </div>
        </div>
      </div>
    </template>
  </nuxt-layout>

</template>

<style scoped>
.group-container {
  @apply flex flex-col space-y-4 max-w-lg mx-auto p-4;
}

.icon-inset {
  @apply absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none
}

.icon-style {
  @apply w-7 h-7 text-orange-400
}

.label-style {
  @apply block mb-2 text-lg font-medium text-gray-900 dark:text-white
}

.text-input {
  @apply ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}

.text-area {
  @apply block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
</style>
