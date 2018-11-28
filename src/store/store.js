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
        // First-Line management
        {
          id: 1, name: 'Supervisor', type: 'First-Line management',
          employees: [
            {id: 1-1, name: 'Octavio'},
            {id: 1-2, name: 'Lina'},
            {id: 1-3, name: 'Agueda'},
          ],
          jobDescription: 'A supervisor is at the highest rank of a first-line management. They act as a communicator between the first-line employees and the middle management of the company management hierarchy. They supervise all the essential aspects of a project.',
        },
        {
          id: 2, name: 'Office Manager', type: 'First-Line management',
          employees: [
            {id: 2-1, name: 'Dulce'},
            {id: 2-2, name: 'Etelvina'},
            {id: 2-3, name: 'Fermin'},
          ],
          jobDescription: 'Office managers coordinate the various operations performed by the employees of the corporation. They also undertake the payroll duties of the company.',
        },
        {
          id: 3, name: 'Team Leader', type: 'First-Line management',
          employees: [
            {id: 3-1, name: 'Ainoa'},
            {id: 3-2, name: 'Anacleto'},
            {id: 3-3, name: 'Eligio'},
          ],
          jobDescription: 'A team leader is responsible for the successful coordination between the employees. Team leaders play a very vital role because they are associated with the grass root level of the organization.',
        },
        // Middle Management
        {
          id: 4, name: 'General Manager', type: 'Middle Management',
          employees: [
            {id: 4-1, name: 'Eligio'},
            {id: 4-2, name: 'Hilario'},
            {id: 4-3, name: 'Eutropio'},
          ],
          jobDescription: 'A general manager is the top tier officer of the middle management of the company management hierarchy. A general manager undertakes job functions relating to different sections such as sales and marketing, client relations, operation management, financial management and team management etc.',
        },
        {
          id: 5, name: 'Regional Manager', type: 'Middle Management',
          employees: [
            {id: 5-1, name: 'Ceferino'},
            {id: 5-2, name: 'Custodia'},
            {id: 5-3, name: 'Jorge'},
          ],
          jobDescription: ' The regional manager is responsible for managing the business of a particular region. The manager develops detailed sales plans and strategies, develops promotional strategies for the products and reports to the general manager.',
        },
        // Top Management
        {
          id: 6, name: 'Chief Executive Officer', type: 'Top Management',
          employees: [
            {id: 6-1, name: 'Seve'},
            {id: 6-2, name: 'Marisela'},
            {id: 6-3, name: 'Godofredo'},
          ],
          jobDescription: 'A chief executive officer (CEO) undertakes the most important activities of the organization. In some mid-range companies, the chief executive officer is the highest position. The CEO reports to the board of directors regarding the various functions of the organization.',
        },
        {
          id: 7, name: 'Board of Directors', type: 'Top Management',
          employees: [
            {id: 7-1, name: 'Segismundo'},
            {id: 7-2, name: 'Anastasio'},
            {id: 7-3, name: 'Telmo'},
          ],
          jobDescription: ' The Board of Directors is a group of stakeholders and they are the main decision-makers of the organization. They choose the chief executive officer. They also review the various on-going activities of the company at regular intervals of time.',
        },
        {
          id: 8, name: 'Vice-President', type: 'Top Management',
          employees: [
            {id: 8-1, name: 'Jenny'},
            {id: 8-2, name: 'Oriana'},
            {id: 8-3, name: 'Malena'},
          ],
          jobDescription: 'The responsibilities of a vice-president vary as per the size of the organization and the specific area of expertise of the professional. Generally, they account for organizing the meeting of the board members and develop reports on the accomplishments of the business organization.',
        },
        {
          id: 9, name: 'Chairman', type: 'Top Management',
          employees: [
            {id: 9-1, name: 'Eloy'},
            {id: 9-2, name: 'Dalia'},
            {id: 9-3, name: 'Aurelia'},
          ],
          jobDescription: 'A chairman is the highest rank holder in a company. A chairman acts as a representative of the company to the outside world.',
        },
      ],
      /*   
      management categories
        Top Management
          Chairman
          Vice-President
          Board of Directors
          Chief Executive Officer
        Middle Management
          General Manager
          Regional Manager
        First-line management - ready
          Supervisor
          Office Manager
          Team Leader
      admin panel
      dunno
      */
    }
  },
  mutations: {
    
  },
  actions: {

  },
  getters: {

  }
})