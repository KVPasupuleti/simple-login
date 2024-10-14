import Cookies from "js-cookie";

const USER_ID = "pdadkdljlkdjf";

export const setUserId = (userId) => {
  Cookies.set(USER_ID, userId);
};

export const getUserId = () => {
  return Cookies.get(USER_ID);
};
