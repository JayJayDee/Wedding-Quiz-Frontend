<template>
  <v-container class="page">
    <GlobalRankCard />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

import GlobalRankCard from '@/components/rank-cards/GlobalRankCard.vue';

export default {
  components: {
    GlobalRankCard
  },
  methods: {
    ...mapActions([ 'refreshRanks' ])
  },
  async mounted() {
    this.refreshRanks();
  }
}
</script>