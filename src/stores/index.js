import Vuex from 'vuex';

import { state } from './state';
import { mutations } from './mutations';

export const store = new Vuex.Store({
  state,
  mutations
});