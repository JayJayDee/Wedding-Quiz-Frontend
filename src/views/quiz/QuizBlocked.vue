
<template>
  <v-layout column="1">
    <v-card block>
      <v-card-title>
        <h3>죄송합니다..</h3>
      </v-card-title>
      <v-card-text>
        <p>아직 퀴즈가 열리지 않았습니다.</p>
        <p>퀴즈배틀은 10월 10일에 오픈됩니다!</p>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class QuizBlocked extends Vue {
  
}
</script>
