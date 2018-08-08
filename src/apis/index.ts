
import { Member, Play } from '@/types';
export { ApiMgr } from './api-mgr';

export interface ReqMemberCreate {
  phone: string;
  name: string;
}
export interface ResMemberCreate {
  member_token: string;
}

export interface ResMemberGet {
  member: Member;
  play: Play;
}