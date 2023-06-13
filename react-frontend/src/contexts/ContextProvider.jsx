import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  admin: null,
  setUser: () => {},
  setToken: () => {},
  setAdmin: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN")); //localStorage.getItem("ACCESS_TOKEN")
  const [admin, setAdmin] = useState(false);

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };
  return (
    <StateContext.Provider
      value={{
        user,
        token,
        admin,
        setUser,
        setToken,
        setAdmin,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
