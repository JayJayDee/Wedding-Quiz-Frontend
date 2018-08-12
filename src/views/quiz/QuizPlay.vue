
<template>
  <v-layout grid-list-md>
    <v-flex xs12>
      <quiz-question-row 
        v-for="question in questions"
        :key="question.question_no"
        :type="question.type"
        :content="question.content" />
    </v-flex>

    <v-flex xs12> 
      <quiz-choice-btn 
        v-for="choice in choices" 
        :key="choice.choice_no"
        :content="choice.content" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State } from 'vuex-class';

import { Quiz, QuizQuestion, QuizChoice } from '@/types/common';
import QuizQuestionRow from '../../components/QuizQuestionRow.vue';
import QuizChoiceBtn from '../../components/QuizChoiceBtn.vue';

@Component({
  components: {
    QuizQuestionRow,
    QuizChoiceBtn
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
