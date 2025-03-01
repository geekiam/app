<script setup lang="ts">
import {useProfileStore} from "~/stores/profile";
import {useAuthStore} from "~/stores/auth";
import {sidebarNavigation} from "~/components/sidebars/menu";
import type {Profile} from "~/types";

const authStore = useAuthStore();
const profileStore = useProfileStore();
const profile =  await profileStore.getProfile(<string>authStore.pubkey) as Profile;

</script>

<template>
  <nav aria-label="Sidebar" class="flex grow flex-col gap-y-5 relative">
    <div class="relative flex-1 w-16 flex-col space-y-3 p-3">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="item in sidebarNavigation" :key="item.name">
              <a :href="item.href" :class="[item.current ? 'bg-gray-800 text-gray-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                <Icon :name="item.icon" class="size-6 shrink-0 text-orange-500" aria-hidden="true" :title="item.title" />
              </a>
            </li>
          </ul>
        </li>
        <li class="hidden md:block -mx-6 absolute bottom-0 w-full">
          <nuxt-link to="/settings/profile" class="flex items-center gap-x-4 px-6 py-3 hover:bg-gray-700 rounded-md w-full group">
            <LazyUAvatar class=" rounded-full bg-gray-700 group-hover:bg-gray-700" :src="profile.user.avatar" :alt="profile.user.name" :title="profile.user.name" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>
