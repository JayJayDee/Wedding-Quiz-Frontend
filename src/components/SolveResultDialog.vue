
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
      <v-scale-transition>
        <v-card-text v-show="scoreShow">
          <p class="subheading">{{ scoreExpr }}</p>
        </v-card-text>
      </v-scale-transition>
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
import { setTimeout } from 'timers';

@Component({
  watch: {
    isShow: function(show: boolean) {
      let self: SolveResultDialog = (this as SolveResultDialog);
      if (show === true) {
        if (self.playResult.is_win === false) return;
        setTimeout(() => {
          self.scoreShow = true;
        }, 500);
      } else {
        self.scoreShow = false;
      }
    }
  }
})
export default class SolveResultDialog extends Vue {

  private scoreShow: boolean;

  @State('play_result')
  private playResult: PlayResult;

  @Action('confirmAnswer')
  private confirmAnswer: () => Promise<any>;

  @Action('refreshQuizAndPlay')
  private refreshQuizAndPlay: () => Promise<any>;

  constructor() {
    super();
    this.scoreShow = false;
  }

  public mounted() {
    this.scoreShow = false;
    let self = this;
  }

  public onConfirmClicked() {
    let self = this;
    this.confirmAnswer()
    .then(() => {
      return self.refreshQuizAndPlay();
    })
    .then(() => {
      console.log('refreshed');
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

  private get scoreExpr(): string {
    if (!this.playResult) return '';
    if (this.playResult.gain_score !== 0) return `${this.playResult.gain_score}점 획득!`;
    return '';
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