<template>
  <v-dialog v-model="dialog.quizResult.show" persistent>
    <v-card>
      <div style="height: 20px"></div>
      <v-card-text>
        <h3>{{ titleText }}</h3>
      </v-card-text>
      <v-card-text>
        <v-icon size="60"
          v-if="dialog.quizResult.correct === true">
          far fa-smile-wink
        </v-icon>
        <v-icon size="60"
          v-if="dialog.quizResult.correct !== true">
          far fa-grimace
        </v-icon>
      </v-card-text>
      <v-card-text>
        <p class="title">정답은 <b>"{{ rightAnswerText }}"</b> 이었습니다!</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="onCloseFired">닫기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState([ 'dialog' ]),
    titleText() {
      if (this.dialog.quizResult.correct === true) {
        return '정답입니다!';
      }
      return '틀렸습니다 ㅋㅋㅋ';
    },
    rightAnswerText() {
      if (!this.dialog.quizResult || !this.dialog.quizResult.correctChoice) {
        return '';
      }
      return this.dialog.quizResult.correctChoice.choiceText;
    }
  },
  methods: {
    ...mapActions([ 'hideQuizResultDialog', 'refreshQuiz' ]),
    async onCloseFired() {
      this.hideQuizResultDialog();
      this.refreshQuiz();
    }
  }
}
</script>