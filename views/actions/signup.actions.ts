const FNAME = 'FNAME';
const fname = (name: string) => ({
  type: FNAME,
  value: name
});

const LNAME = 'LNAME';
const lname = (name: string) => ({
  type: LNAME,
  value: name
});

const UNAME = 'UNAME';
const uname = (name: string) => ({
  type: UNAME,
  value: name
});

const PNAME = 'PNAME';
const pname = (name: string) => ({
  type: PNAME,
  value: name
});

const EMAIL = 'EMAIL';
const email = (email: string) => ({
  type: EMAIL,
  value: email
});

const TEL = 'TEL';
const tel = (tel: string) => ({
  type: TEL,
  value: tel
});

const RESET = 'RESET';
const reset = () => ({
  type: RESET
});

export const signUpActions = {
  FNAME: FNAME,
  fname: fname,
  LNAME: LNAME,
  lname: lname,
  UNAME: UNAME,
  uname: uname,
  PNAME: PNAME,
  pname: pname,
  EMAIL: EMAIL,
  email: email,
  TEL: TEL,
  tel: tel,
  RESET: RESET,
  reset: reset
};
