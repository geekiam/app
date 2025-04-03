<script setup lang="ts">
const links = [[{
  label: 'Global',
  icon: 'i-lucide-house',
  active: true
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: '4'
}, {
  label: 'Contacts',
  icon: 'i-lucide-users'
}, {
  label: 'Settings',
  icon: 'i-lucide-settings',
  defaultOpen: true,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}], [{
  label: 'Feedback',
  icon: 'i-lucide-message-circle',
  to: 'https://github.com/nuxt-ui-pro/dashboard',
  target: '_blank'
}, {
  label: 'Help & Support',
  icon: 'i-lucide-info',
  to: 'https://github.com/nuxt/ui-pro',
  target: '_blank'
}]]
</script>

<template>
  <UDashboardSidebar collapsible resizable :ui="{ footer: 'border-t border-(--ui-border)' }">
    <template #header="{ collapsed }">
      <NuxtImg   :collapsed="collapsed" class="h-5 w-auto shrink-0" />
    </template>

    <template #default="{ collapsed }">

      <UNavigationMenu
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
      />

      <UNavigationMenu
          :collapsed="collapsed"
          :items="links[1]"
          orientation="vertical"
          class="mt-auto"
      />
    </template>

    <template #footer="{ collapsed }">
      <UButton
          :avatar="{
          src: 'https://github.com/benjamincanac.png'
        }"
          :label="collapsed ? undefined : 'Benjamin'"
          color="neutral"
          variant="ghost"
          class="w-full"
          :block="collapsed"
      />
    </template>
  </UDashboardSidebar>
</template>


