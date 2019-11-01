import { put, call, fork, take, all } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { postApiHandler } from "../api";
import {  updateUser } from "../actions/user";
import firebase from "firebase";
import appConfig from "../config";

firebase.initializeApp(appConfig);
const database = firebase.database();

function createEventChannel() {
  // yield delay(5000)
  // create an event listener that fires whenever a new user is added to the db
  const listener = eventChannel(emit => {
    database.ref("/users").on("value", data => {
      return emit(data.val() || {});
    });
    return () => database.ref("/users").off(listener);
  });

  return listener;
}

console.log(createEventChannel());
// call the event listener to add a user upon recieving new users
function* updateItemSaga() {
  // create the event listener
  const updateChannel = createEventChannel();
  // concurently get data from the event listener anytime it is fired
  while (true) {
    const item = yield take(updateChannel);
    console.log(item);
    // dispatch the addUser action for the batch of new users
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
