
<template>
  <v-layout column="1">    
    <v-card block>
      <v-card-title>
        <h3>모든 퀴즈를 다 푸셨습니다!</h3>
      </v-card-title>
      <v-card-text>
        <p class="text-sm-left text-left">모든 퀴즈를 다 푸셨습니다. 결과를 확인해 보세요!</p>
        <p class="text-sm-left text-left">이번 기록을 무시하고 재도전 하실수도 있습니다.</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" href="/#/rank" flat>전체 순위 보기</v-btn>
        <v-btn color="primary" flat>기록을 무시하고 재도전!</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Play } from '@/types';
import { State } from 'vuex-class';

@Component
export default class QuizPlayEnd extends Vue {
  
  @State('play')
  private currentPlay: Play;

  private get numAllQuizExpr(): string {
    if (!this.currentPlay) return '';
    return this.currentPlay.num_all_quiz.toString();
  }
}
</script>

<style lang="css" scoped> 
.text-sm-left.text-left {
  text-align: left;
}

.card-row {
  margin-top: 10px;
}
</style>