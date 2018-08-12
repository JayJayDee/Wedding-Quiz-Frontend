
<template>
  <v-btn>
  </v-btn>  
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    type: String,
    content: String
  }
})
export default class QuizQuestionRow extends Vue {
  
}

</script>
