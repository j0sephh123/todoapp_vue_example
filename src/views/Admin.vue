<template>
  <div>

    <nav class="panel">
      <p class="panel-heading">
        Workers
      </p> <!-- heading -->
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-large" type="text" v-model="search" placeholder="search">
          <span class="icon is-large is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
      </div> <!-- search -->

      <div class="tabs is-centered is-boxed">
        <ul>
          <li
            @click="$store.commit('setFilter', {tab: t, value: 'type'})" 
            v-for="t in tabs"
            :key="t.id"
            :class="t.active ? 'is-active' : ''">
            <a><span>{{t.filter}}</span></a>
          </li>
        </ul>
      </div>
      <a
        v-for="w in filteredWorkers"
        :key="w.id"  
        class="panel-block"> <!-- is-active -->
        <div>
          <span class="title is-4">{{w.name}}</span>
          <span class="subtitle">{{w.position}}</span>
        </div>
        


        <div>
          <button class="button">Edit</button>
          <button class="button">Delete</button>
        </div>
      </a>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">
          Useless button
        </button>
      </div> <!-- button -->
    </nav>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  methods: {
    
  },
  async mounted() {
   
  },
  data() {
    return {
     
    }
  },
  computed: {
    ...mapGetters({
      workers: 'workers',
      tabs: 'tabs',
      filter: 'filter',
    }),
    filteredWorkers() {
      const {type} = this.filter;
      let newWorkers = this.workers.filter(w => {
        if(type === 'All') {
          return w
        }
        return w.type === type; 
      })

      return newWorkers.filter(worker => {
        return worker.name.toUpperCase().match(this.search.toUpperCase());
      });
    },
    search: {
      get() {
        return this.$store.getters['todos/search']
      },
      set(val) {
        this.$store.commit('todos/search', val);
      }
    },
  }  
}
</script>
<style scoped>
.panel-block {
  display: flex;
  justify-content: space-between;
}
.title {
  margin: 2px;
  padding: 12px;
}
</style>
