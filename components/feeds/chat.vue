<script lang="ts" setup>
import {useHomeStore} from "~/stores/home";

const homeContext = useHomeStore();
await homeContext.getEvents();

</script>

<template>
  <div class="border border-1 p-2 min-h-screen ml-1 mr-1 rounded mb-2 border-gray-700">
    <h1 class="text-2xl font-semibold text-orange-900">Chat</h1>
    <div class="column-style">
      <div v-for="event in homeContext.notes" :key="event.id" class="box-style">
        <kinds-kind1 :id="event.id" :event="event.rawEvent()" />

      </div>
    </div>
  </div>
</template>

<style scoped></style>
