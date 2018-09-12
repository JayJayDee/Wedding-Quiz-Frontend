
<template>
  <span v-if="result">
    <img 
      class="quiz-dot"
      v-if="correctShow"
      :src="require('../assets/icon_correct.png')" />
    <img 
      class="quiz-dot"
      v-if="incorrectShow"
      :src="require('../assets/icon_incorrect.png')" />  
    <img
      class="quiz-dot"
      v-if="notPlayedShow"
      :src="require('../assets/not_played.png')" />
  </span>  
</template>

<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import { QuizResult } from '@/types/common';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheckCircle);

@Component({
  props: {
    result: Object
  },
  components: {

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
  width: 30px;
  height: 30px;
  margin-right: 2px;
  margin-left: 2px;
}
</style>