<template>
  <div class="container">
    <input v-model="name" placeholder="What ?" class="border-2 w-1/3" />
    <select v-model="often" class="border-2 w-1/3">
      <option value="" disabled selected>How often</option>

      <option value="NOW">Now</option>
      <option value="WEEKLY">Weekly</option>
      <option value="MONTHLY">Monthly</option>
    </select>
    <button class="w-32 border-2 rounded" @click="submit">Create</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      name: '',
      often: 'NOW',
    }
  },
  methods: {
    submit() {
      axios.post(`/api/task`, {
        name: this.name,
        often: this.often,
      })
    },
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
