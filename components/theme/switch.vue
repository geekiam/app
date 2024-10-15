<script setup>
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div>
    <Icon
        v-show="colorMode.preference === 'light'"
        name="uil:sun"
        class="text-orange-400 text-3xl"
        @click="toggleTheme"
    />
    <Icon
        v-show="colorMode.preference === 'dark'"
        name="uil:moon"
        class="text-orange-400 text-3xl"
        @click="toggleTheme"
    />
  </div>
</template>

