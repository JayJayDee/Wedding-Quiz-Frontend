<template>
  <v-card class="mx-auto card">
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs6>
          <span class="result-title">{{ scoreExpr }}</span>
          <p class="result-text">총 획득 점수</p>
        </v-flex>
        <v-flex xs6>
          <span class="result-title">{{ allQuizExpr }} </span>
          <p class="result-text">플레이한 퀴즈 개수</p>
        </v-flex>
        <v-flex xs6>
          <span class="result-title">{{ numCorrectExpr }}</span>
          <p class="result-text">정답 개수</p>
        </v-flex>
        <v-flex xs6>
          <span class="result-title">{{ percentExpr }}</span>
          <p class="result-text">정답율</p>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {
  },
  computed: {
    ...mapState([ 'quiz' ]),
    scoreExpr() {
      if (!this.quiz || !this.quiz.status) {
        return '';
      }
      return `${this.quiz.status.correct * 10}점`;
    },
    allQuizExpr() {
      if (!this.quiz || !this.quiz.status) {
        return '';
      }
      return `${this.quiz.status.all}개`;
    },
    numCorrectExpr() {
      if (!this.quiz || !this.quiz.status) {
        return '';
      }
      return `${this.quiz.status.correct}개`;
    },
    percentExpr() {
      if (!this.quiz || !this.quiz.status) {
        return '';
      }
      const percent =
        this.quiz.status.correct / this.quiz.status.all * 100;
      return `${percent.toFixed(2)}%`;
    }
  }
}
</script>

<style scoped>
.result-title {
  font-size: 15pt;
}
.result-text {
  color: #666666;
}
</style>