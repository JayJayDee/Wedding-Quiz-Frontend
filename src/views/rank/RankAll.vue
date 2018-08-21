
<template>
  <v-card block>
    <v-card-title>
      <h3>전체 랭킹</h3>
    </v-card-title>
    
    <v-list two-line>
      <all-rank-row 
        v-for="rank in ranks"
        :key="rank.rank" />
    </v-list>
    
  </v-card>
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
}
</script>