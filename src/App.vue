<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="navbar">

    <div class="navbar-start">
      <router-link class="navbar-item" to="/" exact="">Home</router-link>
      <router-link class="navbar-item" to="/admin" exact="">Administration</router-link>
    </div>

    <div class="navbar-end">
    
      <router-link class="navbar-item" to="/login" exact="">Login</router-link>
      <router-link class="navbar-item" to="/register" exact="">Register</router-link>
      <router-link class="navbar-item" to="/profile" exact="">Profile</router-link>
      <router-link class="navbar-item" to="/logout" exact="">Logout</router-link>
      
    </div>
  </nav>

  <div class="columns section">
    <div class="column is-3">
      <side-nav></side-nav>
    </div>
    <div class="column is-9">
      <router-view></router-view>
    </div>
  </div>
  
</div>
</template>

<script>
import { mapGetters } from "vuex";
import SideNavVue from './SideNav.vue';

export default {
  components: {
    sideNav: SideNavVue,
  },
  data() {
    return {
      
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      
    }),
  },
  watch: {
    
  },
  async mounted() {
    
  }
};
</script>

<style>
.router-link-active {
  text-decoration: underline;
}
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}

</style>
