<template>
  <v-container class="page">
    <Welcome />
    <div style="height: 30px"></div>
    <MoveToQuiz />
  </v-container>
</template>

<script>
import Welcome from '@/components/Welcome.vue';
import MoveToQuiz from '@/components/MoveToQuiz.vue';

export default {
  name: 'Home',
  components: {
    Welcome,
    MoveToQuiz
  }
}
</script>
