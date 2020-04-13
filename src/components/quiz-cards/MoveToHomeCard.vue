<template>
  <v-card class="mx-auto card">
    <v-card-text>
      <p>
        퀴즈를 플레이하기 위해서는 먼저 사용자 등록이 필요합니다.
        먼저 간단히 등록하고 퀴즈를 즐겨 보세요!<br />
      </p>
      <v-btn color="primary" v-on:click="onClickGoHome">등록하러 가기</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([ 'quiz' ])
  },
  methods: {
    onClickGoHome() {
      location.href = '/#/';
    }
  }
}
</script>