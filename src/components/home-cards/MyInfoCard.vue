<template>
  <v-card class="mx-auto card">
    <v-card-text>
      <div class="text--primary">
        <p><b>안녕하세요, {{member.name}}님!</b></p>
      </div>

      <div v-if="isQuizDone !== true">
        <div class="text--primary">
          아직 퀴즈를 완료하지 않으셨어요.<br>
          퀴즈 메뉴를 이용하셔서 나머지 퀴즈를 다 풀어보세요!
        </div>
        <div style="height: 10px;"></div>
        <v-btn color="primary" v-on:click="onClickGoQuiz">퀴즈 풀러 가기</v-btn>
      </div>

      <div v-if="isQuizDone === true">
        <div class="text--primary">
          모든 퀴즈를 모두 완료하셨습니다!<br>
          내 순위를 확인해 보세요!
        </div>
        <div style="height: 10px;"></div>
        <v-btn color="primary" v-on:click="onClickGoRank">순위 확인하러 가기</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([ 'member', 'quiz' ]),
    isQuizDone() {
      if (!this.quiz || !this.quiz.status) {
        return false;
      }
      if (this.quiz.status.all >= this.quiz.status.solved) {
        return true;
      }
      return false;
    }
  },
  methods: {
    async onClickGoQuiz() {
      location.href = '/#/quiz';
    },
    async onClickGoRank() {
      location.href = '/#/rank';
    }
  }
}
</script>