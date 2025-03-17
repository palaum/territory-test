<template>
  <button :class="{ 'btn-loading': loading }" :disabled="disabled || loading">
    <span v-if="loading" class="spinner"></span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script setup>
defineProps({
  label: String,
  disabled: Boolean,
  loading: Boolean,
})
</script>

<style scoped>
button {
  padding: 10px 40px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition:
    background-color 0.1s ease,
    color 0.1s ease;
  background: linear-gradient(to right, #f2fbf3, #cee7ce);
  color: #25272c;
}

button:not(:disabled):hover {
  background: linear-gradient(to right, #cbe6ca, #95d393);
  color: #fff;
}

button:not(:disabled):active {
  background: #95d393;
  color: #fff;
}

button:disabled {
  background: #ededed;
  color: #767676;
  cursor: not-allowed;
}

button.btn-loading {
  background: #ededed;
  color: #767676;
  cursor: wait;
}

.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: black;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
