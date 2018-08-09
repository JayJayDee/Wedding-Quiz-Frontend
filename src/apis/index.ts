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