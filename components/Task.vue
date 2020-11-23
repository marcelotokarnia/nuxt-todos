<template>
  <div class="task">
    <label :class="{ checked: isDone }" :for="id">
      <input v-model="isDone" type="checkbox" @change="updateDb($event)" />
      {{ name }}
    </label>
    <div class="notes">
      <textarea :value="notes" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Task',
  props: {
    name: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    done: {
      type: Boolean,
    },
  },
  data({ done }) {
    return {
      isDone: done,
    }
  },
  methods: {
    updateDb() {
      console.log({ isDone: this.isDone })
      return 0
    },
  },
})
</script>

<style scoped>
label.checked {
  text-decoration: line-through;
}
</style>
