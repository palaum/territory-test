import { defineStore } from 'pinia'
import { fetchUsers, addUser } from '../api'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users')) || [], // Загружаем данные из localStorage
    isLoading: false,
    isAdding: false, // Флаг для защиты от повторного вызова
  }),
  actions: {
    // Загрузка пользователей
    async fetchUsers() {
      this.isLoading = true
      try {
        const data = await fetchUsers()
        this.users = data
        localStorage.setItem('users', JSON.stringify(data)) // Сохраняем данные в localStorage
      } catch (error) {
        console.error('Ошибка при получении пользователей:', error)
      } finally {
        this.isLoading = false
      }
    },

    // Добавление пользователя
    async addUser(user) {
      if (this.isAdding) return // Защита от повторного вызова
      this.isAdding = true // Блокируем повторный вызов

      try {
        const newUser = await addUser(user)

        // Проверяем, нет ли уже такого пользователя в списке
        const isDuplicate = this.users.some((u) => u.email === newUser.email)
        if (!isDuplicate) {
          this.users.push(newUser)
          localStorage.setItem('users', JSON.stringify(this.users)) // Сохраняем обновленные данные в localStorage
        }
      } catch (error) {
        console.error('Ошибка при добавлении пользователя:', error)
      } finally {
        this.isAdding = false // Разблокируем вызов
      }
    },

    // Очистка данных для тестов
    clearUsers() {
      this.users = []
      localStorage.removeItem('users')
    },
  },
})
