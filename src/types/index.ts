export type userAuth = {
  id: number;
  phone: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
  resetPassCode: string;
  resetPass: boolean;
  authorized: boolean;
  signInError: string;
  signUpError: string;
  resetPassError: string;
};

export type State = {
  user: userAuth;
};
