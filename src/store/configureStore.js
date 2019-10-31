import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { useStore } from "react-redux";
import userReducer from "../reducers/user";
import thunk from 'redux-thunk' //we use saga instead 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      users: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
