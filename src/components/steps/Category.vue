<template>
  <div class="control has-icons-left">
    <div class="select is-fullwidth is-large is-rounded">
      <select v-model="category">
        <option>JavaScript</option>
        <option>Java</option>
        <option>Python</option>
      </select>
    </div>
    <span class="icon is-large is-left">
      <i class="fas fa-globe"></i>
    </span>
    
  </div>
</template>

<script>
export default {
  computed: {
    category: {
      get() {
        return this.$store.getters.inputData.category;
      },
      set(v) {
        this.$store.commit('setName', {el: 'category', val: v});
      }
    }
  }
}
</script>
