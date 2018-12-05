<template>
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input
      v-validate="'required|name1'" 
      name="name1"
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
    <span>Errors here() => {{ errors.first('name1') }}</span>
  </p>
</div>
</template>

<script>
// https://baianat.github.io/vee-validate/guide/syntax.html#rules-parameters

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
