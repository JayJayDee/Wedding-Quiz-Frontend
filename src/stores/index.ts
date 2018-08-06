
import Vue from 'vue';
import Vuex, { StoreOptions, MutationTree } from 'vuex';

Vue.use(Vuex);

export interface WeddRootState {
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

const mutations: MutationTree<MemberState> = {

}

const store: StoreOptions<WeddRootState> = {
  state: {
    member_token: null,
    member: null,
    play: null
  },
  actions: {
    initialize() {
      
    }
  },
  mutations: {

  }
};

export default new Vuex.Store<WeddRootState>(store);