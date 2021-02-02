<template>
  <input
    v-model="text"
    type="text"
    placeholder="Whats needs to be done?"
    @keypress.enter="createTask"
  />
</template>

<script>
export default {
  name: 'ToDoInput',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    createTask() {
      this.$store.commit('createTask', this.text)
      this.text = ''
    }
  }
}
</script>

<style lang="scss" module>
input[type='text'] {
  padding: 1.5rem;
  font-family: 'Helvetica Neue', serif;
  font-size: 1.5rem;
  font-weight: 100;
  font-style: italic;
  border: 0;
  width: 100%;
  outline: none;
  color: #505050;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

input::placeholder {
  color: #c1c1c1;
}
</style>
