<script setup lang="ts">

import {useProfileStore} from "~/stores/profile";



const props = defineProps({
  pubkey: {
    type: String,
    required : true
  },
    published: {
      type: String,
      required : true
    },
})
const store = useProfileStore()

const profile = await store.getAuthor(props.pubkey)



</script>

<template>
  <div class="flex items-center md:space-x-2">
    <UAvatar v-if="profile?.user.avatar" :src="profile?.user.avatar" :alt="profile?.user.name" class=" h-4 border rounded-full" />
    <nuxt-img v-else src="brand/incognito" :alt="profile?.user.name" class=" h-8 w-8 rounded-full" />
    <p class="text-sm">{{profile?.user.name}} • {{props.published}}</p>
  </div>

</template>

<style scoped></style>
