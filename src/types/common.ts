
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