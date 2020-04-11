
const waitLittle = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms));

export const actions = {
  async afterAppLoaded({ commit }) {
    commit('loadingIndicator', true);
    await waitLittle(2000);
    commit('loadingIndicator', false);
  },

  showDialog({ commit }, { title, text }) {
    commit('dialog', {
      show: true,
      title, text
    });
  },

  async registerMember({ commit }, member) {
    commit('loadingIndicator', true);
    console.log(member);
    await waitLittle(500);
    commit('loadingIndicator', false);
  }
};