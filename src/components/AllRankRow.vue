
<template>
  <v-list-tile>
    <v-list-tile-avatar>
      <img :src="rankImage" v-bind:alt="rankImageAlt">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>
        <span class="text--primary">{{ rankerName }}</span>
        {{ rankNumberExpr }}
      </v-list-tile-title>
      <v-list-tile-sub-title>
        <span class="text--primary">{{ rankScoreExpr }}점 획득</span> 
        &mdash; {{ rankDetailExpr }}
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { RankElement } from '@/types/common';
import { setTimeout } from 'timers';
import { DefaultPrizeImageUtil } from '@/utils';

@Component({
  props: {
    rank: {
      type: Object
    }
  }
})
export default class AllRankRow extends Vue {

  private rank: RankElement;

  public mounted() {
    let self = this;
  }

  public get rankerName(): string {
    if (!this.rank) return '';
    return this.rank.name;
  }

  public get rankNumberExpr(): string {
    if (!this.rank) return '';
    return `${this.rank.rank}등`;
  }

  public get rankScoreExpr(): string {
    if (!this.rank) return '';
    return `${this.rank.score_sum}`;
  }

  public get rankDetailExpr(): string {
    if (!this.rank) return '';
    let winRate = (this.rank.win_count / 7 * 100).toFixed(2);
    return `${this.rank.play_time}초 소요, 정답률 ${winRate}%`;
  }

  public get rankImage(): string {
    if (!this.rank) return '';
    let imageUrl = DefaultPrizeImageUtil.getPrizeImage(this.rank.rank);
    if (!imageUrl.includes('http')) {
      imageUrl = require(`../assets/${imageUrl}`);
    }
    return imageUrl;
  }
  
  public get rankImageAlt(): string {
    if (!this.rank) return '';
    return DefaultPrizeImageUtil.getPrizeImage(this.rank.rank);
  }
}
</script>

<style scoped>

</style>