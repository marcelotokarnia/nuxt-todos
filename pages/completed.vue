<template>
  <div class="container">
    <Task v-for="task in tasks" v-bind="task" :key="task.id" />
  </div>
</template>

<script lang="ts">
import Task from '@/components/Task.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { Task },
  async asyncData({ $config: { baseUrl } }) {
    const tasks = await fetch(`${baseUrl}/api/tasks/completed`).then((res) =>
      res.json()
    )
    return { tasks }
  },
})
</script>

<style>
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
