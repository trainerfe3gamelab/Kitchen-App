import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    axios
      .get("/auth")
      .then(({ data }) => {
        console.log(data);
        setIsLogged(true);
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isLogged]);

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
}
