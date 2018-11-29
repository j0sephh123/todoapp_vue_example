<template>
  <aside class="menu">
    <div v-show="$route.name === 'Index'">
      <p class="menu-label">Management</p>
      <ul class="menu-list">
        <li
          @click="$store.commit('sideNavClick', {type: 'management', arg: m})"
          v-for="m in management" 
          :key="m.id"
        ><a :class="m.active ? 'is-active' : ''">{{m.name}}</a></li>
      </ul>
    </div>

    <div v-show="$route.name === 'Admin'">
      <p class="menu-label">Administration</p>

      <ul class="menu-list">
        <li
          @click="$store.commit('sideNavClick', {type: 'adminPanel', arg: a})" 
          v-for="a in adminPanel" 
          :key="a.id">
          <a :class="a.active ? 'is-active' : ''">{{a.name}}</a>
        </li>
      </ul>
    </div>

</aside>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  mounted() {
    
  },
  methods: {
    
  },
  computed: {
    ...mapGetters({
      management: 'management',
      adminPanel: 'adminPanel',
    }),
  }
}
</script>
