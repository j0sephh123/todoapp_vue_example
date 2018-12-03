<template>
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input 
      v-model="name" 
      class="input is-large" 
      type="text" 
      :placeholder="step">
    <span class="icon is-left">
      <i class="fas fa-code"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
</template>

<script>
export default {
  props: {
    step: String,
  },
  computed: {
    name: {
      get() {
        return this.$store.getters.inputData.name;
      },
      set(v) {
        this.$store.commit('setName', {el: 'name', val: v});
      }
    }
  }
}
</script>
