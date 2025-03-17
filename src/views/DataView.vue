<template>
  <div>
    <DataTable :users="users" />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useUserStore } from '../store/userStore'
import DataTable from '../components/DataTable.vue'

const userStore = useUserStore()
const users = computed(() => userStore.users)

onMounted(async () => {
  await userStore.fetchUsers()
})
</script>
