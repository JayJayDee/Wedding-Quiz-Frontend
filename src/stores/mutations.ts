import { RootState } from '@/stores';
import { Member, Play } from '@/types';

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
  }
};