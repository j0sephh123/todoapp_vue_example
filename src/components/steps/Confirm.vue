<template>
  <div>
    <button 
      @click="$store.commit('confirm')"
      class="button is-link is-fullwidth is-large">Confirm button</button>
  </div>
</template>

<script>
export default {
  watch: {
    '$store.state.redirect'(to, from) {
      if(to) {
        this.$router.push({path: '/snippets'})
      }
    }
  }
}
</script>
