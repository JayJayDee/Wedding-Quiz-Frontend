
import Vue from 'vue';
import Vuex from 'vuex';
import { WeddStates } from '@/stores/state';
import { WeddMutations } from '@/stores/mutation';
import { WeddActions } from '@/stores/actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    app: {
      state: WeddStates,
      mutations: WeddMutations,
      actions: WeddActions
    }
  },
});