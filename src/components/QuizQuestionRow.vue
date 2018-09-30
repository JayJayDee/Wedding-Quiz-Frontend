
<template>
  <p class="text-sm-left">{{ innerContent }}</p>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    question_no: Number,
    type: String,
    content: String
  }
})
export default class QuizQuestionRow extends Vue {

  private content: string;
  private type: string;

  public mounted() {
    
  }

  public get innerContent(): string {
    if (!this.content) return ''
    return this.content;
  }
}
</script>

<style scoped>
</style>