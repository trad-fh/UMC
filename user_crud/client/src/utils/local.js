export const getUserFromLocal = () => {
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");
  const AccessToken = localStorage.getItem("AccessToken");

  if (userId && username && AccessToken)
    return { userId, username, AccessToken };
  return null;
};

export const setUserInLocal = (userInfo) => {
  Object.entries(userInfo).forEach(([key, value]) => {
    localStorage.setItem(key, value);
  });
};

export const removeAllLocal = () => {
  localStorage.clear();
};
