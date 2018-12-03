<template>
  <div>
    
    <router-link
      :to="{path: `/snippets/${hero.id}`}"
      v-for="hero in heroes"
      :key="hero.id"  
      class="panel-block">
      <div>
        <span class="title is-4">{{hero.name}}</span>
        <span class="subtitle">{{hero.attribute}}</span>
      </div>
      
      <div>
        <button
          @click.prevent="editHero(hero)" 
          class="button">Edit</button>
        <button
          @click.prevent="removeHero(hero)" 
          class="button">Delete</button>
      </div>
    </router-link> 


    <modal></modal>

  </div>
</template>


<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
import ModalVue from './Modal.vue';

export default {
  components: {
    modal: ModalVue,
  },
  data() {
    return {
      
    }
  },
  methods: {
    editHero(hero) {
      this.$store.commit('modal', {element: hero, active: true})
    },
    removeHero(hero) {
      this.$store.commit('removeHero', hero)
    },
  },
  computed: {
    ...mapGetters({
      heroes: 'heroes',
    })
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.panel-block {
  display: flex;
  justify-content: space-between;
}
.title {
  margin: 2px;
  padding: 12px;
}
</style>