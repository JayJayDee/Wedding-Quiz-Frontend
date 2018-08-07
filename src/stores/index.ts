
import Vue from 'vue';
import Vuex, { StoreOptions, MutationTree, ActionTree } from 'vuex';
import * as vuextypex from 'vuex-typex';

Vue.use(Vuex);

export interface RootState {
  member_token: string | null;
  member: MemberState | null;
  play: PlayState | null;
}
export interface MemberState {
  name: string;
  phone: string;
}
export interface PlayState {
  num_all_quiz: number;
  num_played: number;
  num_correct: number;
  num_incorrect: number;
  is_ended: boolean;
}

const builder = vuextypex.getStoreBuilder<RootState>();

const root = {
  
  getMember: builder.dispatch(async (context: vuextypex.BareActionContext<RootState, RootState>) => {
    
  }),

  updateMemberToken: builder.commit((state: RootState, memberToken: string) => {
    state.member_token = memberToken;
  })
}

const store = builder.vuexStore();
export default store;