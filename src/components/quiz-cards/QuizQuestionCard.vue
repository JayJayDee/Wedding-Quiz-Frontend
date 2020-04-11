<template>
  <v-card class="mx-auto">
    <v-card-text v-if="quiz.current !== null">
      <div class="text--secondary">
        {{currentSequence}} 문제
      </div>
      <p class="headline">{{quiz.current.question}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

const cardinalExpression = (no) =>
  no === 1 ? '첫번째' :
  no === 2 ? '두번째' :
  no === 3 ? '세번째' :
  no === 4 ? '네번째' :
  no === 5 ? '다섯번째' :
  no === 6 ? '여섯번째' :
  '마지막'

export default {
  computed: {
    ...mapState([ 'quiz' ]),
    currentSequence() {
      if (this.quiz) {
        return cardinalExpression(this.quiz.status.solved + 1);
      }
      return '';
    }
  },
  methods: {
  }
}
</script>