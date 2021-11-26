import { takeLatest } from 'redux-saga/effects';
import {
  onSignInReqActionCreator,
  onSignUpReqActionCreator,
} from '../../actions';
import { userSignInWorkSaga, userSignUpWorkSaga } from './workers';

export function* authWatchSaga() {
  yield takeLatest(onSignInReqActionCreator, userSignInWorkSaga);
  yield takeLatest(onSignUpReqActionCreator, userSignUpWorkSaga);
}
