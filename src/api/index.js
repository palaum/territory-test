import axios from 'axios'

// Флаг для отключения API
const useMockData = false // Поставьте false, чтобы использовать реальное API

const api = axios.create({
  baseURL: 'https://67d80c279d5e3a10152d295f.mockapi.io',
  /*   headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  }, */
})

// Моковые данные (загружаем из localStorage, если есть)
let mockUsers = JSON.parse(localStorage.getItem('mockUsers')) || [
  {
    id: 1,
    fullname: 'Иван Иванов',
    birthday: '1990-01-01',
    phone: '+79991234567',
    email: 'ivan@example.com',
  },
  {
    id: 2,
    fullname: 'Петр Петров',
    birthday: '1985-05-15',
    phone: '+79997654321',
    email: 'petr@example.com',
  },
]

// Метод для получения пользователей
export const fetchUsers = async () => {
  if (useMockData) {
    return mockUsers // Возвращаем моковые данные
  }

  try {
    const response = await api.get('/users')
    return response.data
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error)
    throw error
  }
}

// Метод для добавления пользователя
export const addUser = async (user) => {
  if (useMockData) {
    const newUser = { ...user, id: mockUsers.length + 1 }

    // Проверяем, нет ли уже такого пользователя в mockUsers
    const isDuplicate = mockUsers.some((u) => u.email === newUser.email)
    if (!isDuplicate) {
      mockUsers.push(newUser) // Добавляем моковые данные
      localStorage.setItem('mockUsers', JSON.stringify(mockUsers)) // Сохраняем моковые данные в localStorage
    }
    return newUser
  }

  try {
    const response = await api.post('/users', user)
    return response.data
  } catch (error) {
    console.error('Ошибка при добавлении пользователя:', error)
    throw error
  }
}
