
<template>
  <span v-if="result">
    <font-awesome-icon 
      class="quiz-dot"
      v-bind:class="{current: isCurrent, 'not-current': !isCurrent}"
      :icon="iconName"/>
  </span>  
</template>

<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import { QuizResult, Play } from '@/types/common';

import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faQuestionCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { State } from 'vuex-class';

library.add(faCheckCircle);
library.add(faQuestionCircle);
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

  private get iconName(): string {
    if (!this.result) return '';
    if (this.result.is_played === false) return 'question-circle';
    if (this.result.is_win === true) return 'check-circle';
    return 'times-circle';
  }

  private get isCurrent(): boolean {
    if (!this.currentPlay || !this.index) return false;
    if (this.index === this.currentPlay.num_played) return true;
    return false;
  }
} 
</script>

<style scoped>
.quiz-dot {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  margin-left: 5px;
}
.not-current {
  color: #999;
}
.current {
  color: #2196f3;
}
</style>