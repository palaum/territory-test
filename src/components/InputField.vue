<template>
  <div>
    <input
      :value="modelValue"
      @input="updateValue"
      :type="inputType"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      :class="{ error: error }"
    />
    <div v-if="error" class="error-msg">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: String,
  type: String, // text, date, tel, email...
  error: String, // Сообщение об ошибке
  placeholder: String,
})

const emit = defineEmits(['update:modelValue'])

// Локальное состояние для типа поля
const inputType = ref(props.type === 'date' ? 'text' : props.type)

// Обработчик фокуса
const handleFocus = () => {
  if (props.type === 'date') {
    inputType.value = 'date' // Меняем тип на date при фокусе
  }
}

// Обработчик потери фокуса
const handleBlur = () => {
  if (props.type === 'date' && !props.modelValue) {
    inputType.value = 'text' // Возвращаем тип text, если поле пустое
  }
}

// Обновление значения
const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 7px;
  outline: none;
  margin-bottom: 17px;
}

input::placeholder {
  color: #999;
}

input:not(:placeholder-shown) {
  color: #000;
}

input.error {
  border-color: red;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.error-msg {
  color: red;
  font-size: 0.75em;
  line-height: 12px;
  margin-top: -17px;
  margin-bottom: 5px;
}
</style>
