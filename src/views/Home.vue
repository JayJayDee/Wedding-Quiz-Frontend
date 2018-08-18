<template>
  <v-container grid-list-md>
    <v-flex xs12>
      <v-card
        color="transparent">
        <v-card-media
          :src="require('../assets/main_top_bg.jpg')"
          height="200px"></v-card-media>
        <v-card-text>
          <h3 class="headline mb-0 typo">우리, 결혼합니다.</h3>
          <p></p>
          <p class="typo">서울에서 온 미대생. 대구에서 온 공대생.</p>
          <p class="typo">달라도 너무 다른 우리.</p>
          <p class="typo">이제, 함께 하려 합니다.</p>
        </v-card-text>
        <hr />
        <v-card-text>
          <p class="typo">
            이 슬 . 정진동<br />
            2018.10.27 SAT 11:00 AM<br />
            복정 밀리토피아 호텔
          </p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 class="row">
      <v-card>
        <v-card-title>
          <h3>퀴즈를 풀어 주세요!</h3>
        </v-card-title>
        <v-card-text>
          <p class="text-sm-left">
            두 사람에 대한 퀴즈가 준비되어 있습니다. 퀴즈의 성적이 좋은 상위 10명에게 상품을 증정합니다!
          </p>
          <v-btn color="info" to="/quiz">퀴즈 풀러 가기!</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
.row {
  margin-top: 20px;
}
.v-card.transparent {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.typo {
  font-family: 'Nanum Myeongjo';
}
h3.typo {
  font-family: 'Nanum Myeongjo' !important;
}
hr {
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  border-style: solid 1px #999999;
}
</style>