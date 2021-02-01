<template>
  <div :class="$style.content">
    <Task
      v-for="task in filteredTasks"
      :key="task.id"
      :id="task.id"
      :text="task.text"
      :isComplete="task.isComplete"
      @change="e => setTodo(task.id, e.target.checked)"
    />
  </div>
</template>

<script>
import Task from '@/components/moleculs/Task'
import { mapGetters } from 'vuex'
export default {
  name: 'TaskList',
  components: {
    Task
  },
  computed: {
    ...mapGetters(['filteredTasks'])
  },
  methods: {
    setTodo(id, value) {
      this.$store.commit('setTodo', { id, value })
    }
  }
}
</script>

<style lang="scss" module>
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
