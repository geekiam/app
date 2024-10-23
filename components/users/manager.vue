<script setup lang="ts">
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
import {useAuthStore} from "~/stores/useAuthStore";
import { useProfileStore } from "~/stores/useProfileStore";

const authStore = useAuthStore();
const profileStore = useProfileStore();
await profileStore.getProfile(authStore.user)
const user  = profileStore.profile


const userNavigation = [
  { name: 'Your Profile', href: '/settings/profile' },
  { name: 'Sign out', href: '' },
]
</script>

<template>
  <div>
    <Menu as="div" class="menu">
      <MenuButton class="menu-button">
        <span class="sr-only">Open user menu</span>
        <UAvatar :src="user.image" :alt="user.name" class="profile-image" />
      </MenuButton>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="menu-items">
          <div class="py-1">
            <MenuItem v-slot="{ active }" v-for="link in userNavigation" key="name">
              <nuxt-link :to="link.href" :class="[active ? 'menu-item-active' : '', 'menu-item']">{{link.name}}</nuxt-link>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<style scoped>

.profile-image{
  @apply h-8 w-8 rounded-full
}
.menu {
  @apply relative inline-block text-left
}

.menu-button{
  @apply flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2
}
.menu-items {
  @apply absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
}

.menu-item-active{
  @apply  bg-orange-100
}

.menu-item {
  @apply block px-4 py-2 text-sm text-orange-700
}
</style>
