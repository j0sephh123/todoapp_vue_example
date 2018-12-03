<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <nav class="navbar">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/" exact="">Home</router-link>
      <router-link class="navbar-item" to="/snippets" exact="">Snippets</router-link>
      <router-link class="navbar-item" to="/snippets/create" exact="">Create</router-link>
    </div>
  </nav>

  <div class="columns section">
    <div class="column is-8 is-offset-2">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  
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
