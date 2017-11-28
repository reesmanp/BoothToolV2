const LOGIN = 'LOGIN';
const login = (token: string) => ({
  type: LOGIN,
  value: token
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
  USERNAME: USERNAME,
  username: username,
  PASSWORD: PASSWORD,
  password: password
};
