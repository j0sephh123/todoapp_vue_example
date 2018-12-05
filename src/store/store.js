import Vue from 'vue'
import Vuex from 'vuex'

import dota from './dota';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dota,
  },
  state: {
    search: '',
    snippets: [
      {id: 9, name: 'Abaddon', category: 'JavaScript'},
      {id: 8, name: 'Tiny', category: 'JavaScript'},
      {id: 7, name: 'Axe', category: 'JavaScript'},
      {id: 6, name: 'Clinkz', category: 'Java'},
      {id: 5, name: 'Drow', category: 'Java'},
      {id: 4, name: 'Meepo', category: 'Java'},
      {id: 3, name: 'Enchantress', category: 'Python'},
      {id: 2, name: 'Lion', category: 'Python'},
      {id: 1, name: 'Jakiro', category: 'Python'},
    ],
    snippetPage: [],
    tabs: [
      {name: 'All', active: true},
      {name: 'JavaScript', active: false},
      {name: 'Java', active: false},
      {name: 'Python', active: false},
    ],
    modal: {
      active: false,
      element: [],
    },
    inputData: {
      name: '',
      category: 'JavaScript',
      codeSnippet: ``,
    },
    redirect: false,
  },
  mutations: {
    search(state, data) {
      state.search = data;
    },
    removeSnippet(state, snippet) {
      state.snippets = state.snippets.filter(i => {
        return i.id !== snippet.id
      })
    },
    setActiveTab(state, tab) {
      state.tabs = state.tabs.filter(item => {
        if(item.active) {
          item.active = false;
        } // set active to false
        
        if(item.name === tab.name) {
          item.active = true;
          return item;            
        } // set active to true

        return item;
      })
    },
    modal(state, {element, active}) {
      state.modal.active = active;
      state.modal.element = element;
    },
    setName(state, {el, val}) {
      state.inputData[el] = val;
      console.log(state.inputData);
    },
    confirm(state) {
      let lastId = state.snippets[0]['id'];

      let snippet = {
        id: lastId + 1, 
        name: state.inputData.name, 
        category: state.inputData.category,
        codeSnippet: state.inputData.codeSnippet,
      }

      state.snippets.unshift(snippet);

      state.redirect = true;
    },
  },
  actions: {

  },
  getters: {
    search: state => state.search,
    snippets: (state, getters) => {
      const {activeTab} = getters;

      const filteredByCategoriesSnippets = state.snippets.filter(snippet => {
        if(activeTab.name === 'All') {
          return snippet
        }
        return snippet.category === activeTab.name
      });

      return filteredByCategoriesSnippets.filter(snippet => {
        return snippet.name.toUpperCase()
          .match(state.search.toUpperCase())
      });

    },
    tabs: state => state.tabs,
    activeTab: state => state.tabs.filter(t => t.active)[0],
    modal: state => state.modal,
    inputData: state => state.inputData,
  }
})