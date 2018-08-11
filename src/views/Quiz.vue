
<template>
  <v-container grid-list-md>

    <!-- 이전에 가입 한 적이 없는 경우 -->
    <v-card v-if="!memberJoined">
      <v-card-title>
        <h3>퀴즈 배틀에 참여하기</h3>
      </v-card-title>
      <v-card-text>
        <p>정보를 입력하고 7문제의 두 사람에 대한 퀴즈를 풀어보세요!</p>
        <p>빠른 시간 안에, 많이 문제를 푼 10사람을 추첨하여 결혼식장에서 상품을 증정합니다!</p>
      </v-card-text>
      <v-card-text>
        <v-flex xs12>
          <v-form>
            <v-text-field
              label="이름"
              required>
            </v-text-field>
            <v-text-field
              label="전화번호"
              required>
            </v-text-field>
          </v-form>
          <v-btn color="info">퀴즈 배틀 참여!</v-btn>
        </v-flex>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts"> 
import Vue from 'vue';
import { State } from 'vuex-class';
import { Play } from '@/types';

import QuizEntry from './quiz/QuizEntry.vue';
import QuizPlay from './quiz/QuizPlay.vue';
import Component from 'vue-class-component';

@Component
export default class Quiz extends Vue {

  @State('member_token')
  private memberToken: string | null;
  
  @State('play') play: Play | null;

  private get memberJoined(): boolean {
    return false;
  }

  public mounted() {
    if (!this.memberToken) {
      console.log('member_token not found');
    }
  }

  
}
</script>
