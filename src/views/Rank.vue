
<template>
  <v-container>
    <v-layout column="1" grid-list-md>
      <rank-my class="rank-card" block />
      <rank-all class="rank-card" block />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import RankAll from './rank/RankAll.vue';
import RankMy from './rank/RankMy.vue';
import { Action } from 'vuex-class';

@Component({
  components: {
    RankAll, RankMy
  }
})
export default class Rank extends Vue {

  @Action('queryRanks')
  private queryRanks: () => Promise<any>;

  public mounted() {
    this.queryRanks().then(() => {
      console.log('query-rank-completed');
    });
  }
}
</script>

<style lang="css" scoped>
.rank-card {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>