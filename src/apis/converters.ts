import { Play } from '@/types';
import { QuizQuestion, QuizQuestionType, QuizChoice, Member, PlayResult } from '@/types/common';

export function cvtToPlay(rawElem: any): Play {
  let play: Play = {
    num_all_quiz: rawElem.num_all_quiz,
    num_correct: rawElem.num_correct,
    num_incorrect: rawElem.num_incorrect,
    num_played: rawElem.num_played,
    is_ended: rawElem.is_ended
  };
  return play;
}

export function cvtToQuizQuestion(raw: any): QuizQuestion {
  let type: QuizQuestionType = QuizQuestionType.TEXT;
  if (raw.type === 'IMAGE') type = QuizQuestionType.IMAGE;
  let q: QuizQuestion = {
    question_no: raw.question_no,
    type: type,
    content: raw.content
  };
  return q;
}

export function cvtToQuizChoice(raw: any): QuizChoice {
  let choice: QuizChoice = {
    content: raw.content,
    choice_no: raw.choice_no
  };
  return choice;
}

export function cvtToMember(raw: any): Member {
  let member: Member = {
    name: raw.name,
    phone: raw.phone
  };
  return member;
}

export function cvtToPlayResult(raw: any): PlayResult {
  let result: PlayResult = {
    is_win: raw.is_win,
    correct_answer: raw.correct_answer,
    answer_description: '호옹이 정답 설명' //TODO: to be changed to real description.
  };
  return result;
}