
import { ResMemberGet, ReqMemberCreate, ResMemberCreate, ResGetQuiz, ResSolveQuiz } from '@/apis';
import { ActionContext } from '../../node_modules/vuex';
import { RootState, TOKEN_KEY_NAME } from '@/stores';
import { ApiManager } from '@/apis/api-mgr';
import { Member } from '@/types';
import { Quiz, RankElement, MyRank } from '@/types/common';

let delayLittle = function(): Promise<any> {
  return new Promise((resolve: Function, reject: Function) => {
    setTimeout(() => {
      return resolve();
    }, 500);
  });
}

export const rootActions = {
  async authorize(store: ActionContext<RootState, any>) {
    store.commit('loadingStatus', true);

    await delayLittle();

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
    await delayLittle();

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

  async refreshQuizAndPlay(store: ActionContext<RootState, any>) {
    store.commit('loadingStatus', true);
    await delayLittle();

    try {
      let memberToken: string = store.state.member_token as string;
      let resp: ResGetQuiz = await ApiManager.requestGetQuiz({
        member_token: memberToken
      });
      store.commit('currentQuiz', resp.quiz);
      store.commit('memberPlay', resp.play);
      store.commit('loadingStatus', false);
    } catch (err) {
      store.commit('error', err.toString());
      store.commit('loadingStatus', false);
    }
  },

  async solveQuiz(store: ActionContext<RootState, any>, choiceNo: number) {
    store.commit('loadingStatus', true);
    await delayLittle();
    
    try {
      let memberToken: string = store.state.member_token as string;
      let resp: ResSolveQuiz = await ApiManager.requestSolveQuiz({
        member_token: memberToken,
        choice_no: choiceNo
      });
      store.commit('playResult', resp.result);
      store.commit('loadingStatus', false);
    } catch (err) {
      store.commit('error', err.toString());
      store.commit('loadingStatus', false);
    }
  },

  async confirmAnswer(store: ActionContext<RootState, any>) {
    store.commit('playResult', null);
    return;
  },

  async queryRanks(store: ActionContext<RootState, any>) {
    store.commit('loadingStatus', true);
    await delayLittle();
    
    try {
      let ranks: RankElement[] = await ApiManager.requestRanks({});
      store.commit('ranks', ranks);
      store.commit('loadingStatus', false);
      return;
    } catch (err) {
      store.commit('error', err.toString());
      store.commit('loadingStatus', false);
    }
  },

  async queryMyRank(store: ActionContext<RootState, any>, memberToken: string) {
    if (!store.state.member_token) return;
    store.commit('loadingStatus', true);
    await delayLittle();

    try {
      let myRank: MyRank = await ApiManager.requestMyRank({
        member_token: memberToken
      });
      store.commit('myRank', myRank);
      store.commit('loadingStatus', false);
    } catch (err) {
      store.commit('error', err.toString());
      store.commit('loadingStatus', false);
    }
  }
};