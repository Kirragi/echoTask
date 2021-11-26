import { call, put } from 'redux-saga/effects';
import { resetPassStart, resetPassEnd } from '../../../api/ResetPass';
import {
  resetPassStartReqActionCreator,
  resetPassStartRespActionCreator,
  resetPassEndReqActionCreator,
  resetPassEndRespActionCreator,
  setresetPassErrorActionCreator,
} from '../../actions';

export function* resetPassStartWorkSaga({
  payload,
}: ReturnType<typeof resetPassStartReqActionCreator>) {
  const { data } = yield call(resetPassStart, payload.phone);
  if (data) {
    yield put({
      type: resetPassStartRespActionCreator.type,
      payload: { resetPass: data.success },
    });
  } else {
    yield put({
      type: setresetPassErrorActionCreator.type,
      payload: { error: 'Reset password error' },
    });
  }
}

export function* resetPassEndWorkSaga({
  payload,
}: ReturnType<typeof resetPassEndReqActionCreator>) {
  const { data } = yield call(
    resetPassEnd,
    payload.phone,
    payload.resetPassCode,
    payload.password,
  );
  if (data) {
    yield put({
      type: resetPassEndRespActionCreator.type,
      payload: { authorized: data.success, token: data.token },
    });
  } else {
    yield put({
      type: setresetPassErrorActionCreator.type,
      payload: { error: 'Reset password error' },
    });
  }
}
