import { Member, Play } from '@/types';


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