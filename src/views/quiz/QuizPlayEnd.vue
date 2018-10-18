
<template>
  <v-layout column="1">    
    <v-card block>
      <v-card-title>
        <h3>모든 퀴즈를 다 푸셨습니다!</h3>
      </v-card-title>
      <v-card-text>
        <p class="text-sm-left text-left">모든 퀴즈를 다 푸셨습니다. 결과 및 순위를 확인해 보세요!</p>
        <p class="text-sm-left text-left">1등에서 5등까지의 순위에 대해 상품을 증정합니다.</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" href="/#/rank" flat>순위 보기</v-btn>
      </v-card-actions>
    </v-card>

    <v-card block class="card-row">
      <v-card-title>
        <h3>내 플레이 결과</h3>
      </v-card-title>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs6>
            <span class="result-title">{{ gainScoreExpr }}점 </span>
            <p class="result-text">총 획득 점수</p>
          </v-flex>
          <v-flex xs6>
            <span class="result-title">{{ numAllQuizExpr }}개 </span>
            <p class="result-text">플레이한 퀴즈 개수</p>
          </v-flex>
          <v-flex xs6>
            <span class="result-title">{{ numCorrectExpr }}개 </span>
            <p class="result-text">정답 개수</p>
          </v-flex>
          <v-flex xs6>
            <span class="result-title">{{ correctPercentExpr }}</span>
            <p class="result-text">정답율</p>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Play } from '@/types';
import { State } from 'vuex-class';

import { KorLexicalUtil } from '@/utils';

@Component
export default class QuizPlayEnd extends Vue {
  
  @State('play')
  private currentPlay: Play;

  private get numAllQuizExpr():   string {
    if (!this.currentPlay) return '';
    return this.currentPlay.num_all_quiz.toString();
  }

  private get numCorrectExpr(): string {
    if (!this.currentPlay) return '';
    return this.currentPlay.num_correct.toString();
  }

  private get correctPercentExpr(): string {
    if (!this.currentPlay) return '';
    let percent: number = this.currentPlay.num_correct / this.currentPlay.num_all_quiz * 100;
    return `${percent.toFixed(2)}%`;
  }

  private get currentPlayedExpr(): string {
    if (!this.currentPlay) return '';
    return '';
  }

  private get gainScoreExpr(): string {
    if (!this.currentPlay) return '';
    return this.currentPlay.score_sum.toString();
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
.result-title {
  font-size: 15pt;
}
.result-text {
  color: #666666;
}
</style>