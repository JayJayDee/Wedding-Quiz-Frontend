
import axios from 'axios';
import { ReqMemberCreate, ResMemberCreate } from '@/apis';

const baseUrl = 'http://dev-api.chatpot.chat';

export const ApiMgr = {

  requestGenerateMember: async function(member: ReqMemberCreate): Promise<ResMemberCreate> {
    let rawResp: any = await axios({
      method: 'post',
      url: `${baseUrl}/member`,
      data: member
    });
    let resCreate: ResMemberCreate = {
      member_token: rawResp.member_token
    };
    return resCreate;
  }
};