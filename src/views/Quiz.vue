
<template>
  <v-container>
    <v-layout grid-list-md>
      <!-- 이전에 가입 한 적이 없는 경우 -->
      <quiz-entry 
        v-if="!memberJoined && isLoaded === true && isQuizBlocked === false"
        v-on:onSubmit="onMemberInfoInputedFromEntryVue" />

      <!-- 가입한 적이 있는 경우 -->
      <quiz-play
        v-if="memberJoined && isLoaded === true && isAllQuizPlayed === false && isQuizBlocked === false" />

      <!-- 모든 퀴즈 플레이 완료 -->
      <quiz-play-end
        v-if="memberJoined && isAllQuizPlayed === true && isQuizBlocked === false" />

      <!-- 현재 설정이 막혀 있음 -->
      <quiz-blocked 
        v-if="isQuizBlocked === true" />
    </v-layout>
  </v-container>
</template>

<script lang="ts"> 
import Vue from 'vue';
import { State, Action } from 'vuex-class';
import { Play, Member } from '@/types';

import QuizEntry from './quiz/QuizEntry.vue';
import QuizPlay from './quiz/QuizPlay.vue';
import QuizPlayEnd from './quiz/QuizPlayEnd.vue';
import QuizBlocked from './quiz/QuizBlocked.vue';
import Component from 'vue-class-component';
import { QuizConfig } from '@/apis';

@Component({
  components: {
    QuizEntry, QuizPlay, QuizPlayEnd, QuizBlocked
  }
})
export default class Quiz extends Vue {

  @State('member_token')
  private memberToken: string | null;

  @State('play') 
  private play: Play | null;

  @State('global_configs')
  private config: QuizConfig;

  @Action('createMember')
  private createMember: (member: Member) => Promise<any>;

  @Action('queryGlobalConfigs')
  private queryGlbalConfigs: () => Promise<any>;

  constructor() {
    super();
    this.queryGlbalConfigs();
  }

  private get isLoaded(): boolean {
    if (this.memberToken === undefined) {
      return false;
    }
    return true;
  }

  private get memberJoined(): boolean {
    if (this.memberToken) return true;
    return false;
  }

  private get isAllQuizPlayed(): boolean {
    if (!this.play) return false;
    if (this.play.num_all_quiz === this.play.num_played) return true;
    return false;
  }

  private get isQuizBlocked(): boolean {
    if (!this.config) return false;
    if (this.config['quiz_blocked'] && this.config['quiz_blocked'] === true) {
      return true;
    }
    return false;
  }

  public mounted() {
    if (!this.memberToken) {
    }
  }
  
  private onMemberInfoInputedFromEntryVue(member: Member) {
    this.createMember(member);
  }
}
</script>
