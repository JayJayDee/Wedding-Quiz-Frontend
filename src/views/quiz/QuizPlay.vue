
<template>
  <v-layout grid-list-md>
    <quiz-question-row 
      v-for="question in questions"
      :key="question.question_no"
      :type="question.type"
      :content="question.content" />
  </v-layout>
</template>

<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State } from 'vuex-class';

import { Quiz, QuizQuestion, QuizChoice } from '@/types/common';
import QuizQuestionRow from '../../components/QuizQuestionRow.vue';

@Component({
  components: {
    QuizQuestionRow
  }
})
export default class QuizPlay extends Vue {

  @Action('refreshQuizAndPlay')
  private refreshQuizAndPlay: () => Promise<any>;

  @State('current_quiz')
  private currentQuiz: Quiz;

  public mounted() {
    this.refreshQuizScene();
  }

  private get questions(): QuizQuestion[] {
    if (!this.currentQuiz) return [];
    return this.currentQuiz.questions;
  }

  private get choices(): QuizChoice[] {
    if (!this.currentQuiz) return [];
    return this.currentQuiz.choices;
  }

  public refreshQuizScene() {
    this.refreshQuizAndPlay();
  }
}
</script>
