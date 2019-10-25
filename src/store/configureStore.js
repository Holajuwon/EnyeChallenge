import { createStore, combineReducers } from "redux";
import { useStore } from "react-redux";
import userReducer from "../reducers/user";


export default () => {
  const store = createStore(
    combineReducers({
      users: userReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
