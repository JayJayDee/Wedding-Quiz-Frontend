import { requestRegisterMember, requestGetMember, ApiError } from '../apis';

const waitLittle = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms));

const handleError = ({ commit, err }) => {
  if (err instanceof ApiError) {
    commit('dialog', {
      show: true,
      title: '에러가 발생했습니다..',
      text: err.message
    });
  }
  throw err;
};

export const actions = {
  async afterAppLoaded({ commit }) {
    commit('loadingIndicator', true);
    try {
      await waitLittle(500);
      const accessToken = localStorage.getItem('weddQuizAccessToken');
      if (!accessToken) {
        return;
      }
      const memberFetchResp = await requestGetMember({ accessToken });
      commit('putMember', memberFetchResp.member);
      commit('putAccessToken', accessToken);

    } catch (err) {
      handleError({ commit, err });
    } finally {
      commit('loadingIndicator', false);
    }
  },

  showDialog({ commit }, { title, text }) {
    commit('dialog', {
      show: true,
      title, text
    });
  },

  async registerMember({ commit }, member) {
    commit('loadingIndicator', true);

    try {
      await waitLittle(500);
      const memberRegResp = await requestRegisterMember(member);
      const accessToken = memberRegResp.token;
      localStorage.setItem('weddQuizAccessToken', accessToken);

      const memberFetchResp = await requestGetMember({ accessToken });
      commit('putMember', memberFetchResp.member);
      commit('putAccessToken', accessToken);

    } catch (err) {
      handleError({ commit, err });
    } finally {
      commit('loadingIndicator', false);
    }
  }
};