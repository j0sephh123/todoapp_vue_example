<template>
  <div>
    <textarea
      v-model="codeSnippet" 
      class="textarea" 
      >
    </textarea>
  </div>
</template>

<script>
export default {
  computed: {
    codeSnippet: {
      get() {
        return this.$store.getters.inputData.codeSnippet;
      },
      set(v) {
        this.$store.commit('setName', {el: 'codeSnippet', val: v});
      }
    }
  }
}
</script>
