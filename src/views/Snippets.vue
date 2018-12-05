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
        <router-link
          tag="button"
          to="snippets/create"
          class="button is-link is-outlined is-fullwidth">
          Create Snippet
        </router-link>
      </div> <!-- button -->
    </nav>
  </div>
</template>

<script>

import SearchVue from '../components/snippets/Search.vue';
import SnippetVue from '../components/snippets/Snippet.vue';
import TabsVue from '../components/snippets/Tabs.vue';

export default {
  components: {
    searchComponent: SearchVue,
    hero: SnippetVue,
    tabs: TabsVue,
  },
}
</script>

