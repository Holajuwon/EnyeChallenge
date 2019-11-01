import axios from "axios";
const URL = "https://us-central1-enye-2c6de.cloudfunctions.net/usersData";

export const postApiHandler = user => {
  axios
    .post(URL, user)
    .then(res => res.data)
    .catch(err => err);
};

export const getApiHandler = async () => {
  return await axios
    .get(URL)
    .then(res => res.data)
    .catch(err => err);
};
