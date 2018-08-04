
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { WeddRootState } from '@/stores/state';

Vue.use(Vuex);

const store: StoreOptions<WeddRootState> = {
  state: {
    memberToken: null
  },
  modules: {

  }
};

export default new Vuex.Store<WeddRootState>(store);