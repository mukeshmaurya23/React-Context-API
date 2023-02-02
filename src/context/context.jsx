import React, { createContext, useState } from "react";

const userContext = createContext({
  name: null,
  logIn: () => {},
  logOut: () => {},
});

export const UserContextProvider = ({ children }) => {
  const USER = {
    name: "Guest",
    age: 20,
    class: "10th",
    isGuestUser: true,
  };
  const [state, setState] = useState(USER);
  const logIn = (name, age, className) => {
    setState({
      ...state,
      name,
      age,
      className,
      isGuestUser: false,
    });
  };
  const logOut = () => {
    setState(USER);
  };

  return (
    <userContext.Provider
      value={{
        state,
        logIn,
        logOut,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userContext;
