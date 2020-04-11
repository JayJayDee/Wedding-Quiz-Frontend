<template>
  <v-container class="page">
    <LoadingCard
      v-if="loading === true" />
    <QuizQuestionCard
      v-if="quiz && quiz.current !== null && loading === false" />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import LoadingCard from '@/components/LoadingCard.vue';
import QuizQuestionCard from '@/components/quiz-cards/QuizQuestionCard.vue';

export default {
  components: {
    LoadingCard,
    QuizQuestionCard
  },
  computed: {
    ...mapState([ 'member', 'loading', 'quiz' ])
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