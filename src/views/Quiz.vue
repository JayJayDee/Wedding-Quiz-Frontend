
<template>
  <v-container>
    <v-layout grid-list-md>
      <!-- 이전에 가입 한 적이 없는 경우 -->
      <quiz-entry 
        v-if="!memberJoined && isLoaded === true"
        v-on:onSubmit="onMemberInfoInputedFromEntryVue" />

      <!-- 가입한 적이 있는 경우 -->
      <quiz-play
        v-if="memberJoined && isLoaded === true && isAllQuizPlayed === false" />

      <!-- 모든 퀴즈 플레이 완료 -->
      <quiz-play-end
        v-if="memberJoined && isAllQuizPlayed === true" />
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
import Component from 'vue-class-component';

@Component({
  components: {
    QuizEntry, QuizPlay, QuizPlayEnd
  }
})
export default class Quiz extends Vue {

  @State('member_token')
  private memberToken: string | null;

  @State('play') 
  private play: Play | null;

  @Action('createMember')
  private createMember: (member: Member) => Promise<any>;

  constructor() {
    super();
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

  public mounted() {
    if (!this.memberToken) {
      console.log('member_token not found');
    }
  }
  
  private onMemberInfoInputedFromEntryVue(member: Member) {
    this.createMember(member);
  }
}
</script>
