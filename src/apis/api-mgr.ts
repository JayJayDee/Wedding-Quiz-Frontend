
import axios from 'axios';
import { ReqMemberCreate, ResMemberCreate, ResMemberGet } from '@/apis';

const baseUrl = 'http://dev-api.chatpot.chat';

export const ApiMgr = {

  async requestGenerateMember(member: ReqMemberCreate): Promise<ResMemberCreate> {
    let rawResp: any = await axios({
      method: 'post',
      url: `${baseUrl}/member`,
      data: member
    });
    let resCreate: ResMemberCreate = {
      member_token: rawResp.member_token
    };
    return resCreate;
  },

  async requestGetMember(memberToken: string): Promise<ResMemberGet> {
    //TODO: request via axios 
    let resMemberGet: ResMemberGet = {
      member: {
        name: 'test', 
        phone: 'test',
      },
      play: {
        num_all_quiz: 0,
        num_correct: 0,
        num_incorrect: 0,
        num_played: 0,
        is_ended: false
      }
    };
    return resMemberGet;
  }
};