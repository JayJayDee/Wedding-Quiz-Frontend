
<template>
  <div>
    <v-card v-if="globalRankExist" block>
      <v-card-title>
        <h3>명예의 전당</h3>
      </v-card-title>
      
      <v-list two-line>
        <template 
          v-for="(rank, index) in ranks">
          <all-rank-row 
            :rank="rank"
            :key="rank.rank" />
          <v-divider 
            v-if="index + 1 < ranks.length" 
            :inset="true"
            :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-card>

    <v-card v-if="!globalRankExist" block>
      <v-card-title>
        <h3>명예의 전당</h3>
      </v-card-title>

      <v-card-text>
        <p>아직 아무도 퀴즈 플레이를 완료하지 않았습니다!</p>
        <p>지금 바로 퀴즈를 풀어 랭커가 되어 보세요!</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import AllRankRow from '@/components/AllRankRow.vue';
import { RankElement } from '@/types/common';
import { State } from 'vuex-class';

@Component({
  components: {
    AllRankRow
  }
})
export default class RankAll extends Vue {

  @State('ranks')
  private ranks: RankElement[];

  private get globalRankExist(): boolean {
    if (!this.ranks) return false;
    if (this.ranks.length === 0) return false;
    return true;
  }
}
</script>