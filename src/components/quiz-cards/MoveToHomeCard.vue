<template>
  <v-card class="mx-auto">
    <v-card-text>
      <p>퀴즈를 플레이하기 위해서는 먼저 사용자 등록이 필요합니다.</p>
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
  }
}
</script>