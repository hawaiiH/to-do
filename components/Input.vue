<template>
  <form
    class="form"
    @submit.prevent="addTask"
  >
    <input
      v-model="task"
      type="text"
      placeholder="What to-do?"
      name="to-do"
      class="form__input"
    >
    <button
      class="form__btn"
      :disabled="!task"
      :class="{ active: task, disable: !task }"
    >
      Додати
    </button>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      task: ''
    }
  },
  computed: mapState(['toDoList']),
  methods: {
    addTask () {
      const task = this.task
      if (this.toDoList.find(el => el.task === task)) {
        this.$store.dispatch('showMessage', 'Вже додано')
      } else if (task.length > 30) {
        this.$store.dispatch('showMessage', 'Максимальна довжина пункту - 30 символів')
      } else if (!task.trim()) {
        this.$store.dispatch('showMessage', 'Введи щось')
      } else {
        this.$store.commit('addTask', task)
        this.$store.dispatch('showMessage', 'Успішно додано')
        this.task = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #231F20;
$yellow: #F7941D;
$red: #ED1B24;
.form {
  display: flex;
  justify-content: center;
  margin: 0.5em 0;
  &__input {
    width: 20em;
    height: 1.5em;
    border: 0;
    border-bottom: 3px solid $yellow;
    outline: 0;
    color: $yellow;
    font-size: 1.3rem;
    padding: 6px 0;
    background: transparent;
    transition: border-color 0.2s;
    &::placeholder {
      color: $red;
    }
    &:focus {
      border-width: 3px;
      border-image: linear-gradient(to right, $primary,$red);
      border-image-slice: 1;
    }
  }
  &__btn {
    background: none;
    border: 3px solid;
    padding: 0em 2em;
    color: $red;
  }
  .active {
    color: $yellow;
    &:hover,
    &:focus {
      border-color: $red;
      animation: pulse 1s;
      box-shadow: 0 0 0 2em rgba(#fff,0);
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 red; }
    }
  }
}
</style>
