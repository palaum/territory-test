<template>
  <table>
    <thead>
      <tr>
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Номер телефона</th>
        <th>Электронная почта</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.fullname }}</td>
        <td>{{ user.birthday }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  users: Array,
})
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f9f9f9;
  border: 2px solid #ececec;
}

td {
  padding: 10px;
  border: 2px solid #ececec;
}
</style>
