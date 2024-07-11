import config from '@/config';

const BASE_URL = config.API_BASE_URL;

const ENDPOINTS = {
  // auth
  getSignData: `${BASE_URL}/user/auth_message`,
  login: `${BASE_URL}/user/sign_in`,
  logout: `${BASE_URL}/user/sign_out`,
};

export default ENDPOINTS;
