<template>
  <v-card class="mx-auto card">
    <v-card-title>
      수고하셨습니다!
    </v-card-title>
    <v-card-text>
      모든 퀴즈를 다 푸셨습니다!<br>
      결과는 다음과 같습니다.<br>
      상품은 고득점자를 추첨하여 증정됩니다. 순위를 확인해보세요!
    </v-card-text>
    <v-card-text>
      <v-btn color="primary" v-on:click="onClickGoRank">순위 보러 가기</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    onClickGoRank() {
      location.href = '/#/rank';
    }
  }
}
</script>

<style scoped>
.result-title {
  font-size: 15pt;
}
.result-text {
  color: #666666;
}
</style>