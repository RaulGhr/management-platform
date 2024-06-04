import { createContext, useState, useEffect } from "react";

// import { apiGetAllClothes } from "../utils/ApiCalls";


export const UserContext = createContext({
  user:{}
});

export const UserProvider = ({ children }) => {
  const [logedUser, setLogedUser] = useState({});


  const value = {
    logedUser,
    setLogedUser,
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};
