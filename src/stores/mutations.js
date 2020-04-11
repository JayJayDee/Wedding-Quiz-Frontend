
export const mutations = {
  loadingIndicator(state, loading) {
    state.loading = loading;
  },

  dialog(state, dialog) {
    state.dialog = dialog;
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
  }
};