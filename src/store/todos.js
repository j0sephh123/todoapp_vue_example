const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const todos = {
  namespaced: true,
  state: {     
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
    search: state => state.search,
  }
}

export default todos;