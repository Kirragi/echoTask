import { call, put } from 'redux-saga/effects';
import { signIn, signUp } from '../../../api/Auth';
import { getUser } from '../../../api/User';
import {
  onSignInReqActionCreator,
  onSignUpReqActionCreator,
  onSignInRespActionCreator,
  onSignUpRespActionCreator,
  getUserActionCreator,
  setSignUpErrorActionCreator,
  setSignInErrorActionCreator,
} from '../../actions';

export function* userSignInWorkSaga({
  payload,
}: ReturnType<typeof onSignInReqActionCreator>) {
  const { data } = yield call(signIn, payload.phone, payload.password);
  if (data) {
    yield put({
      type: onSignInRespActionCreator.type,
      payload: { authorized: data.success, token: data.token },
    });
    const { user } = yield call(getUser);
    if (user) {
      yield put({
        type: getUserActionCreator.type,
        payload: {
          id: user.id,
          phone: user.phone,
          firstName: user.first_name,
          lastName: user.last_name,
        },
      });
    }
  } else {
    yield put({
      type: setSignInErrorActionCreator.type,
      payload: {
        error: 'Sign In error',
      },
    });
  }
}

export function* userSignUpWorkSaga({
  payload,
}: ReturnType<typeof onSignUpReqActionCreator>) {
  const { data } = yield call(
    signUp,
    payload.phone,
    payload.password,
    payload.firstName,
    payload.lastName,
  );
  if (data) {
    yield put({
      type: onSignUpRespActionCreator.type,
      payload: { authorized: data.success, token: data.token },
    });
    const { user } = yield call(getUser);
    if (user) {
      yield put({
        type: getUserActionCreator.type,
        payload: {
          id: user.id,
          phone: user.phone,
          firstName: user.first_name,
          lastName: user.last_name,
        },
      });
    }
  } else {
    yield put({
      type: setSignUpErrorActionCreator.type,
      payload: {
        error: 'Sign Up error',
      },
    });
  }
}
