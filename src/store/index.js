import { v4 as uuidv4 } from 'uuid'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    filter: 'All'
  },
  getters: {
    countTodo(state) {
      return state.tasks.length
    },
    countActiveTodo(state) {
      return state.tasks.filter(task => !task.isComplete).length
    },
    filteredTasks(state) {
      switch (state.filter) {
        case 'Active':
          return state.tasks.filter(task => !task.isComplete)
        case 'Completed':
          return state.tasks.filter(task => task.isComplete)
        default:
          return state.tasks
      }
    }
  },
  mutations: {
    getTasksFromStorage(state) {
      state.tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    },
    createTask(state, newTaskText) {
      state.tasks.unshift({
        id: uuidv4(),
        text: newTaskText,
        isComplete: false
      })
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    setTodo(state, { id, value }) {
      state.tasks = state.tasks.map(task =>
        task.id === id ? { ...task, isComplete: value } : task
      )
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    setFilter(state, filter) {
      state.filter = filter
    },
    clearCompleted(state) {
      state.tasks = state.tasks.filter(task => !task.isComplete)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {},
  modules: {}
})
