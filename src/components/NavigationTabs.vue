<template>
  <div class="tabs">
    <router-link to="/" class="tab" :class="{ active: $route.path === '/' }">Форма</router-link>
    <router-link to="/data" class="tab" :class="{ active: $route.path === '/data' }"
      >Данные</router-link
    >
  </div>
</template>

<script setup></script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tab {
  margin: 0;
  padding: 10px 60px;
  text-decoration: none;
  color: #7f7f7f;
  border-bottom: 3px solid #f2f2f2;
}

.tab.active {
  color: #000;
  border-bottom: 5px solid #61b557;
}
</style>
