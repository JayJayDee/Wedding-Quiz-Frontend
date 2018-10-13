
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import * as _ from 'lodash';

import { ReqMemberGet, ReqMemberCreate, ResMemberGet, ResMemberCreate, ApiRequestError, ReqGetQuiz, ResGetQuiz, ReqSolveQuiz, ResSolveQuiz, ReqRanks, ReqGetMyRank, ResGetMyRank, QuizConfig } from "@/apis";
import { cvtToPlay, cvtToQuizQuestion, cvtToQuizChoice, cvtToMember, cvtToPlayResult, cvtToRankElement, cvtToMyRank, cvtToQuizResult } from '@/apis/converters';
import { RankElement, MyRank, Quiz, QuizTest } from '@/types/common';

const baseUrl = 'http://api.weddquiz.com';

export const ApiManager = {

  async requestConfigs(): Promise<QuizConfig> {
    let rawResp: any = await this.requestViaAxios({
      url: `${baseUrl}/misc/configs`,
      method: 'get'
    });
    return rawResp as QuizConfig;
  },

  async requestGetMember(req: ReqMemberGet): Promise<ResMemberGet> {
    let rawResp: any = await this.requestViaAxios({
      url: `${baseUrl}/member/${req.member_token}`,
      method: 'get'
    });
    
    let resp: ResMemberGet = {
      member: cvtToMember(rawResp.member),
      play: cvtToPlay(rawResp.play)
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

  async requestQuiz(quizNo: number): Promise<Quiz> {
    let rawResp: any = await this.requestViaAxios({
      url: `${baseUrl}/quiz/${quizNo}`,
      method: 'get'
    });
    const resp: Quiz = {
      difficulty: rawResp.difficulty,
      questions: _.map(rawResp.questions, cvtToQuizQuestion),
      choices: _.map(rawResp.choices, cvtToQuizChoice)
    };
    return resp;
  },

  async requestQuizTest(quizNo: number): Promise<QuizTest> {
    let rawResp: any = await this.requestViaAxios({
      url: `${baseUrl}/quiz/${quizNo}/test`,
      method: 'get'
    });
    const resp: QuizTest = {
      quiz_no: rawResp.quiz_no,
      answer_no: rawResp.answer_no,
      answer_description: rawResp.answer_description
    };
    return resp; 
  },

  async requestGetQuiz(req: ReqGetQuiz): Promise<ResGetQuiz> {
    let rawResp: any = await this.requestViaAxios({
      url: `${baseUrl}/member/${req.member_token}/quiz`,
      method: 'get'
    });

    let resp: ResGetQuiz = {
      quiz: null,
      play: cvtToPlay(rawResp.play),
      results: _.map(rawResp.results, cvtToQuizResult)
    };

    if (rawResp.quiz) {
      resp.quiz = {
        difficulty: rawResp.quiz.difficulty,
        questions: _.map(rawResp.quiz.questions, cvtToQuizQuestion),
        choices: _.map(rawResp.quiz.choices, cvtToQuizChoice),
      };
    }
    return resp;
  },

  async requestSolveQuiz(req: ReqSolveQuiz): Promise<ResSolveQuiz> {
    let rawResp: any = await this.requestViaAxios({
      url: `${baseUrl}/member/${req.member_token}/solve`,
      method: 'post',
      data: {
        choice_no: req.choice_no
      }
    });
    let resp: ResSolveQuiz = {
      result: cvtToPlayResult(rawResp.result),
      play: cvtToPlay(rawResp.play)
    };
    return resp;
  },

  async requestRanks(req: ReqRanks): Promise<RankElement[]> {
    let rawResp: any = await this.requestViaAxios({
      url: `${baseUrl}/ranks`,
      method: 'get'
    });
    let resp: RankElement[] = _.map(rawResp, cvtToRankElement);
    return resp;
  },

  async requestMyRank(req: ReqGetMyRank): Promise<ResGetMyRank> {
    let rawResp: any = await this.requestViaAxios({
      url: `${baseUrl}/member/${req.member_token}/rank`,
      method: 'get'
    });
    let resp: MyRank = cvtToMyRank(rawResp);
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
  },
};