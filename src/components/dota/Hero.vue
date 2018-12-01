<template>
  <div>
    <transition-group
      
    >
      <router-link
        :to="{path: `/dota/${hero.id}`}"
        v-for="hero in heroes"
        :key="hero.id"  
        class="panel-block">
        <div>
          <span class="title is-4">{{hero.name}}</span>
          <span class="subtitle">{{hero.attribute}}</span>
        </div>
        
        <div>
          <button class="button">Edit</button>
          <button
            @click="$store.commit('dota/removeHero', hero)" 
            class="button">Delete</button>
        </div>
      </router-link> 
    </transition-group>
  </div>
</template>


<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
import { TweenMax } from 'gsap/TweenMax'

export default {
  data() {
    return {
      tweeningValue: 0
    }
  },
  methods: {
    leave() {
      // console.log(this);
      // TweenMax.to(this.$el, 0.5, {x: 50})
      
    }
  },
  computed: {
    ...mapGetters({
      heroes: 'dota/heroes',
    })
  },
}
</script>

<style scoped>
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */

.panel-block {
  display: flex;
  justify-content: space-between;
}
.title {
  margin: 2px;
  padding: 12px;
}
</style>