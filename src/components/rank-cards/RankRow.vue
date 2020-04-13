<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="rankImage" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>
        <span class="text--primary">{{ rankerNameExpr }}</span>
        &mdash; 
        <span class="rank-phone">{{ rankPhoneExpr }}</span>
      </v-list-item-title>
      <div style="height: 5px;"></div>
      <v-list-item-subtitle>
        <span class="text--primary">{{ rankDetailExpr }}</span>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
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
      const winRate = (this.row.score / 70 * 100).toFixed(2);
      return `${this.row.score}점, 소요시간 ${this.row.elapsedTime} 초, 정답율 ${winRate}%`;
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
      const lastNum = this.row.phone.slice(-4);
      return `XXX-XXXX-${lastNum}`;
    },

    rankImage() {
      if (!this.row) return '';
      let path = null;
      switch (this.row.rank) {
        case 1: path = '1st.png'; break;
        case 2: path = '2nd.png'; break;
        case 3: path = '3rd.png'; break;
        case 4: path = '4th.png'; break;
        case 5: path = '5th.png'; break;
        case 6: path = '6th.png'; break;
        case 7: path = '7th.png'; break;
        case 8: path = '8th.png'; break;
        case 9: path = '9th.png'; break;
        case 10: path = '10th.png'; break;
      }
      return require(`../../assets/${path}`);
    }
  }
}
</script>

<style scoped>
.rank-phone {
  font-size: 11pt;
  color: #999999;
}
</style>