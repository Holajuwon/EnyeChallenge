import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "../reducers/user";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

export default () => {
  const store = createStore(
    combineReducers({
      users: userReducer
    }),
    enhancers
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
