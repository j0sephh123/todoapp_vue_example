<template>
  <div class="columns">
    <div class="column is-6">
      <img src="@/assets/wolf.jpg" alt="">
    </div>
    <div class="column is-6">{{hero}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      hero: [],
    }
  },
  mounted() {
    const {id} = this.$route.params;
    
    this.hero = this.heroes.filter(h => h.id === +id)[0];

  },
  computed: {
    ...mapGetters({
      heroes: 'dota/heroes',
    }),
  }
}
</script>

