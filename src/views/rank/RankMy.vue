

<template>
  <v-card block>
    <v-card-title>
      <h3>내 순위</h3>
    </v-card-title>
    <v-card-text>
      <v-flex xs12 sm6 md3 block>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card flat>
              <v-card-text><h1>{{ grade }}</h1></v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12 >
                <v-card flat>
                  <v-card-text>
                    {{ gradeDetail }}<br />
                    {{ prizeDetail }}<br />
                    도전 결과에 따라 순위는 변동될 수 있습니다.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12 >
                <v-card flat>
                  <v-card-text></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';
import { MyRank } from '@/types/common';

@Component
export default class RankMy extends Vue {

  @State('my_rank')
  private myRank: MyRank;

  public get percent(): number {
    if (!this.myRank) return 0;
    let percent: number = this.myRank.rank / this.myRank.challengers * 100;
    return percent;
  }

  public get grade(): string {
    let prefix: string = 'Rank ';
    if (!this.myRank) return '';
    if (this.percent >= 0 && this.percent < 20) return `${prefix} S`;
    else if (this.percent >= 20 && this.percent < 40) return `${prefix} A`;
    else if (this.percent >= 40 && this.percent < 60) return `${prefix} B`;
    else if (this.percent >= 60 && this.percent < 80) return `${prefix} C`;
    return `${prefix} D`;
  }

  public get gradeDetail(): string {
    if (!this.myRank) return '';
    return `총 ${this.myRank.challengers}명의 도전자 중 ${this.myRank.rank}등 입니다.`;
  }
  
  public get prizeDetail(): string {
    if (!this.myRank) return '';
    if (this.myRank.rank <= 10) {
      return '축하합니다! 상품을 기대해 주세요!';
    }
    return '';
  }
}
</script>