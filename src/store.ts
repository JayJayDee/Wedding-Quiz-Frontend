import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import { Member, Play } from '@/types';
import { ApiManager } from '@/apis/api-mgr';
import { ResMemberGet } from '@/apis';

Vue.use(Vuex)

interface RootState {
  member_token: string | null;
  member: Member | null;
  play: Play | null;
  is_loading: boolean;
}

const rootState: RootState = {
  member_token: null,
  member: null,
  play: null,
  is_loading: true
};

const rootActions = {
  async authorize(store: ActionContext<RootState, any>) {
    store.commit('updateLoading', true);

    let memberToken: string | null = localStorage.getItem('wedd-quiz-token');
    if (!memberToken) {
      store.commit('updateLoading', false);
      return;
    }

    ApiManager.requestGetMember({
      member_token: memberToken
    })
    .then(function(resp: ResMemberGet) {

    })
    .catch(function(err: Error) {

    });
  }
};

const rootMutations = {
  memberToken(state: RootState, memberToken: string) {
    state.member_token = memberToken;
  },

  updateLoading(state: RootState, isLoading: boolean) {
    state.is_loading = isLoading;
  }
};

export default new Vuex.Store({
  state: rootState,
  mutations: rootMutations,
  actions: rootActions
})
