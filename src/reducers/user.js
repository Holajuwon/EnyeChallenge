const userInitialState = [];
export default (state = userInitialState, action) => {
  switch (action.type) {
    case "UPDATE_USERS":
      return [action.users];
    default:
      return state;
  }
};
