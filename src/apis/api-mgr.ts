
import axios from 'axios';

import { ReqMemberGet, ReqMemberCreate, ResMemberGet } from "@/apis";

const baseUrl = 'http://dev-api.chatpot.chat';

export const ApiManager = {

  async requestGetMember(req: ReqMemberGet): Promise<ResMemberGet> {
    let rawResp: any = await axios({
      url: `${baseUrl}/member/${req.member_token}`,
      method: 'get'
    });
    
    let resp: ResMemberGet = {
      member: {
        name: rawResp.member.name,
        phone: rawResp.member.phone
      },
      play: {
        is_ended: rawResp.play.is_ended,
        num_all_quiz: rawResp.play.num_all_quiz,
        num_correct: rawResp.play.num_correct,
        num_incorrect: rawResp.play.num_incorrect,
        num_played: rawResp.play.num_played 
      }
    };
    return resp;
  }, 

  async requestCreateMember(req: ReqMemberCreate) {

  }
};