const LOGIN = 'LOGIN';
const login = (token: string) => ({
  type: LOGIN,
  token: token
});

export const authActions = {
  LOGIN: LOGIN,
  login: login
};
