import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      user: { id: 1, name: 'Luigi' },
      categories: [
        { id: 1, name: 'Geology', done: false },
        { id: 2, name: 'Mathematics', done: false },
        { id: 3, name: 'Sociology', done: false },
        { id: 4, name: 'Nature science', done: false },
        { id: 5, name: 'Programming', done: true },
      ],
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  getters: {
    getCategoriesLength: (state) => state.categories.length,
    getFinishedCategories: (state) =>
      state.categories.filter((cat) => cat.done),
    getUnfinishedCategories: (state) =>
      state.categories.filter((cat) => !cat.done),
    getCategoryById: (state) => (id) =>
      state.categories.find((cat) => cat.id === id),
  },
})

export { store }
