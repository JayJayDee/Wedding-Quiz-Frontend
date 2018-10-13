
<template>
  <v-layout column="1" class="layout">
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h3>{{ currentPlayingTitle }}</h3>  
          <v-spacer />
          난이도 {{ difficulty }}단계
        </v-card-title>
        <v-card-text>
          <quiz-question-row 
            v-for="question in questions"
            :key="question.question_no"
            :type="question.type"
            :content="question.content" />
        </v-card-text>
      </v-card>
    </v-flex>
    
    <v-flex xs12> 
      <v-card>
        <v-card-text> 
          <quiz-choice-btn 
            v-for="choice in choices" 
            :key="choice.choice_no"
            :choice_no="choice.choice_no"
            :content="choice.content"
            v-on:choice_clicked="onSolve" />
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12> 
      <v-card class="card-row">
        <v-card-title>
          <h3>정답시 문구</h3>
        </v-card-title>
        <v-card-text> 
          <p>{{ quizTestDesc }}</p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12> 
      <v-card class="card-row">
        <v-card-title>
          <h3>퀴즈 이동</h3>
        </v-card-title>
        <v-card-text> 
          <v-btn>이전</v-btn>
          <v-btn @click="goNext()">다음</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State } from 'vuex-class';

import { KorLexicalUtil } from '@/utils';
import { Quiz, QuizQuestion, QuizChoice, Play, PlayResult, QuizTest as Qt } from '@/types/common';
import QuizQuestionRow from '@/components/QuizQuestionRow.vue';
import QuizChoiceBtn from '@/components/QuizChoiceBtn.vue';
import StatusIndicator from '@/components/StatusIndicator.vue';

@Component({
  components: {
    QuizQuestionRow,
    QuizChoiceBtn,
    StatusIndicator
  }
})
export default class QuizTest extends Vue {

  @Action('refreshQuiz')
  private refreshQuiz: (q: number) => Promise<any>;

  @State('current_quiz')
  private currentQuiz: Quiz;

  @State('quiz_test')
  private quizTest: Qt;

  private quizNo: number | null;

  constructor() {
    super();
    this.quizNo = null;
  }

  public onSolve(choiceNo: number) {
    if (!this.quizTest) return;
    if (this.quizTest.answer_no == choiceNo) {
      alert('정답입니다');
    }
  }

  public mounted() {
    this.refreshQuiz(this.currentQuizNo);
  }

  private goNext() {
    if (!this.currentQuizNo) return;
    this.refreshQuiz(this.currentQuizNo + 1);
  }

  private goPrev() {
    if (!this.currentQuizNo) return;
    if (this.currentQuizNo === 1) return;
    this.refreshQuiz(this.currentQuizNo - 1);
  }

  private get currentQuizNo(): number {
    if (!this.quizTest) return 1;
    return this.quizTest.quiz_no;
  }

  private get questions(): QuizQuestion[] {
    if (!this.currentQuiz) return [];
    return this.currentQuiz.questions;
  }

  private get choices(): QuizChoice[] {
    if (!this.currentQuiz) return [];
    return this.currentQuiz.choices;
  }

  private get difficulty(): string {
    if (!this.currentQuiz) return '';
    return this.currentQuiz.difficulty.toString();
  }

  private get currentPlayingTitle(): string {
    if (!this.quizTest) return '';
    return `퀴즈: ${this.quizTest.quiz_no}`;
  }

  private get quizTestDesc(): string {
    if (!this.quizTest) return '';
    return this.quizTest.answer_description;
  }
}
</script>

<style scoped>
.layout {
  padding: 10px;
}

.card-row {
  margin-top: 20px;
}
</style>