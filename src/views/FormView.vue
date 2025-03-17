<template>
  <div>
    <form @submit.prevent="submitForm">
      <InputField
        v-model="form.fullname"
        type="text"
        :error="errors.fullname"
        placeholder="Введите ФИО"
      />
      <InputField
        v-model="form.birthday"
        type="date"
        :error="errors.birthday"
        placeholder="Введите дату рождения"
      />
      <InputField
        v-model="form.phone"
        type="tel"
        :error="errors.phone"
        placeholder="Введите номер телефона"
      />
      <InputField
        v-model="form.email"
        type="email"
        :error="errors.email"
        placeholder="Введите электронную почту"
      />
      <CustomButton label="Отправить" :disabled="!isFormValid" :loading="isLoading" />
    </form>
    <div v-if="userStore.error" class="error-message">
      {{ userStore.error }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../store/userStore'
import CustomButton from '../components/CustomButton.vue'
import InputField from '../components/InputField.vue'

const userStore = useUserStore()

const form = ref({
  fullname: '',
  birthday: '',
  phone: '',
  email: '',
})

const errors = ref({
  fullname: '',
  birthday: '',
  phone: '',
  email: '',
})

const isLoading = computed(() => userStore.isLoading)

const isFormValid = computed(() => {
  return (
    form.value.fullname &&
    form.value.birthday &&
    form.value.phone &&
    form.value.email &&
    !Object.values(errors.value).some((error) => error)
  )
})

const submitForm = async () => {
  if (userStore.isAdding) return // Защита от повторной отправки
  await userStore.addUser(form.value)
  form.value = { fullname: '', birthday: '', phone: '', email: '' }
}
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
