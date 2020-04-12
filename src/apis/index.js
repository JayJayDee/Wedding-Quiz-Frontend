import axios from 'axios';

const baseURL = 'https://api.hyemin.weddquiz.com';

export class ApiError extends Error {}

const headers = (accessToken) => ({
  'Content-Type': 'application/json',
  ...accessToken ? {
    'Authorization': `Bearer ${accessToken}`
  } : {}
});

const postProcessApiError = (error) => {
  console.log(error.response);
  if (error.response && error.response.status === 400) {
    throw new ApiError(error.response.data.error);
  } else {
    throw new ApiError('알수 없는 서버 에러가 발생했습니다.');
  }
};

const post = async ({ url, body, accessToken }) => {
  try {
    const resp = await axios({
      method: 'POST',
      url: `${baseURL}${url}`,
      data: JSON.stringify(body),
      headers: headers(accessToken)
    });
    return resp.data;
  } catch (error) {
    postProcessApiError(error);
  }
};

const get = async ({ url, qs, accessToken }) => {
  try {
    const resp = await axios({
      method: 'GET',
      url: `${baseURL}${url}`,
      qs,
      headers: headers(accessToken)
    });
    return resp.data;
  } catch (error) {
    postProcessApiError(error);
  }
};

export const requestRegisterMember =
  ({ name, phone }) =>
    post({
      url: '/member',
      body: { name, phone }
    });

export const requestGetMember =
  ({ accessToken }) =>
    get({
      url: '/member',
      qs: {},
      accessToken
    });

export const requestGetQuiz =
  ({ accessToken }) =>
    get({
      url: '/quiz',
      qs: {},
      accessToken
    });

export const requestSolveQuiz =
  ({ quizNo, choiceNo, accessToken }) =>
    post({
      url: `/quiz/${quizNo}/solve`,
      body: { choiceNo },
      accessToken
    });

export const requestGlobalRank =
  ({ accessToken }) =>
    get({
      url: `/rank/all`,
      qs: {},
      accessToken
    });
