<template>
  <div>
    <Icon
        v-show="colorMode.preference === 'light'"
        name="uil:sun"
        class="theme-icon text-typography_primary_light dark:text-typography_primary_dark text-3xl"
        @click="toggleTheme"
    />
    <Icon
        v-show="colorMode.preference === 'dark'"
        name="uil:moon"
        class="theme-icon text-typography_primary_light dark:text-typography_primary_dark text-3xl"
        @click="toggleTheme"
    />
  </div>
</template>
<script setup>
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
