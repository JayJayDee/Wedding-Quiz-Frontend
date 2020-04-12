import {
  requestRegisterMember,
  requestGetMember,
  requestGetQuiz,
  ApiError,
  requestSolveQuiz
} from '../apis';

const WAIT_COMMON = 300;

const waitLittle = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms));

const handleError = ({ commit, err }) => {
  if (err instanceof ApiError) {
    commit('simpleDialog', {
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

  showSimpleDialog({ commit }, { title, text }) {
    const show = true;
    commit('simpleDialog', { show, title, text });
  },

  hideSimpleDialog({ commit }) {
    const show = false;
    commit('simpleDialog', { show, title: '', text: '' });
  },

  showQuizResultDialog({ commit }, { correct, correctChoice }) {
    const show = true;
    commit('quizResultDialog', { show, correct, correctChoice });
  },

  hideQuizResultDialog({ commit }) {
    const show = false;
    commit('quizResultDialog', { show });
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
  },

  async solveQuiz({ commit, state }, { quizNo, choiceNo }) {
    commit('loadingIndicator', true);
    try {
      await waitLittle(WAIT_COMMON);
      const accessToken = state.accessToken;

      const { correct, choices } = await requestSolveQuiz({ quizNo, choiceNo, accessToken });

      commit('quizResultDialog', {
        show: true,
        correct,
        correctChoice: choices.correct
      });
      
    } catch (err) {
      handleError({ commit, err });
    } finally {
      commit('loadingIndicator', false);
    }
  }
};