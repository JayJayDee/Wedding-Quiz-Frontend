import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import { Member, Play } from '@/types';

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
      
    }
    
    console.log('authorize!');
    store.commit('memberToken', '123');
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
