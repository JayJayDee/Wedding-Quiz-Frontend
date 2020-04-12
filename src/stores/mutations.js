
export const mutations = {
  loadingIndicator(state, loading) {
    state.loading = loading;
  },

  simpleDialog(state, dialog) {
    state.dialog.simple = dialog;
  },

  quizResultDialog(state, { show, correct, correctChoice }) {
    state.dialog.quizResult = {
      show, correct, correctChoice
    };
  },

  putAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  },

  putMember(state, { name, phone }) {
    state.member = {
      name, phone
    };
  },

  putCurrentQuiz(state, { quiz, status }) {
    state.quiz.current = quiz;
    state.quiz.status = status;
  },

  putGlobalRanks(state, { ranks }) {
    state.rank.global = ranks;
  }
};