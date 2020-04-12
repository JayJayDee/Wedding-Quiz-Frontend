<template>
  <v-container class="page">
    <LoadingCard
      v-if="loading === true" />
    <QuizQuestionCard
      v-if="quiz && quiz.current !== null && loading === false" />
    <QuizAnswerCard
      v-if="quiz && quiz.current !== null && loading === false" />
    <QuizDoneInfoCard
      v-if="quiz && quiz.status && quiz.status.all === quiz.status.solved" />
    <QuizDoneCard
      v-if="quiz && quiz.status && quiz.status.all === quiz.status.solved" />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import QuizQuestionCard from '@/components/quiz-cards/QuizQuestionCard.vue';
import QuizAnswerCard from '@/components/quiz-cards/QuizAnswerCard.vue';
import QuizDoneCard from '@/components/quiz-cards/QuizDoneCard.vue';
import QuizDoneInfoCard from '@/components/quiz-cards/QuizDoneInfoCard.vue';

export default {
  components: {
    QuizQuestionCard,
    QuizAnswerCard,
    QuizDoneCard,
    QuizDoneInfoCard
  },
  computed: {
    ...mapState([ 'member', 'loading', 'quiz' ]),
    choices() {
      if (this.quiz) {
        return this.quiz.current.choices;
      }
      return [];
    }
  },
  methods: {
    ...mapActions([ 'refreshQuiz' ])
  },
  async mounted() {
    const self = this;
    this.$nextTick(function () {
      if (self.member) {
        self.refreshQuiz();
      }
    });
  }
};
</script>