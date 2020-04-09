import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin() {
  // NOTE: APISIX doesn‘t support user login currently, we return fake data directly.
  return {
    status: 'ok',
    type: 'account',
    currentAuthority: 'admin',
  };
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
