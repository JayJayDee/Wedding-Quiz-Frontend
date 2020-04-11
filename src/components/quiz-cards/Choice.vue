<template>
  <v-btn
    class="choice-btn"
    v-on:click="onChoiceClicked"
    block>
    {{ text }}
  </v-btn>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    quizNo: { type: Number },
    choiceNo: { type: Number },
    text: { type: String }
  },
  computed: {
    ...mapState([ 'quiz' ])
  },
  methods: {
    ...mapActions([ 'solveQuiz' ]),
    async onChoiceClicked() {
      this.solveQuiz({
        quizNo: this.quizNo,
        choiceNo: this.choiceNo
      });
    }
  }
}
</script>

<style scoped>
.choice-btn {
  margin-bottom: 10px;
}
</style>