<script setup lang="ts">

import {useProfileStore} from "~/stores/profile";



const props = defineProps({
  pubkey: {
    type: String,
    required : true
  },
})
const store = useProfileStore()

const profile = await store.getAuthor(props.pubkey)
console.log("profile: ",profile)


</script>

<template>
  <div>
    <UAvatar :src="profile?.user.avatar" :alt="profile?.user.name" class="profile-image" /><span class="text-gray-100">{{ profile?.user.name }}</span>
  </div>
</template>

<style scoped></style>
