
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
    let rawResp: any = await axios({
      method: 'get',
      url: `${baseUrl}/member/${memberToken}`
    });
    let resMemberGet: ResMemberGet = {
      member: {
        name: rawResp.member.name, 
        phone: rawResp.member.phone,
      },
      play: {
        num_all_quiz: rawResp.play.num_all_quiz,
        num_correct: rawResp.play.num_correct,
        num_incorrect: rawResp.play.num_incorrect,
        num_played: rawResp.play.num_played,
        is_ended: rawResp.play.is_ended
      }
    };
    return resMemberGet;
  }
};