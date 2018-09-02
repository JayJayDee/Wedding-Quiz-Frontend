import { RootState } from '@/stores';
import { Member, Play } from '@/types';
import { Quiz, PlayResult, RankElement, MyRank, QuizResult } from '@/types/common';

export const rootMutations = {
  memberToken(state: RootState, memberToken: string) {
    state.member_token = memberToken;
  },

  loadingStatus(state: RootState, isLoading: boolean) {
    state.is_loading = isLoading;
  },

  error(state: RootState, errorMessage: string) {
    state.error = errorMessage;
  },

  memberBasic(state: RootState, member: Member) {
    state.member = member;
  },

  memberPlay(state: RootState, play: Play) {
    state.play = play;
  },

  currentQuiz(state: RootState, quiz: Quiz) {
    state.current_quiz = quiz;
  },

  playResult(state: RootState, result: PlayResult) {
    state.play_result = result;
  },

  ranks(state: RootState, ranks: RankElement[]) {
    state.ranks = ranks;
  }, 

  myRank(state: RootState, myRank: MyRank) {
    state.my_rank = myRank;
  },

  results(state: RootState, results: QuizResult[]) {
    state.results = results;
  }
};