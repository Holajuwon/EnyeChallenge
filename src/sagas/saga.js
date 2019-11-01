import { put, call, fork, take, all } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { postApiHandler } from "../api";
import { updateUser } from "../actions/user";
import firebase from "firebase";
import appConfig from "../config";

firebase.initializeApp(appConfig);
const database = firebase.database();

function createEventChannel() {
  const listener = eventChannel(emit => {
    database.ref("/users").on("value", data => {
      return emit(data.val() || {});
    });
    return () => database.ref("/users").off(listener);
  });

  return listener;
}

function* updateItemSaga() {
  const updateChannel = createEventChannel();
  while (true) {
    const item = yield take(updateChannel);
    yield put(updateUser(Object.values(item)));
  }
}

function* addUserSaga() {
  const action = yield take("ADD_USER");
  const users = action.users;

  try {
    yield call(postApiHandler, users);
  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga() {
  yield all([addUserSaga(), fork(updateItemSaga)]);
}
