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
          <li class="is-active"><a>
            <span class="icon is-small"><i class="fas fa-image"></i></span>
            <span>Pictures</span>
          </a></li>
          <li><a>
            <span class="icon is-small"><i class="fas fa-music"></i></span>
            <span>Music</span>
          </a></li>
        </ul>
      </div>
      <a
        v-for="w in workers"
        :key="w.id"  
        class="panel-block"> <!-- is-active -->
        <div>
          <span class="title is-4">{{w.name}}</span>
          <span class="subtitle">title...</span>
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
    }),
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
