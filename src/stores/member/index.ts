import { MemberState, WeddRootState } from '@/stores';
import { Module, ActionTree } from 'vuex';
import { ApiMgr, ResMemberCreate } from '@/apis';

const memberState: MemberState = {
  name: null,
  phone: null
};

const memberActions: ActionTree<MemberState, WeddRootState> = {
  async initialize({ commit }) {
    let memberToken: string | null = localStorage.getItem('wedd-member-token');
    if (!memberToken) {
      //TODO: commit to initial page  
      return;
    } 
  }
};

export const memberModule: Module<MemberState, WeddRootState> = {
  namespaced: true,
  state: memberState
};