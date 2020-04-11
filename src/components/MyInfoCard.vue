<template>
  <v-card class="mx-auto">
    <v-card-text>
      <div class="text--primary">
        안녕하세요, {{member.name}}님!
      </div>
      <div class="text--secondary">
        아직 퀴즈를 완료하지 않으셨어요.<br>
        퀴즈 메뉴를 이용하셔서 나머지 퀴즈를 다 풀어보세요!
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([ 'member' ])
  },
}
</script>