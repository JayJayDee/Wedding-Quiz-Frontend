
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

import { ReqMemberGet, ReqMemberCreate, ResMemberGet, ResMemberCreate, ApiRequestError } from "@/apis";

const baseUrl = 'http://dev-api.chatpot.chat';

export const ApiManager = {

  async requestGetMember(req: ReqMemberGet): Promise<ResMemberGet> {
    let rawResp: any = await this.requestViaAxios({
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

  async requestCreateMember(req: ReqMemberCreate): Promise<ResMemberCreate> {
    let rawResp: any = await this.requestViaAxios({
      url: `${baseUrl}/member`,
      method: 'post',
      data: req
    });
    let resp: ResMemberCreate = {
      member_token: rawResp.member_token
    };
    return resp;
  },

  async requestViaAxios(axiosOpts: AxiosRequestConfig): Promise<any> {
    try {
      let resp: AxiosResponse =  await axios(axiosOpts);
      if (!resp.data) {
        throw new ApiRequestError('서버 요청 전달에 에러가 발생하였습니다.');
      }
      return resp.data;
    } catch (err) {
      if (err.response) {
        if (err.response.status && err.response.status === 400) {
          throw new ApiRequestError(err.response.data.detail);
        }
      }
      throw new ApiRequestError('서버 요청 전달에 에러가 발생하였습니다.');
    }
  }
};