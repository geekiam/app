<script setup lang="ts">
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
import {useAuthStore} from "~/stores/useAuthStore";
const router = useRouter();
const auth = useAuthStore();

if(!auth.isAuthenticated) {
  await router.push("/")
}



const user = {
  name: auth.name,
  imageUrl: auth.image,
  npub: auth.npub,

}

const userNavigation = [
  { name: 'Your Profile', href: 'user/profile' },
  { name: 'Sign out', href: '' },
]
</script>

<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <MenuButton class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
        <span class="sr-only">Open user menu</span>
        <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
      </MenuButton>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <MenuItem v-slot="{ active }" v-for="link in userNavigation" key="name">
              <a :href="link.href" :class="[active ? 'bg-orange-100' : '', 'block px-4 py-2 text-sm text-orange-700']">{{link.name}}</a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<style scoped></style>
