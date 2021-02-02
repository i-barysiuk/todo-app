<template>
  <div :class="$style.footer">
    <div>{{ activeCount }} / {{ todoCount }} left</div>
    <RadioButtons :options="filters" v-model="filter" />
    <div @click="clear">
      Clear completed
    </div>
  </div>
</template>

<script>
import RadioButtons from '@/components/moleculs/RadioButtons'
export default {
  name: 'Footer',
  components: {
    RadioButtons
  },
  data() {
    return {
      filters: ['All', 'Active', 'Completed']
    }
  },
  computed: {
    todoCount() {
      return this.$store.getters.countTodo
    },
    activeCount() {
      return this.$store.getters.countActiveTodo
    },
    filter: {
      get() {
        return this.$store.state.filter
      },
      set(value) {
        this.$store.commit('setFilter', value)
      }
    }
  },
  methods: {
    clear() {
      this.$store.commit('clearCompleted')
    }
  }
}
</script>

<style lang="scss" module>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  border-top: 1px solid #e6e6e6;
  color: #a0a0a0;
}
</style>
