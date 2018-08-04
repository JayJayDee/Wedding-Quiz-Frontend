import { MemberState, WeddRootState } from '@/stores';
import { Module } from 'vuex';

export const memberState: MemberState = {
  name: null,
  phone: null
};

export const memberModule: Module<MemberState, WeddRootState> = {
  namespaced: true,
  state: memberState
};