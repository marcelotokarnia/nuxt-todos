<template>
  <div class="container">
    <Task v-bind="task1" />
    <Task v-bind="task2" />
  </div>
</template>

<script lang="ts">
import Task from '@/components/Task.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { Task },
  data() {
    return {
      task1: {
        id: 1,
        name: 'Task1',
        done: true,
        notes:
          'BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA',
      },
      task2: {
        id: 2,
        name: 'Task2',
        done: false,
        notes:
          'NAN NAN NAN NAN NAN NAN NAN NAN NAN NAN NAN NAN NAN NAN NAN NAN',
      },
    }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
