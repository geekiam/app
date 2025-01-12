<template>
  <footer class="bg-gray-100 dark:bg-gray-800">
    <div class="mx-auto max-w-7xl mt-10 px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-orange-500 hover:text-orange-400">
          <span class="sr-only">{{ item.name }}</span>
          <Icon :name="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <a
            href="https://threenine.co.uk"
            class="mt-8 text-base text-gray-900 dark:text-gray-200 md:order-1 md:mt-0 hover:text-underline"
        >&copy {{ new Date().getFullYear() }}
          threenine.co.uk registered in England & Wales 05608093 VAT no. GB
          900383850
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>

const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/geekiam',
    icon: 'ion:logo-github'
  }
]
</script>
