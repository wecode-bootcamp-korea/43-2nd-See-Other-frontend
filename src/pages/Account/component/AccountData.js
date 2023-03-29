const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

let code = new URL(window.location.href).searchParams;
const CODE_PARAMS = code.get('code');
const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${CODE_PARAMS}&client_secret=${CLIENT_SECRET}`;

const AccountData = {
  KAKAO_AUTH_URL,
  KAKAO_OAUTH_URL,
};
export default AccountData;
