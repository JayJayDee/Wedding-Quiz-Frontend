
<template>
  <v-layout column="1">
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
            v-on:choice_clicked="onChoose" />
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
import { Quiz, QuizQuestion, QuizChoice, Play } from '@/types/common';
import QuizQuestionRow from '@/components/QuizQuestionRow.vue';
import QuizChoiceBtn from '@/components/QuizChoiceBtn.vue';

@Component({
  components: {
    QuizQuestionRow,
    QuizChoiceBtn
  }
})
export default class QuizPlay extends Vue {

  @Action('refreshQuizAndPlay')
  private refreshQuizAndPlay: () => Promise<any>;

  @Action('solveQuiz')
  private solveQuiz: (choiceNo: number) => Promise<any>;

  @State('current_quiz')
  private currentQuiz: Quiz;

  @State('play')
  private currentPlay: Play;

  constructor() {
    super();
  }

  public mounted() {
    this.refreshQuizAndPlay()
    .then(() => {
      console.log('quiz refreshed!');
    });
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
    if (!this.currentPlay) return '';
    let ordinalExpr: string = KorLexicalUtil.getOrdinalExpr(this.currentPlay.num_played + 1);
    return `${ordinalExpr} 퀴즈`;
  }

  public onChoose(choiceNo: number) {
    let self = this;
    this.solveQuiz(choiceNo)
    .then(() => {
      return self.refreshQuizAndPlay();
    })
    .then(() => {
      console.log('solve completed');
    });
  }
}
</script>
