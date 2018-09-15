
<template>
  <v-card 
    color="transparent"
    block>
    <v-card-text> 
      <span>
        <quiz-dot 
          v-for="(elem, index) in results"
          :key="elem.quiz_no"
          :index="index"
          :result="elem" />
      </span>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import { Play, QuizResult } from '@/types/common';
import QuizDot from '@/components/QuizDot.vue';

@Component({
  components: {
    QuizDot
  }
}) 
export default class StatusIndicator extends Vue {

  @State('play')
  private currentPlay: Play;

  @State('results')
  private results: QuizResult[];

  private get currentScoreExpr(): string {
    if (!this.currentPlay) return '';
    return `${this.currentPlay.score_sum}`;
  }
}
</script>

<style scoped>

</style>