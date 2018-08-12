
<template>
  <v-flex class="row" xs12>
    <v-card>
      {{ innerContent }}
    </v-card>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    type: String,
    content: String
  }
})
export default class QuizQuestionRow extends Vue {

  private content: string;
  private type: string;

  public mounted() {
    console.log('quiz-question-row init');
  }

  public get innerContent(): string {
    if (!this.content) return ''
    return this.content;
  }
}
</script>

<style scoped>
</style>