<template>
  <div>
    <nav class="panel">

      <search-component></search-component>
      <!-- header and search bar -->

      <tabs></tabs>
      <!-- tabs -->

      <hero></hero>
      <!-- heroes -->

      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">
          Create hero
        </button>
      </div> <!-- button -->
    </nav>
  </div>
</template>

<script>

import SearchVue from '../components/dota/Search.vue';
import HeroVue from '../components/dota/Hero.vue';
import TabsVue from '../components/dota/Tabs.vue';

export default {
  components: {
    searchComponent: SearchVue,
    hero: HeroVue,
    tabs: TabsVue,
  },
}
</script>

