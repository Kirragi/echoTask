import { userSlice } from './reducer';

export const {
  onSignInReq: onSignInReqActionCreator,
  onSignUpReq: onSignUpReqActionCreator,
  onSignInResp: onSignInRespActionCreator,
  onSignUpResp: onSignUpRespActionCreator,
  getUser: getUserActionCreator,
  resetPassStartReq: resetPassStartReqActionCreator,
  resetPassStartResp: resetPassStartRespActionCreator,
  resetPassEndReq: resetPassEndReqActionCreator,
  resetPassEndResp: resetPassEndRespActionCreator,
  signOut: signOutActionCreator,
  setSignInError: setSignInErrorActionCreator,
  setSignUpError: setSignUpErrorActionCreator,
  setresetPassError: setresetPassErrorActionCreator,
} = userSlice.actions;
