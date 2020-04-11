<template>
  <v-card class="mx-auto">
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