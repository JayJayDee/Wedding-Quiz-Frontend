<template>
  <v-container class="page">
    <QuizDoneCard
      v-if="quiz && quiz.status && quiz.status.all === quiz.status.solved" />
    <GlobalRankCard />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import GlobalRankCard from '@/components/rank-cards/GlobalRankCard.vue';
import QuizDoneCard from '@/components/quiz-cards/QuizDoneCard.vue';

export default {
  components: {
    GlobalRankCard,
    QuizDoneCard
  },
  methods: {
    ...mapActions([ 'refreshRanks' ])
  },
  computed: {
    ...mapState([ 'member', 'quiz' ]),
  },
  async mounted() {
    this.refreshRanks();
  }
}
</script>