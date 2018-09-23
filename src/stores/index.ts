import Vue from 'vue';
import Vuex from 'vuex';

import { Member, Play } from "@/types";
import { rootState } from '@/stores/state';
import { rootMutations } from '@/stores/mutations';
import { rootActions } from '@/stores/actions';
import { Quiz, PlayResult, RankElement, MyRank, QuizResult } from '@/types/common';
import { QuizConfig } from '@/apis';

export interface RootState {
  member_token: string | null;
  member: Member | null;
  play: Play | null;
  play_result: PlayResult | null;
  is_loading: boolean;
  error: string | null;
  current_quiz: Quiz | null;
  ranks: RankElement[] | null;
  my_rank: MyRank | null;
  results: QuizResult[] | null;
  global_configs: QuizConfig | null;
}

export const TOKEN_KEY_NAME = 'wedd-quiz-token';

Vue.use(Vuex);

export default new Vuex.Store({
  state: rootState,
  mutations: rootMutations,
  actions: rootActions
});