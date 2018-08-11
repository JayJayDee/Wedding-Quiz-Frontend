<template>
  <v-container grid-list-md>
    <v-flex xs12>
      <v-card>
        <v-card-media
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          height="200px"></v-card-media>
        <v-card-text>
          <h3 class="headline mb-0">호옹이 타이틀</h3>
          호옹 호옹 호옹이!
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 class="row">
      <v-card>
        <v-card-title>퀴즈를 풀어 주세요!</v-card-title>
        <v-text>
          두 사람에 대한 퀴즈가 준비되어 있습니다. 퀴즈의 성적이 좋은 상위 10명에게 상품을 증정합니다!
        </v-text>
        <v-card-footer>
          호옹푸터
        </v-card-footer>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {}
</script>

<style>
.row {
  margin-top: 20px;
}
</style>