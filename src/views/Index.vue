<template>
  <div>
    <span
      @click="showAccordions()" 
      class="title is-4">Header</span>
    
    {{current}}
    <section class="accordions">
      <article 
        v-for="e in current.employees"
        :key="e.id"
        class="accordion"> <!-- is-active -->
        <div class="accordion-header toggle">
          <p>{{e.name}}</p>
        </div>
        <div class="accordion-body">
          <div class="accordion-content">
            text
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import bulmaAccordion from '../../node_modules/bulma-extensions/bulma-accordion/dist/js/bulma-accordion.js'

export default {
  methods: {
    showAccordions() {
      console.log(this.accordions[0]['element']);
    }
  },
  async mounted() {
    this.accordions = bulmaAccordion.attach();
  },
  data() {
    return {
      accordions: '',
    }
  },
  computed: {
    ...mapGetters({
      current: 'current',
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
