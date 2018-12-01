const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const dota = {
  namespaced: true,
  state: {     
    search: '',
    heroes: [
      {id: 1, name: 'Abaddon', attribute: 'Strength'},
      {id: 2, name: 'Tiny', attribute: 'Strength'},
      {id: 3, name: 'Axe', attribute: 'Strength'},
      {id: 4, name: 'Clinkz', attribute: 'Agility'},
      {id: 5, name: 'Drow', attribute: 'Agility'},
      {id: 6, name: 'Meepo', attribute: 'Agility'},
      {id: 7, name: 'Enchantress', attribute: 'Intelligence'},
      {id: 8, name: 'Lion', attribute: 'Intelligence'},
      {id: 9, name: 'Jakiro', attribute: 'Intelligence'},
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
  }
}

export default dota;