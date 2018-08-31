
<template>
  <v-card block>
    <v-card-title>
      <h3>현재 상태</h3>
    </v-card-title>
    <v-card-text> 
      <p v-if="correct > 0">{{ currentCorrectStatus }}</p>
      <p v-if="incorrect > 0">{{ currentIncorrectStatus }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import { Play } from '@/types/common';

@Component
export default class StatusIndicator extends Vue {

  @State('play')
  private currentPlay: Play;

  private get correct(): number {
    if (!this.currentPlay) return 0;
    return this.currentPlay.num_correct
  }
  
  private get incorrect(): number {
    if (!this.currentPlay) return 0;
    return this.currentPlay.num_incorrect;
  }

  private get currentCorrectStatus(): string {
    if (!this.currentPlay) return '';
    return `${this.currentPlay.num_correct} 문제를 맞췄습니다.`;
  }

  private get currentIncorrectStatus(): string {
    if (!this.currentPlay) return '';
    return `${this.currentPlay.num_incorrect} 문제를 틀렸습니다.`;
  }

  private get currentScoreExpr(): string {
    if (!this.currentPlay) return '';
    return '현재 60점 획득!';
  }
}
</script>

<style scoped>

</style>