<template>
  <v-card class="mx-auto card">
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
      <v-text-field label="이름" hide-details="auto" v-model="name"></v-text-field>
      <v-text-field label="전화번호, 예) 01054602379" v-model="phone"></v-text-field>
    </v-card-text>
    <v-card-text>
      <v-btn color="primary" v-on:click="onClickRegister">퀴즈 풀이 시작!</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      phone: ''
    };
  },
  methods: {
    ...mapActions([ 'registerMember', 'showSimpleDialog' ]),
    async onClickRegister() {
      if (this.name.trim().length === 0 ||
          this.phone.trim().length === 0) {
        this.showSimpleDialog({
          title: '죄송합니다.',
          text: `이름과 전화번호를 입력해주셔야 퀴즈에 응모 가능합니다.
                입력하신 이름과 전화번호를 다시 한번 확인해주세요.`
        });
        return;
      }
      this.registerMember({
        name: this.name,
        phone: this.phone
      });
    }
  }
}
</script>