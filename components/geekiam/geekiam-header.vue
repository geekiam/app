<template>
  <header class="relative flex h-16 flex-shrink-0 items-center bg-gray-100 dark:bg-gray-800">
    <!-- Logo area -->
    <div class="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
      <nuxt-link to="/" class="flex h-16 w-16 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300 md:w-20">
        <nuxt-img class="h-16 w-auto" src="brand/icon" alt="geekiam" />
      </nuxt-link>
    </div>

    <!-- Menu button area -->
    <div class="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:hidden">
      <!-- Mobile menu button -->
      <button type="button" class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600" @click="mobileMenuOpen = true">
        <span class="sr-only">Open main menu</span>
        <Icon name="iconamoon:menu-burger-horizontal-bold" class="block h-6 w-6" aria-hidden="true" />
      </button>
    </div>

    <!-- Desktop nav area -->
    <div class="hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-between">
      <div class="min-w-0 flex-1">
        <div class="relative max-w-2xl dark:text-gray-100 text-gray-400 focus-within:text-gray-500">

        </div>
      </div>
      <div class="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4 dark:text-gray-100">
        <div class="flex items-center space-x-8">
            <span class="inline-flex">
              <a href="#" class="-mx-1 rounded-full bg-gray-100 dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-500">
                <span class="sr-only">View notifications</span>
                <icon name="material-symbols:notifications-outline" class="text-orange-400 text-3xl ml-5" />
              </a>
            </span>


        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide this `div` based on menu open/closed state -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="relative z-40 md:hidden" @close="mobileMenuOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40">
          <TransitionChild as="template" enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300" enter-from="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100" enter-to="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100" leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300" leave-from="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100" leave-to="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100">
            <DialogPanel class="fixed inset-0 z-40 h-full w-full bg-white dark:bg-gray-800 sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg" aria-label="Global">
              <div class="flex h-16 items-center justify-between px-4 sm:px-6">
                <a href="#">
                  <nuxt-img class="block h-12 w-auto" src="Brand/icon" alt="geekiam" />
                </a>
                <button type="button" class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600" @click="mobileMenuOpen = false">
                  <span class="sr-only">Close main menu</span>
                  <Icon name="material-symbols:close" class="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="max-w-8xl mx-auto mt-2 px-4 sm:px-6">
                <div class="relative text-gray-400 dark:text-gray-100 focus-within:text-gray-500">

                </div>
              </div>
<!--              <div class="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                <template v-for="item in navigation" :key="item.name">
                  <a :href="item.href" class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100">{{ item.name }}</a>
                  <a v-for="child in item.children" :key="child.name" :href="child.href" class="block rounded-md py-2 pl-5 pr-3
                  text-base font-medium text-gray-500 dark:text-gray-100 hover:bg-gray-100">{{ child.name }}</a>
                </template>
              </div>
              <div class="border-t border-gray-200 pt-4 pb-3">
                <div class="max-w-8xl mx-auto flex items-center px-4 sm:px-6">
                  <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                  </div>
                  <div class="ml-3 min-w-0 flex-1">
                    <div class="truncate text-base font-medium text-gray-800">{{ user.name }}</div>
                    <div class="truncate text-sm font-medium text-gray-500">{{ user.email }}</div>
                  </div>
                </div>
                <div class="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4">
                  <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md py-2 px-3 text-base font-medium text-gray-100 dark:text-gray-800 hover:bg-gray-50">{{ item.name }}</a>
                </div>
              </div>-->
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </header>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'




const mobileMenuOpen = ref(false)


</script>

<style scoped></style>
