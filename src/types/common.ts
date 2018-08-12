
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
}

export interface QuizChoice {
  choice_no: number;
  content: string;
}
export enum QuizQuestionType {
  TEXT = 'TEXT', IMAGE = 'IMAGE'
}
export interface QuizQuestion {
  type: QuizQuestionType;
  content: string;
}
export interface Quiz {
  difficulty: number;
  choices: QuizChoice[];
  questions: QuizQuestion[];
}