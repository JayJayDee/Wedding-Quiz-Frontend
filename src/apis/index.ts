import { Member, Play } from '@/types';
import { Quiz, PlayResult } from '@/types/common';


export interface ReqMemberGet {
  member_token: string;
}
export interface ResMemberGet {
  member: Member;
  play: Play;
}

export interface ReqMemberCreate {
  name: string;
  phone: string;
}
export interface ResMemberCreate {
  member_token: string;
}

export interface ReqGetQuiz {
  member_token: string;
}
export interface ResGetQuiz {
  quiz: Quiz | null;
  play: Play;
}

export interface ReqSolveQuiz {
  member_token: string;
  choice_no: number;
}
export interface ResSolveQuiz {
  result: PlayResult;
  play: Play;
}

export class ApiRequestError extends Error {
  private msg: string;

  constructor(msg: string) {
    super(msg);
    this.msg = msg;
  }

  public toString() {
    return this.msg;
  }
}