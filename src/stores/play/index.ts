import { PlayState, WeddRootState } from '@/stores';
import { Module } from 'vuex';

export const playState: PlayState = {
  num_all_quiz: 0,
  num_played: 0, 
  num_correct: 0,
  num_incorrect: 0,
  is_ended: false
};

export const playModule: Module<PlayState, WeddRootState> = {
  namespaced: true,
  state: playState
};