<template>
  <div class="steps is-large" id="stepsDemo">
    
  <div
    :class="step.active ? 'step-item is-link is-active' : 'step-item'"
    v-for="step in steps"
    :key="step.id">
    <div 
      @click="stepAction({arg: 'previous', step: step.id})"
      class="step-marker">{{step.id}}</div>
    <div class="step-details">
      <p class="step-title">{{step.child.name}}</p>
    </div>
  </div> <!-- steps -->

  <div class="steps-content">
    <div
      v-for="step in steps"
      :key="step.id"
      :class="step.active ? stepClass + ' is-active' : stepClass">

      <field :step="step.child.name"></field>

    </div>
  </div>

  <div class="steps-actions">
    <div class="steps-action">
      <a
        @click="stepAction({arg: 'previous'})"
        href="#" data-nav="previous" class="button is-link is-large">Previous</a>
    </div>
    <div class="steps-action">
      <a
        @click="stepAction({arg: 'next'})"
        href="#" data-nav="next" class="button is-link is-large">Next</a>
    </div>
  </div> <!-- actions -->

</div>
</template>

<script>
// bulma extensions
import steps from '../../node_modules/bulma-extensions/bulma-steps/dist/js/bulma-steps.js';
import FieldVue from '../components/steps/Field.vue';

export default {
  components: {
    field: FieldVue,
  },
  methods: {
    stepAction({arg, step}) {
      if(step) {
        this.steps = this.steps.map(s => {
          s.active = false;

          if(s.id === step) {
            s.active = true;
            return s
          }
          return s;
        });
        return;
      }


      if(arg === 'previous' && this.current > 1) {
        this.current -= 1;
        
        this.steps = this.steps.map(s => {
          s.active = false;

          if(s.id === this.current) {
            s.active = true;
            return s;
          }
          
          return s;
        })
      } else if(arg === 'next' && this.current < 4) {
        this.current += 1;

        this.steps = this.steps.map(s => {
          s.active = false;

          if(s.id === this.current) {
            s.active = true;
            return s
          }
          return s;
        });
      } 

      

    },
  },
  data() {
    return {
      stepClass: 'step-content has-text-centered',
      steps: [
        {id: 1, name: 'step1', active: true,  child: {name: 'name'}},
        {id: 2, name: 'step2', active: false, child: {name: 'category'}},
        {id: 3, name: 'step3', active: false, child: {name: 'codeSnippet'}},
        {id: 4, name: 'step4', active: false, child: {name: 'confirm'}},
      ],
      max: 4,
      min: 1,
      current: 1,
    }
  },
}
</script>
<style scoped>
.step-item {
  cursor: pointer;
}
.step-marker:hover {
  background-color: lightskyblue;
}
</style>

