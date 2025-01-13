<script setup lang="ts">

const {listen} = useMitter()
import {Dialog, DialogPanel, TransitionChild, TransitionRoot,} from '@headlessui/vue'
listen('selectedArticle', e => select(e))

const sidebarOpen = ref(false)
const show = ref(false)

function select(id: string) : boolean {
  if (id) {
    show.value = true;
    return true;
  }
  return false;
}
</script>
<template>
  <html class="h-full bg-gray-800">
  <body class="h-full">
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 xl:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                         enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                         leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-800/80"/>
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                           enter-from="-translate-x-full"
                           enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
                           leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                               enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                               leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <Icon name="material-symbols:cancel" class="size-6 text-white" aria-hidden="true"/>
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800 px-6 ring-1 ring-white/10">
                <div class="flex h-16 shrink-0 items-center">
                  <nuxt-link to="/">
                    <nuxt-img class="h-16 w-auto mt-6" src="brand/icon" alt="Geekiam"/>
                  </nuxt-link>
                </div>
                <sidebars-wide/>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-q6 xl:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800/10 px-6 ring-1 ring-white/5">
        <div class="flex h-16 shrink-0 items-center">
          <nuxt-link to="/">
            <nuxt-img class="h-16 w-auto mt-6" src="brand/icon" alt="geekiam"/>
          </nuxt-link>
        </div>
        <sidebars-narrow/>
      </div>
    </div>

    <div class="xl:pl-28">
      <!-- Sticky search header -->
      <div
          class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-800 px-4 shadow-sm sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-white xl:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Icon
              name="streamline:interface-setting-menu-parallel-hamburger-circle-navigation-parallel-hamburger-buttonmenu-circle"
              class="size-5" aria-hidden="true"/>
        </button>
      </div>
      <main>
        <h1 class="sr-only">Account Settings</h1>
        <slot name="menu"/>
        <slot name="content"/>

      </main>
    </div>
  </div>
  <geekiam-footer/>
  </body>
  </html>
</template>
<style scoped>


</style>
