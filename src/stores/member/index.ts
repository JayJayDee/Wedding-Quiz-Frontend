import { MemberState, WeddRootState } from '@/stores';
import { Module, ActionTree, MutationTree } from 'vuex';
import { ApiMgr, ResMemberCreate, ResMemberGet } from '@/apis';

const memberState: MemberState = {
  name: null,
  phone: null
};

const memberActions: ActionTree<MemberState, WeddRootState> = {
  
};

const memberMutations: MutationTree<MemberState> = {
  memberLoaded(state: MemberState, payload: MemberState) {
    state.name = payload.name;
    state.phone = payload.phone;
  }
};

export const memberModule: Module<MemberState, WeddRootState> = {
  namespaced: true,
  state: memberState
};