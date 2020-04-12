<template>
  <v-list-tile>
    <!-- <v-list-tile-avatar>
      <img :src="rankImage">
    </v-list-tile-avatar> -->
    <v-list-tile-content>
      <v-list-tile-title>
        <span class="text--primary">{{ rankerNameExpr }}</span>
        1등
        <span class="rank-phone">&mdash; {{ rankPhoneExpr }}</span>
      </v-list-tile-title>
      <v-list-tile-sub-title>
        <span class="text--primary">{{ rankScoreExpr }}점 획득</span> 
        &mdash; {{ rankDetailExpr }}
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    row: {
      type: Object
    }
  },
  computed: {
    rankDetailExpr() {
      if (!this.row) return '';
      return '호옹';
    },

    rankScoreExpr() {
      if (!this.row) return '';
      return `${this.row.score}점`;
    },

    rankerNameExpr() {
      if (!this.row) return '';
      return this.row.name;
    },

    rankPhoneExpr() {
      if (!this.row) return '';
      return this.row.phone;
    }
  }
}
</script>