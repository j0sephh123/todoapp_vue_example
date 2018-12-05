<template>
  <div>
    
    <router-link
      :to="{path: `/snippets/${snippet.id}`}"
      v-for="snippet in snippets"
      :key="snippet.id"  
      class="panel-block">
      <div>
        <span class="title is-4">{{snippet.name}}</span>
        <span class="subtitle">{{snippet.category}}</span>
      </div>
      
      <div>
        <button
          @click.prevent="editSnippet(snippet)" 
          class="button">Edit</button>
        <button
          @click.prevent="removeSnippet(snippet)" 
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
    editSnippet(snippet) {
      this.$store.commit('modal', {element: snippet, active: true})
    },
    removeSnippet(snippet) {
      this.$store.commit('removeSnippet', snippet)
    },
  },
  computed: {
    ...mapGetters({
      snippets: 'snippets',
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