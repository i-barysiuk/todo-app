<template>
  <div :class="$style.filters">
    <label :class="$style.filter" v-for="option in options" :key="option">
      <input
        type="radio"
        name="filter"
        :value="option"
        :checked="value === option"
        @change="$emit('input', option)"
      />
      <span>{{ option }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioButtons',
  props: {
    options: Array,
    value: String
  }
}
</script>

<style lang="scss" module>
.filters {
}
.filter {
  cursor: pointer;
  margin: 0.2rem;
}

.filter input[type='radio'] {
  display: none;
}

.filter input[type='radio']:checked + span {
  padding: 0.2rem;
  border: 1px solid #ebd8d7;
}
</style>
