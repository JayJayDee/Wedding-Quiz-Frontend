
<template>
  <v-dialog 
    v-model="isShow"
    transition="dialog-bottom-transition"
    persistent>
    <v-card>
      <v-card-title>
        <h3>{{ isCorrectExpr }}</h3>
      </v-card-title>
      <v-card-text>
        정답: {{ answerExpr }}
      </v-card-text>
      <v-card-text> 
        {{ anserDescriptionExpr }}
      </v-card-text>
      <v-card-actions>
        <v-btn 
          @click="onConfirmClicked"
          color="primary" flat block>확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { PlayResult } from '@/types/common';
import { State, Action } from 'vuex-class';
import { KorLexicalUtil } from '@/utils';

@Component
export default class SolveResultDialog extends Vue {

  @State('play_result')
  private playResult: PlayResult;

  @Action('confirmAnswer')
  private confirmAnswer: () => Promise<any>;

  public mounted() {
    console.log('solve-result');
  }

  public onConfirmClicked() {
    this.confirmAnswer()
    .then(() => {
      console.log('confirmed');
    });
  }

  private get isCorrectExpr(): string {
    if (!this.playResult) return '';
    return KorLexicalUtil.getCorrectExpr(this.playResult.is_win);
  }
  
  private get isShow(): boolean {
    if (!this.playResult) {
      return false;
    }
    return true;
  }

  private get answerExpr(): string {
    if (!this.playResult) return '';
    return this.playResult.correct_answer;
  }

  private get anserDescriptionExpr(): string {
    if (!this.playResult) return '';
    return this.playResult.answer_description;
  }
}
</script>

<style lang="css">
.v-dialog.transparent {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>