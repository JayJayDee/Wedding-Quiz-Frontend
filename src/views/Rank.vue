
<template>
  <v-container>
    <v-layout column="1" grid-list-md>
      <rank-my class="rank-card" v-if="isMyRankShow" block />
      <rank-all class="rank-card" block />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import RankAll from './rank/RankAll.vue';
import RankMy from './rank/RankMy.vue';
import { Action, State } from 'vuex-class';
import { setTimeout } from 'timers';

@Component({
  components: {
    RankAll, RankMy
  }
})
export default class Rank extends Vue {

  @Action('queryRanks')
  private queryRanks: () => Promise<any>;

  @Action('queryMyRank')
  private queryMyRank: (memberToken: string) => Promise<any>;

  @State('member_token')
  private memberToken: string;

  public mounted() {
    let self: Rank = this;
    setTimeout(() => {
      this.queryRanks().then(() => {
        if (self.memberToken) return self.queryMyRank(self.memberToken);
      })
      .then(() => {
        console.log('query-my-rank-completed');
      });
    }, 1);
  }

  public get isMyRankShow(): boolean {
    if (!this.memberToken) return false;
    return true;
  }
}
</script>

<style lang="css" scoped>
.rank-card {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>