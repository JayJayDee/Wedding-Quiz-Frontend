
import { ResMemberGet, ReqMemberCreate, ResMemberCreate } from '@/apis';
import { ActionContext } from '../../node_modules/vuex';
import { RootState, TOKEN_KEY_NAME } from '@/stores';
import { ApiManager } from '@/apis/api-mgr';
import { Member } from '@/types';

export const rootActions = {
  async authorize(store: ActionContext<RootState, any>) {
    store.commit('loadingStatus', true);

    let memberToken: string | null = localStorage.getItem(TOKEN_KEY_NAME);
    if (!memberToken) {
      store.commit('loadingStatus', false);
      return;
    }

    try {
      let resp: ResMemberGet = await ApiManager.requestGetMember({
        member_token: memberToken
      });
      store.commit('memberToken', memberToken);
      store.commit('memberBasic', resp.member);
      store.commit('memberPlay', resp.play);
      store.commit('loadingStatus', false);

    } catch (err) {
      store.commit('loadingStatus', false);
      store.commit('error', err.toString());
    }
    return;
  },

  async createMember(store: ActionContext<RootState, any>, member: Member) {
    store.commit('loadingStatus', true);
    try {
      let resp: ResMemberCreate = await ApiManager.requestCreateMember(member);
      localStorage.setItem(TOKEN_KEY_NAME, resp.member_token);
      store.commit('memberToken', resp.member_token);

      let memberResp: ResMemberGet = await ApiManager.requestGetMember({
        member_token: resp.member_token
      });
      store.commit('memberBasic', memberResp.member);
      store.commit('memberPlay', memberResp.play);
      store.commit('loadingStatus', false);
    } catch (err) {
      store.commit('loadingStatus', false);
      store.commit('error', err.toString());      
    }
  },

  async refreshQuiz(store: ActionContext<RootState, any>, memberToken: string) {
    store.commit('loadingStatus', true);
    try {

      store.commit('loadingStatus', false);
    } catch (err) {
      store.commit('error', err.toString());
      store.commit('loadingStatus', false);
    }
  },
};