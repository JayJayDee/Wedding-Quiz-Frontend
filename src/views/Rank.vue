
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

@Component({
  components: {
    RankAll, RankMy
  }
})
export default class Rank extends Vue {

}
</script>

<style lang="css" scoped>
.rank-card {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>