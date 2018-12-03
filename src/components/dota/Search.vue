<template>
  <div>
    <nav class="panel">
      <p class="title is-4 panel-heading">
        Code Snippets
      </p> <!-- heading -->
      <div class="panel-block">
        <p class="control has-icons-left">
          <input 
            class="input is-large" 
            type="text" 
            v-model="search" 
            placeholder="search">
          <span class="icon is-large is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
      </div> <!-- search -->
    </nav>
  </div>
</template>

<script>

export default {
  computed: {
    search: {
      get() {
        return this.$store.getters.search;
      },
      set(val) {
        this.$store.commit('search', val);
      }
    },
  }  
}
</script>

