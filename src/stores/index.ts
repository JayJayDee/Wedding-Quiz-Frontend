
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { memberModule } from './member';
import { playModule } from './play';

Vue.use(Vuex);

export interface WeddRootState {
  member_token: string | null;
}
export interface MemberState {
  name: string | null;
  phone: string | null;
}
export interface PlayState {
  num_all_quiz: number;
  num_played: number;
  num_correct: number;
  num_incorrect: number;
  is_ended: boolean;
}

const store: StoreOptions<WeddRootState> = {
  state: {
    member_token: null
  },
  actions: {
    initialize() {
      
    }
  },
  modules: {
    member: memberModule,
    play: playModule
  }
};

export default new Vuex.Store<WeddRootState>(store);