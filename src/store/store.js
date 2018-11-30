import Vue from 'vue'
import Vuex from 'vuex'

import todos from './todos';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
  },
  state: {
    sideNav: {
      management: [
        // First.Line management
        {
          id: 1, position: 'Supervisor', type: 'First Line management',
          active: true,
          employees: [
            {id: 1.1, name: 'Octavio'},
            {id: 1.2, name: 'Lina'},
            {id: 1.3, name: 'Agueda'},
          ],
          jobDescription: 'A supervisor is at the highest rank of a first line management. They act as a communicator between the first.line employees and the middle management of the company management hierarchy. They supervise all the essential aspects of a project.',
        },
        {
          id: 2, position: 'Office Manager', type: 'First Line management',
          active: false,
          employees: [
            {id: 2.1, name: 'Dulce'},
            {id: 2.2, name: 'Etelvina'},
            {id: 2.3, name: 'Fermin'},
          ],
          jobDescription: 'Office managers coordinate the various operations performed by the employees of the corporation. They also undertake the payroll duties of the company.',
        },
        {
          id: 3, position: 'Team Leader', type: 'First Line management',
          active: false,
          employees: [
            {id: 3.1, name: 'Ainoa'},
            {id: 3.2, name: 'Anacleto'},
            {id: 3.3, name: 'Eligio'},
          ],
          jobDescription: 'A team leader is responsible for the successful coordination between the employees. Team leaders play a very vital role because they are associated with the grass root level of the organization.',
        },
        // Middle Management
        {
          id: 4, position: 'General Manager', type: 'Middle Management',
          active: false,
          employees: [
            {id: 4.1, name: 'Eligio'},
            {id: 4.2, name: 'Hilario'},
            {id: 4.3, name: 'Eutropio'},
          ],
          jobDescription: 'A general manager is the top tier officer of the middle management of the company management hierarchy. A general manager undertakes job functions relating to different sections such as sales and marketing, client relations, operation management, financial management and team management etc.',
        },
        {
          id: 5, position: 'Regional Manager', type: 'Middle Management',
          active: false,
          employees: [
            {id: 5.1, name: 'Ceferino'},
            {id: 5.2, name: 'Custodia'},
            {id: 5.3, name: 'Jorge'},
          ],
          jobDescription: ' The regional manager is responsible for managing the business of a particular region. The manager develops detailed sales plans and strategies, develops promotional strategies for the products and reports to the general manager.',
        },
        // Top Management
        {
          id: 6, position: 'Chief Executive Officer', type: 'Top Management',
          active: false,
          employees: [
            {id: 6.1, name: 'Seve'},
            {id: 6.2, name: 'Marisela'},
            {id: 6.3, name: 'Godofredo'},
          ],
          jobDescription: 'A chief executive officer (CEO) undertakes the most important activities of the organization. In some mid.range companies, the chief executive officer is the highest position. The CEO reports to the board of directors regarding the various functions of the organization.',
        },
        {
          id: 7, position: 'Board of Directors', type: 'Top Management',
          active: false,
          employees: [
            {id: 7.1, name: 'Segismundo'},
            {id: 7.2, name: 'Anastasio'},
            {id: 7.3, name: 'Telmo'},
          ],
          jobDescription: ' The Board of Directors is a group of stakeholders and they are the main decision.makers of the organization. They choose the chief executive officer. They also review the various on.going activities of the company at regular intervals of time.',
        },
        {
          id: 8, position: 'Vice.President', type: 'Top Management',
          active: false,
          employees: [
            {id: 8.1, name: 'Jenny'},
            {id: 8.2, name: 'Oriana'},
            {id: 8.3, name: 'Malena'},
          ],
          jobDescription: 'The responsibilities of a vice.president vary as per the size of the organization and the specific area of expertise of the professional. Generally, they account for organizing the meeting of the board members and develop reports on the accomplishments of the business organization.',
        },
        {
          id: 9, position: 'Chairman', type: 'Top Management',
          active: false,
          employees: [
            {id: 9.1, name: 'Eloy'},
            {id: 9.2, name: 'Dalia'},
            {id: 9.3, name: 'Aurelia'},
          ],
          jobDescription: 'A chairman is the highest rank holder in a company. A chairman acts as a representative of the company to the outside world.',
        },
      ],
      adminPanel: [
        {id: 1, name: 'Settings', active: false, data: 1,},
        {id: 2, name: 'Manage your team',  active: false, data: 2},
      ],
    },
    tabs: [
      {id: 1, filter: 'All', active: true},
      {id: 2, filter: 'First Line management', active: false,},
      {id: 3, filter: 'Middle Management', active: false,},
      {id: 4, filter: 'Top Management', active: false,},
    ],
    filter: {
      position: '', //position: 'Supervisor', type: 'First Line management'
      type: '',
    }
  },
  mutations: {
    sideNavClick(state, {type, arg}) {
      if(type === 'management') {
        state.sideNav.management = state.sideNav.management.filter(item => {
          if(item.active) {
            item.active = false;
          }
          
          if(item.id === arg.id && !item.active) {
            item.active = true;            
          }
  
          return item;
        })
      } else if (type === 'adminPanel'){
        state.sideNav.adminPanel = state.sideNav.adminPanel.filter(item => {
          if(item.active) {
            item.active = false;
          }
          
          if(item.id === arg.id && !item.active) {
            item.active = true;            
          }
  
          return item;
        })
      }
    },
    setFilter(state, {tab, value}) {
      if(value === 'type') {
        state.tabs = state.tabs.map(t => {
          t.active = false;
          return t;
        }); // set all active to false.

        state.tabs = state.tabs.map(t => {
          if(tab.id === t.id) {
            t.active = true;
          }
          return t;
        }) // toggle active

        // set filter type
        state.filter.type = tab.filter;
      }
    },
    
  },
  actions: {

  },
  getters: {
    workers: state => state.sideNav.management.reduce((acc, curVal, curIndex, arr) => {
      return [...acc,...curVal.employees.map(employee => {
        employee['position'] = curVal.position;
        employee['type'] = curVal.type;
        return employee;
      })];
    }, []),
    management: state => state.sideNav.management,
    adminPanel: state => state.sideNav.adminPanel,
    current: state => state.sideNav.management.filter(item => item.active)[0],
    tabs: state => state.tabs,
    filter: state => state.filter,
  }
})