export const state = () => {
  return {
    toDoList: [],
    listCounter: 0,
    messages: [],
    messagesCounter: 0
  }
}

export const mutations = {
  addTask (state, task) {
    ++state.listCounter
    state.toDoList.push({ task, id: state.listCounter, done: false })
  },
  removeTask (state, toDo) {
    state.toDoList = state.toDoList.filter(el => el !== toDo)
  },
  toggleStatus (state, toDo) {
    const idx = state.toDoList.findIndex(el => el === toDo)
    state.toDoList[idx].done = !state.toDoList[idx].done
  },
  addMessage (state, msg) {
    ++state.messagesCounter
    state.messages.push({ msg, id: state.messagesCounter })
  },
  removeMessage (state) {
    state.messages.shift()
  }
}

export const actions = {
  showMessage (context, msg) {
    context.commit('addMessage', msg)
    setTimeout(() => {
      context.commit('removeMessage')
    }, 5000)
  }
}
