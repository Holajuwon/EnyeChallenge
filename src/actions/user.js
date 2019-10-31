import { uuid } from "uuid";
import admin from "../../functions/index";

export const addUser = (user)=> ({
//   firstName = "",
//   lastName = "",
//   birthday = "",
//   age = null,
//   hobby = ""
// } = {}) => ({
  type: "ADD_USER",
  user
  // : {
  //   id: uuid(),
  //   firstName,
  //   lastName,
  //   birthday,
  //   age,
  //   hobby
  // }
});

export const startAddUser = (userData = {}) => {
  return dispatch => {
    const {
      firstName = "",
      lastName = "",
      birthday = "",
      age = null,
      hobby = ""
    } = userData;
    const user = { firstName, lastName, birthday, age, hobby };

    admin.ref('users').push(user).then((ref)=>{
      dispatch(addUser({
        id: ref.key,
        ...user
      }))
    })
  };
};
