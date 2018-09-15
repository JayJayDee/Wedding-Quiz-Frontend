
<template>
  <span v-if="result">
    <font-awesome-icon 
      class="quiz-dot quiz-correct"
      v-if="correctShow"
      icon="check-circle"/>
    <font-awesome-icon 
      class="quiz-dot quiz-incorrect"
      v-if="incorrectShow"
      icon="times-circle" />
    <font-awesome-icon 
      class="quiz-dot quiz-unsolved"
      v-if="notPlayedShow"
      icon="question" />
  </span>  
</template>

<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import { QuizResult } from '@/types/common';

import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faQuestion, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheckCircle);
library.add(faQuestion);
library.add(faTimesCircle);

@Component({
  props: {
    result: Object
  },
  components: {
    FontAwesomeIcon
  }
})
export default class QuizDot extends Vue {
  
  private result: QuizResult;

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
}
</script>

<style scoped>
.quiz-dot {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
}
.quiz-unsolved {
  color: #777777;
}
.quiz-correct {
  color: #777777;
}
.quiz-incorrect {
  color: #777777;
}
</style>