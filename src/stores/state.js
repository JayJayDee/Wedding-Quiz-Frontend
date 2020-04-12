
export const state = {
  loading: false,
  loggedIn: false,
  dialog: {
    simple: {
      show: false,
      title: null,
      text: null
    },
    quizResult: {
      show: false,
      correct: true,
      correctChoice: null
    }
  },
  member: null,
  accessToken: null,
  quiz: {
    current: null,
    status: null
  },
  rank: {
    global: []
  }
};