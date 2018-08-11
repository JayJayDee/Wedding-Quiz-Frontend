
<template>
  <v-container grid-list-md>

    <!-- 이전에 가입 한 적이 없는 경우 -->
    <quiz-entry 
      v-if="!memberJoined"
      v-on:onSubmit="onMemberInfoInputedFromEntryVue" />

    <!-- 가입한 적이 있는 경우 -->
  </v-container>
</template>

<script lang="ts"> 
import Vue from 'vue';
import { State, Action } from 'vuex-class';
import { Play, Member } from '@/types';

import QuizEntry from './quiz/QuizEntry.vue';
import QuizPlay from './quiz/QuizPlay.vue';
import Component from 'vue-class-component';

@Component({
  components: {
    QuizEntry
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

  private get memberJoined(): boolean {
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
