

<template>
  <v-layout column="1">
    <v-card block>
      <v-card-title>
          <h3>퀴즈 배틀에 참여하기</h3>
        </v-card-title>
        <v-card-text>
          <p>두 사람에 대한 7문제의 퀴즈를 풀어보세요!</p>
          <p>빠른 시간 안에, 많이 문제를 푼 10사람을 추첨하여 결혼식장에서 상품을 증정합니다!</p>
          <p>상품 증정을 위해, 이름과 전화번호를 입력하고 시작해 주세요!</p>
        </v-card-text>
        <v-card-text>
          <v-flex xs12>
            <v-form>
              <v-text-field
                v-model="name"
                label="이름"
                required>
              </v-text-field>
              <v-text-field
                v-model="phone"
                label="전화번호"
                required>
              </v-text-field>
            </v-form>
            <v-btn color="info" @click="onSubmit">퀴즈 배틀 참여!</v-btn>
          </v-flex>
        </v-card-text>
    </v-card>
  </v-layout>
</template>

<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import { Member } from '@/types';

@Component
export default class QuizEntry extends Vue {
  // data
  private name: string | null;
  private phone: string | null;

  constructor() {
    super();
    this.name = null;
    this.phone = null;
  }
  
  public onSubmit() {
    if (!this.name || this.name.trim() === '') {
      return alert('이름을 입력하세요');
    }
    if (!this.phone || this.phone.trim() === '') {
      return alert('휴대폰번호를 입력하세요');
    }

    let newMember: Member = {
      name: this.name,
      phone: this.phone
    };
    this.$emit('onSubmit', newMember);
  }
}
</script>
