<template>
  <div class="container">
    <div>
      <Task v-bind="task1" />
      <Task v-bind="task2" />
    </div>
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
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
