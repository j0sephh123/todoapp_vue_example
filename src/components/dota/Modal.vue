<template>
  <div :class="modal.active ? 'modal is-active' : 'modal'">
    <div 
      @click="$store.commit('dota/modal', {element: [], active: false})"
      class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{modal.element.name}}</p>
        <button
          @click="$store.commit('dota/modal', {element: [], active: false})"
          class="delete"></button>
      </header>

      <section class="modal-card-body">
        content
      </section>

      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      modal: 'dota/modal',
    })
  }
}
</script>
