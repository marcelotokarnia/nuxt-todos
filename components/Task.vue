<template>
  <div class="task">
    <label :class="{ checked: isDone }" :for="id">
      <input
        :id="id"
        v-model="isDone"
        type="checkbox"
        @change="updateDb($event)"
      />
      {{ name }}
    </label>
    <div class="notes">
      <textarea
        v-model="taskNotes"
        rows="4"
        cols="80"
        @keypress="listenToKeyPress($event)"
      />
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
  data({ done, notes }) {
    return {
      taskNotes: notes,
      isDone: done,
    }
  },
  methods: {
    listenToKeyPress($event) {
      if ($event.charCode === 13) {
        this.updateDb()
      }
    },
    updateDb() {
      console.log({ isDone: this.isDone, notes: this.taskNotes })
      return 0
    },
  },
})
</script>

<style scoped>
label.checked {
  text-decoration: line-through;
}
.notes {
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
}
</style>
