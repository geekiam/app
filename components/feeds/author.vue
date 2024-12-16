<script setup lang="ts">

import {useProfileStore} from "~/stores/profile";
import { onMounted } from "vue";


const props = defineProps({
  pubkey: {
    type: String,
    required : true
  },
})
const store = useProfileStore()

const profile = ref()

onMounted(async () => {

  let use = await store.getAuthor(props.pubkey)
  console.log(use)
  profile.value = await store.getAuthor(props.pubkey)
})
</script>

<template>
  <div>
    <UAvatar :src="profile.user.avatar" :alt="profile.user.name" class="profile-image"></UAvatar>
  </div>
</template>

<style scoped></style>
