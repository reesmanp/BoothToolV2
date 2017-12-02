const LOGIN = 'LOGIN';
const login = (token: string) => ({
  type: LOGIN,
  value: token
});

const LOGOUT = 'LOGOUT';
const logout = () => ({
  type: LOGOUT
});

const USERNAME = 'USERNAME';
const username = (name: string) => ({
  type: USERNAME,
  value: name
});

const PASSWORD = 'PASSWORD';
const password = (phrase: string) => ({
  type: PASSWORD,
  value: phrase
});

export const authActions = {
  LOGIN: LOGIN,
  login: login,
  LOGOUT: LOGOUT,
  logout: logout,
  USERNAME: USERNAME,
  username: username,
  PASSWORD: PASSWORD,
  password: password
};
