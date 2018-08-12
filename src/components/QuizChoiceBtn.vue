
<template>
  <v-btn>
  </v-btn>  
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    choice_no: Number,
    content: String
  }
})
export default class QuizChoiceBtn extends Vue {
  
}

</script>
