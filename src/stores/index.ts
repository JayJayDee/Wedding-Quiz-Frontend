
import Vue from 'vue';
import Vuex, { StoreOptions, MutationTree, ActionTree, ActionContext } from 'vuex';

import { getStoreBuilder, BareActionContext } from 'vuex-typex';

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

const builder = getStoreBuilder<RootState>();

async function fetchMemberFromApi(context: BareActionContext<RootState, RootState>) {

}

function updateMemberToken(state: RootState, memberToken: string) {
  state.member_token = memberToken;
}

export const rootHandler = {
  fetchMemberFromApi: builder.dispatch(fetchMemberFromApi),
  updateMemberToken: builder.commit(updateMemberToken)
}

const store = builder.vuexStore();
export default store;