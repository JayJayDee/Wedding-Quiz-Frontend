<template>
  <v-card class="mx-auto card">
    <v-card-text>
      <Choice
        v-for="choice in choices"
        :key="choice.choiceNo"
        :quizNo="choice.quizNo"
        :choiceNo="choice.no"
        :text="choice.choiceText" />      
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

import Choice from '@/components/quiz-cards/Choice.vue';

export default {
  components: {
    Choice
  },
  computed: {
    ...mapState([ 'quiz' ]),
    choices() {
      if (this.quiz) {
        return this.quiz.current.choices;
      }
      return [];
    }
  }
}
</script>