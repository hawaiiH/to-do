<template>
  <div class="tasks-block">
    <div
      v-for="task in toDoList"
      :key="task.id"
      class="task-item"
      :class="{ done: task.done }"
      @dblclick="removeTask(task)"
    >
      <div
        class="checkbox"
        @click="toggleStatus(task)"
      />
      <div class="label">
        {{ task.task }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['toDoList']),
  methods: {
    toggleStatus (task) {
      this.$store.commit('toggleStatus', task)
    },
    removeTask (task) {
      this.$store.commit('removeTask', task)
      this.$store.dispatch('showMessage', 'Успішно видалено')
    }
  }
}
</script>

<style lang="scss" scoped>
$yellow: #F7941D;
$red: #ED1B24;
.task-item {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 3px solid $yellow;
  width: 25rem;
  cursor: default;
  animation-name: task-appear;
  animation-duration: 1s;
  animation-timing-function: ease;
}
@keyframes task-appear {
  0% {
    opacity: 0;
    margin-top: 50px;
  }
  100% {
    opacity: 100%;
    margin-top: 0px;
  }
}
.checkbox {
  margin: 8px;
  width:0.8em;
  height: 0.8em;
  border: 2px solid $yellow;
  transition-duration: 0.5s;
}
.done {
  & .checkbox {
    border: 2px solid $red;
    background-color: $red;
    transition-duration: 0.5s;
  }
  & .label {
    text-decoration: line-through;
  }
}
</style>
