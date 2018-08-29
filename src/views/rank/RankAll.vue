
<template>
  <v-card block>
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