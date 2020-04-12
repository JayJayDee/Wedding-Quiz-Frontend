<template>
  <v-card class="mx-auto card">
    <v-card-title>전체 순위</v-card-title>
    <v-card-text>
      <v-list two-line>
        <template 
          v-for="(rank, index) in ranks">
          <RankRow
            :rank="rank"
            :key="rank.rank" />
          <v-divider 
            v-if="index + 1 < ranks.length" 
            :inset="true"
            :key="`divider-${index}`" />
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

import RankRow from '@/components/rank-cards/RankRow.vue';

export default {
  components: {
    RankRow
  },
  computed: {
    ...mapState([ 'rank' ]),
    ranks() {
      if (!this.rank) return [];
      return this.rank.global;
    }
  }
}
</script>