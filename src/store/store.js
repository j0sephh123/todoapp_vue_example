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
    heroes: [
      {id: 9, name: 'Abaddon', attribute: 'Strength'},
      {id: 8, name: 'Tiny', attribute: 'Strength'},
      {id: 7, name: 'Axe', attribute: 'Strength'},
      {id: 6, name: 'Clinkz', attribute: 'Agility'},
      {id: 5, name: 'Drow', attribute: 'Agility'},
      {id: 4, name: 'Meepo', attribute: 'Agility'},
      {id: 3, name: 'Enchantress', attribute: 'Intelligence'},
      {id: 2, name: 'Lion', attribute: 'Intelligence'},
      {id: 1, name: 'Jakiro', attribute: 'Intelligence'},
    ],
    heroPage: [],
    tabs: [
      {name: 'All', active: true},
      {name: 'Strength', active: false},
      {name: 'Agility', active: false},
      {name: 'Intelligence', active: false},
    ],
    modal: {
      active: false,
      element: [],
    },
    inputData: {
      name: '',
      category: 'JavaScript',
      codeSnippet: ``,
      confirmed: false,
    }
  },
  mutations: {
    search(state, data) {
      state.search = data;
    },
    removeHero(state, hero) {
      state.heroes = state.heroes.filter(i => {
        return i.id !== hero.id
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
    createHero(state, {name, attribute}) {
      // get last id
      let lastId = state.heroes[0]['id'];

      let hero = {
        id: lastId + 1, name, attribute,
      }

      state.heroes.unshift(hero);
    },

    setName(state, {el, val}) {
      state.inputData[el] = val;
      console.log(state.inputData);
    },
    confirm(state) {
      console.log('completed');
      console.log(state.inputData);
    }
  },
  actions: {

  },
  getters: {
    search: state => state.search,
    heroes: (state, getters) => {
      const {activeTab} = getters;

      const filteredByAttributeHeroes = state.heroes.filter(hero => {
        if(activeTab.name === 'All') {
          return hero
        }
        return hero.attribute === activeTab.name
      });

      return filteredByAttributeHeroes.filter(hero => {
        return hero.name.toUpperCase()
          .match(state.search.toUpperCase())
      });

    },
    tabs: state => state.tabs,
    activeTab: state => state.tabs.filter(t => t.active)[0],
    modal: state => state.modal,
    inputData: state => state.inputData,
  }
})