<template>
  <v-card class="mx-auto" v-if="0 === 1">
    <v-card-title>
      디버그용 로그아웃 버튼
    </v-card-title>
    <v-card-text>
      <v-btn color="error" v-on:click="logout">로그아웃</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([ 'logout' ])
  }
}
</script>