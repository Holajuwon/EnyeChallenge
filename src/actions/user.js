export const addUser = ({ firstName, lastName, birthday, age, hobby } = {}) => {
  return {
    type: "ADD_USER",
    users: {
      firstName,
      lastName,
      birthday,
      age,
      hobby
    }
  };
};

export const updateUser = users => {
  return {
    type: "UPDATE_USERS",
    users: users
  };
};
