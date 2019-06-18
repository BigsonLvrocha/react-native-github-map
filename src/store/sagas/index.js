import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import { Creators as MarkersActions, Types as MakersTypes } from '~/store/ducks/markers';
import api from '~/services/api';

function* addUserRequest(action) {
  try {
    const { username } = action.payload;
    if (!username) {
      yield put(MarkersActions.addUserFailed('user field is required'));
      return;
    }
    const { data } = yield select(state => state.markers);
    const inState = data.findIndex(item => item.user.login === username);
    if (inState !== -1) {
      yield put(MarkersActions.addUserFailed('user already defined in map'));
      return;
    }
    const { data: userData } = yield call(api.get, `/users/${username}`);
    yield put(MarkersActions.addUserSuccess(userData));
  } catch (err) {
    yield put(MarkersActions.addUserFailed(err.message));
  }
}

export default function* rootSaga() {
  return yield all([takeLatest(MakersTypes.ADD_USER_REQUEST, addUserRequest)]);
}
