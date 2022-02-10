import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../services/uauth";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const response = await getUser();
      setUser(response);
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUAuth = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext context is wrong!");
  const { user, setUser } = context;
  return { user, setUser };
};
