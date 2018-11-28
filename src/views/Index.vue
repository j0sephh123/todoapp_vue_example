<template>
  <div>
    Hello World
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
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
