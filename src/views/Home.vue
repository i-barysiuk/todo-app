<template>
  <div :class="$style.wrapper">
    <h1>todos</h1>
    <div :class="[$style.card, $style.container]">
      <ToDoInput />
      <TaskList />
      <Footer />
    </div>
    <div :class="[$style.card, $style.second]"></div>
    <div :class="[$style.card, $style.third]"></div>
  </div>
</template>

<script>
import TaskList from '@/components/organisms/TaskList'
import Footer from '@/components/organisms/Footer'
import ToDoInput from '@/components/organisms/ToDoInput'
export default {
  name: 'Home',
  components: {
    ToDoInput,
    Footer,
    TaskList
  },
  mounted() {
    this.$store.commit('getTasksFromStorage')
  }
}
</script>

<style lang="scss" module>
h1 {
  font-weight: 100;
  font-size: 7rem;
  color: #ebd8d7;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.container {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
}

.second {
  width: 49%;
  height: 0.5rem;
  z-index: -1;
}

.third {
  width: 48%;
  height: 0.5rem;
  z-index: -2;
}

@media only screen and (max-width: 600px) {
  .container {
    width: 90%;
    height: 70%;
  }
  .second {
    width: 88%;
  }
  .third {
    width: 86%;
  }
}
</style>
