export const updateUserData = (userData, setUserData, updatedField) => {
  const updatedUserData = {
    ...userData,
    ...updatedField,
  };
  setUserData(updatedUserData);
  sessionStorage.setItem("userData", JSON.stringify(updatedUserData));
};
