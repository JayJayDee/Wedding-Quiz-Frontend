<template>
  <v-card class="mx-auto">
    <v-card-text>
      <div class="text--primary">
        퀴즈 풀이를 위해 이름과 전화번호를 입력해주세요!
      </div>
      <div class="text--secondary">
        높은 점수를 획득하신분의<br>
        이름과 전화번호 뒷자리를 불러드립니다.
      </div>
    </v-card-text>
    <v-card-text>
      <v-text-field label="이름" :rules="rules" hide-details="auto"></v-text-field>
      <v-text-field label="전화번호, 예) 010-5460-2379"></v-text-field>
    </v-card-text>
    <v-card-text>
      <v-btn color="primary ">퀴즈 풀이 시작!</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  
}
</script>