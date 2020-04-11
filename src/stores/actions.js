import {
  requestRegisterMember,
  requestGetMember,
  requestGetQuiz,
  ApiError
} from '../apis';

const WAIT_COMMON = 500;

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
  logout() {
    localStorage.removeItem('weddQuizAccessToken');
    location.reload();
  },

  async afterAppLoaded({ commit }) {
    commit('loadingIndicator', true);
    try {
      await waitLittle(WAIT_COMMON);
      const accessToken = localStorage.getItem('weddQuizAccessToken');
      if (!accessToken) {
        return;
      }
      const memberFetchResp = await requestGetMember({ accessToken });
      commit('putMember', memberFetchResp.member);
      commit('putAccessToken', accessToken);

      const quizResp = await requestGetQuiz({ accessToken });
      commit('putCurrentQuiz', quizResp);

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
      await waitLittle(WAIT_COMMON);
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
  },

  async refreshQuiz({ commit, state }) {
    commit('loadingIndicator', true);

    try {
      await waitLittle(WAIT_COMMON);
      const accessToken = state.accessToken;
      const quizResp = await requestGetQuiz({ accessToken });
      commit('putCurrentQuiz', quizResp);

    } catch (err) {
      handleError({ commit, err });
    } finally {
      commit('loadingIndicator', false);
    }
  }
};