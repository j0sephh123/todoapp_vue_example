import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = {
  namespaced: true,
  state: {     
    todos: [
      

    ],
    search: '',
  },
  mutations: {
    search(state, data) {
      state.search = data;
    },
  },
  actions: {
    
  },
  getters: {
    todos: (state) => 
    state.todos.filter(todo => 
      todo.name.match(state.search)
    ),
    one: state => state.one,
    search: state => state.search,
  }
}

export default todos;