
<template>
  <div> 
    <div v-if="type === 'TEXT'">
      <p class="text-sm-left">{{ innerContent }}</p>
    </div>
    <div v-if="type === 'IMAGE'">
      <img class="question-image" :src="innerContent" />
    </div>
  </div>
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
.question-image {
  width: 100%;
  padding: 10px;
}
</style>