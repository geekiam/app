<script setup lang="ts">

const {listen} = useMitter()
import {Dialog, DialogPanel, TransitionChild, TransitionRoot,} from '@headlessui/vue'
listen('selectedArticle', e => select(e))

const sidebarOpen = ref(false)
const show = ref(false)

function select(id: string) : boolean {
  if (id) {
    show.value = true;
  }
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
      <div>
        <div class="lg:hidden">
          <div v-if="show" class="fixed inset-0 bg-black/50 z-40"/>
          <TransitionRoot appear :show="show" as="template" enter="transition-all duration-500 ease-in-out transform"
                          enter-from="translate-x-full" enter-to="translate-x-0"
                          leave="transition-all duration-500 ease-in-out transform"
                          leave-from="translate-x-0" leave-to="translate-x-full">
            <section v-show="show" id="content"
                     class="lg:block w-full lg:w-3/4 fixed lg:inset-y-0 inset-0 right-0 border border-solid border-gray-700 p-2 h-full min-w-0 flex-col overflow-y-auto dark:bg-gray-800 bg-gray-100 dark:text-gray-100 z-50">
                 <button class="absolute top-2 right-2" @click="show = false">
                <Icon name="material-symbols:cancel" class="text-white h-6 w-6"/>
              </button>
              <slot name="content" />
            </section>
          </TransitionRoot>
        </div>
        <main class="flex flex-col lg:flex-row min-w-0 flex-1">
          <aside id="feed" class="lg:w-1/4 w-full dark:bg-gray-800 border border-solid border-gray-700 p-2
          dark:text-gray-200 text-gray-900">
            <div class="relative flex flex-col overflow-y-auto">
              <slot name="list"/>
            </div>
          </aside>
          <section id="content"
                   class="hidden lg:block w-3/4 border border-solid  border-gray-700 p-2 h-full
                   min-w-0 flex-col overflow-y-auto dark:bg-gray-800 bg-gray-100 dark:text-gray-100">
            <slot name="content" />
          </section>
        </main>
      </div>
    </div>
  </div>
  <geekiam-footer/>
  </body>
  </html>
</template>
<style scoped>


</style>
