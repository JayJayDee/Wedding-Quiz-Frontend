import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import { Member, Play } from '@/types';

Vue.use(Vuex)

interface RootState {
  member_token: string | null;
  member: Member | null;
  play: Play | null;
}

const rootState: RootState = {
  member_token: null,
  member: null,
  play: null
};

const rootActions = {
  async authorize(store: ActionContext<RootState, any>) {

  }
};

const rootMutations = {

};

export default new Vuex.Store({
  state: rootState,
  mutations: {

  },
  actions: {

  }
})
