
<template>
  <span v-if="result">
    <font-awesome-icon 
      :class="className"
      v-if="correctShow"
      icon="check-circle"/>
    <font-awesome-icon 
      :class="className"
      v-if="incorrectShow"
      icon="times-circle" />
    <font-awesome-icon 
      :class="className"
      v-if="notPlayedShow"
      icon="question" />
  </span>  
</template>

<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import { QuizResult, Play } from '@/types/common';

import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faQuestion, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { State } from 'vuex-class';

library.add(faCheckCircle);
library.add(faQuestion);
library.add(faTimesCircle);

@Component({
  props: {
    result: Object,
    index: Number
  },
  components: {
    FontAwesomeIcon
  }
})
export default class QuizDot extends Vue {
  
  private result: QuizResult;

  private index: number;

  @State('play')
  private currentPlay: Play;

  public get correctShow(): boolean {
    if (!this.result) return false;
    if (this.result.is_played === false) return false;
    if (this.result.is_win === false) return false;
    return true;
  }

  public get incorrectShow(): boolean {
    if (!this.result) return false;
    if (this.result.is_played === false) return false;
    if (this.result.is_win === true) return false;
    return true;
  }

  public get notPlayedShow(): boolean {
    if (!this.result) return false;
    if (this.result.is_played === true) return false;
    return true;
  }

  private get isCurrent(): boolean {
    if (!this.currentPlay || !this.index) return false;
    if (this.index === this.currentPlay.num_played - 1) return true;
    return false;
  }

  private get className(): string {
    if (this.isCurrent === true) return 'quiz-dot current';
    return 'quiz-dot not-current';
  }
}
</script>

<style scoped>
.quiz-dot {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
}
.not-current {
  color: #777777;
}
.current {
  color: #2196f3;
}
</style>