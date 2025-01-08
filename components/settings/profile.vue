<script setup lang="ts">
import {useProfileStore} from "~/stores/profile";
import {useAuthStore} from "~/stores/auth";
import type {Profile} from "~/types";

const PROFILE_UPDATED_SUCCESS_MESSAGE = 'Profile updated successfully';

const profileStore = useProfileStore();
const authStore = useAuthStore();
const toastService = useToast();
let key: string| undefined = authStore.npub

const state = reactive({
  profile: <Profile>{}
})



const profile = await loadUserProfile(<string>key);

async function loadUserProfile(npub: string): Promise<Profile | null> {
  return await profileStore.getProfile(npub);

}


function notifyProfileUpdated()  {
  toastService.add({ title: PROFILE_UPDATED_SUCCESS_MESSAGE });
}

async function saveProfile() : Promise<void> {
  await profileStore.updateProfile(profile);
  notifyProfileUpdated();

}
</script>

<template>
  <UForm :state="state"  @submit.prevent="saveProfile" >
    <div class="group-container">
      <label class="label-style" for="username">npub</label>
      <div class="relative">
        <div class="icon-inset">
          <Icon aria-hidden="true" class="icon-style" name="material-symbols:key-vertical-outline-rounded"/>
        </div>
        <input v-model="profile.user.npub" class="key-input" name="npub" type="text" readonly>
      </div>
    </div>
    <div class="group-container">
      <label class="label-style" for="username">Username</label>
      <div class="relative">
        <div class="icon-inset">
          <Icon aria-hidden="true" class="icon-style" name="material-symbols:alternate-email-rounded"/>
        </div>
        <input v-model="profile.user.name" class="text-input" name="username" placeholder="name" type="text">
      </div>

      <label class="label-style" for="displayName">Display Name</label>
      <div class="relative">
        <div class="icon-inset">
          <Icon aria-hidden="true" class="icon-style" name="material-symbols:person-3-outline"/>
        </div>
        <input v-model="profile.displayName" name="displayName" class="text-input" placeholder="name" type="text">
      </div>
    </div>
    <div class="group-container">
      <label class="label-style" for="website">Website</label>
      <div class="relative">
        <div class="icon-inset">
          <Icon aria-hidden="true" class="icon-style" name="gg:website"/>
        </div>
        <input v-model="profile.website" name="website" class="text-input" placeholder="name" type="text">
      </div>
    </div>
    <div class="group-container">
      <label class="label-style" for="about">About me</label>
      <textarea id="message" v-model="profile.about" name="about" class="text-area" rows="4"></textarea>
    </div>
    <div class="group-container">
      <label class="label-style" for="email-address-icon">Verified Nost Address (NIP05)</label>
      <div class="relative">
        <div class="icon-inset">
          <Icon aria-hidden="true" class="icon-style" name="material-symbols:person-3-outline"/>
        </div>
        <input v-model="profile.nip05" class="text-input" placeholder="name" type="text">
      </div>
    </div>
    <div class="group-container">
      <button type="submit" class="btn">Save</button>
    </div>
  </UForm>
</template>

<style scoped>
.btn {
  @apply rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600;
}
.group-container {
  @apply flex flex-col space-y-4 max-w-lg mx-auto p-4;
}
.icon-inset {
  @apply absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none;
}
.icon-style {
  @apply w-7 h-7 text-orange-400;
}
.label-style {
  @apply block mb-2 text-lg font-medium text-gray-900 dark:text-white;
}
.key-input {
  @apply ml-1.5 bg-gray-50 border border-orange-500 text-gray-900 text-xs rounded-full focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-orange-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-orange-500 dark:focus:border-orange-500;
}
.text-input {
  @apply ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-full focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-orange-500 dark:focus:border-orange-500;
}
.text-area {
  @apply block p-2.5 w-full text-xl text-gray-800 bg-gray-50 rounded-xl border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500;
}
</style>
