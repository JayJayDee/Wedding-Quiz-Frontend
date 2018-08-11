import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import { Member, Play } from '@/types';
import { ApiManager } from '@/apis/api-mgr';
import { ResMemberGet, ReqMemberCreate, ResMemberCreate } from '@/apis';

Vue.use(Vuex)

const TOKEN_KEY_NAME = 'wedd-quiz-token';

interface RootState {
  member_token: string | null;
  member: Member | null;
  play: Play | null;
  is_loading: boolean;
  error: string | null;
}

const rootState: RootState = {
  member_token: null,
  member: null,
  play: null,
  is_loading: true,
  error: null
};

const rootActions = {
  async authorize(store: ActionContext<RootState, any>) {
    store.commit('loadingStatus', true);

    let memberToken: string | null = localStorage.getItem(TOKEN_KEY_NAME);
    if (!memberToken) {
      store.commit('loadingStatus', false);
      return;
    }

    ApiManager.requestGetMember({
      member_token: memberToken
    })
    .then(function(resp: ResMemberGet) {
      store.commit('memberToken', memberToken);
      store.commit('loadingStatus', false);
    })
    .catch(function(err: Error) {
      store.commit('error', err.toString());      
      store.commit('loadingStatus', false);
    });
  },

  async createMember(store: ActionContext<RootState, any>, member: Member) {
    store.commit('loadingStatus', true);
    try {
      let resp: ResMemberCreate = await ApiManager.requestCreateMember(member);
      localStorage.setItem(TOKEN_KEY_NAME, resp.member_token);
      store.commit('memberToken', resp.member_token);

      let memberResp: ResMemberGet = await ApiManager.requestGetMember({
        member_token: resp.member_token
      });
      store.commit('memberBasic', memberResp.member);
      store.commit('memberPlay', memberResp.play);
      store.commit('loadingStatus', false);
    } catch (err) {
      store.commit('loadingStatus', false);
      store.commit('error', err.toString());      
    }
  }
};

const rootMutations = {
  memberToken(state: RootState, memberToken: string) {
    state.member_token = memberToken;
  },

  loadingStatus(state: RootState, isLoading: boolean) {
    state.is_loading = isLoading;
  },

  error(state: RootState, errorMessage: string) {
    state.error = errorMessage;
  },

  memberBasic(state: RootState, member: Member) {
    state.member = member;
  },

  memberPlay(state: RootState, play: Play) {
    state.play = play;
  }
};

export default new Vuex.Store({
  state: rootState,
  mutations: rootMutations,
  actions: rootActions
})
