<template>
  <div class="tabs is-centered is-boxed">
    <ul>
      <li
        :class="t.active ? 'is-active' : ''"
        @click="$store.commit('setActiveTab', t)" 
        v-for="t in tabs"
        :key="t.name"
        ><a><span>{{t.name}}</span></a></li>
    </ul>
  </div> <!-- tabs -->
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      tabs: 'tabs',
    })
  }
}
</script>
