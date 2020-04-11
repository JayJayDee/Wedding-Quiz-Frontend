<template>
  <v-container class="page">
    <LoadingCard
      v-if="loading === true" />
    <QuizQuestionCard
      v-if="quiz && quiz.current !== null && loading === false" />
    <QuizAnswerCard
      v-if="quiz && quiz.current !== null && loading === false" />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import LoadingCard from '@/components/LoadingCard.vue';
import QuizQuestionCard from '@/components/quiz-cards/QuizQuestionCard.vue';
import QuizAnswerCard from '@/components/quiz-cards/QuizAnswerCard.vue';

export default {
  components: {
    LoadingCard,
    QuizQuestionCard,
    QuizAnswerCard
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
        console.log('!');
        self.refreshQuiz();
      }
    });
  }
};
</script>