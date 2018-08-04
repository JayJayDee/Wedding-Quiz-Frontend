import { MemberState, PlayState } from '@/stores';

export { ApiMgr } from './api-mgr';


export interface ReqMemberCreate {
  phone: string;
  name: string;
}
export interface ResMemberCreate {
  member_token: string;
}

export interface ResMemberGet {
  member: MemberState;
  play: PlayState;
}