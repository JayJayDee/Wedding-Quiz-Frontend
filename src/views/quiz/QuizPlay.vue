
<template>
  <v-card>
    호옹호옹 플레이
  </v-card>
</template>

<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State } from 'vuex-class';
import { Quiz } from '@/types/common';

@Component
export default class QuizPlay extends Vue {

  @Action('refreshQuizAndPlay')
  private refreshQuizAndPlay: () => Promise<any>;

  @State('current_quiz')
  private currentQuiz: Quiz;

  public mounted() {
    console.log('quiz-play-scene');
    this.refreshQuizScene();
  }

  public refreshQuizScene() {
    this.refreshQuizAndPlay()
    .then((resp) => {
      console.log('refreshed');
    }); 
  }
}
</script>
