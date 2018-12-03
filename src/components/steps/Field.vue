<template>

<div>
  <div v-if="step === 'name'">
    <name 
      :step="step">
    </name>
  </div>
  <div v-if="step === 'category'">
    <category 
      :step="step">
    </category>
  </div>
  <div v-if="step === 'codeSnippet'">
    <code-snippet 
      :step="step">
    </code-snippet>
  </div>
  <div v-if="step === 'confirm'">
    <confirm-component 
      :step="step">
    </confirm-component>
  </div>
</div>


</template>

<script>
import ConfirmVue from './Confirm.vue';
import CodeSnippet from './CodeSnippet.vue';
import CategoryVue from './Category.vue';
import NameVue from './Name.vue';

export default {
  components: {
    name: NameVue,
    category: CategoryVue,
    codeSnippet: CodeSnippet,
    confirmComponent: ConfirmVue,
  },  
  props: {
    step: String,
  },
  data() {
    return {
      name: '',
    }
  }
}
</script>