
export interface Member {
  name: string;
  phone: string;
}

export interface Play {
  num_all_quiz: number;
  num_played: number;
  num_correct: number;
  num_incorrect: number;
  is_ended: boolean;
  score_sum: number;
}
export interface PlayResult {
  is_win: boolean;
  correct_answer: string;
  answer_description: string;
  gain_score: number;
}

export interface Quiz {
  difficulty: number;
  choices: QuizChoice[];
  questions: QuizQuestion[];
}
export interface QuizChoice {
  choice_no: number;
  content: string;
}
export enum QuizQuestionType {
  TEXT = 'TEXT', IMAGE = 'IMAGE'
}
export interface QuizQuestion {
  question_no: number;
  type: QuizQuestionType;
  content: string;
}

export interface RankElement {
  rank: number;
  name: string;
  phone: string;
  win_count: number;
  play_time: number;
  score_sum: number;
}

export interface MyRank {
  rank: number;
  challengers: number;
}

export interface QuizResult {
  quiz_no: number;
  is_played: boolean;
  is_win: boolean;
}