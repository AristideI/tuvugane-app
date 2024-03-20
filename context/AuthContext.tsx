import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProps } from "../interfaces/propsInterfaces";
import { User } from "../interfaces/models.interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  isLogged: false,
  login: ({ user, token }: { user: User; token: string }) => {},
  logout: () => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const isLogged = !!token;

  function login({ user, token }: { user: User; token: string }) {
    setUser(user);
    setToken(token);
    AsyncStorage.setItem("token", token as string);
    AsyncStorage.setItem("user", JSON.stringify(user));
  }

  function logout() {
    setUser(null);
    setToken(null);
    AsyncStorage.removeItem("token");
  }

  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem("token");
      const user = JSON.parse((await AsyncStorage.getItem("user")) as string);
      if (token && user) {
        setToken(token);
        setUser(JSON.parse((await AsyncStorage.getItem("user")) as string));
      } else {
        setUser(null);
        setToken(null);
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("user");
      }
    }
    getToken();
  }, []);

  const values = { user, token, isLogged, login, logout };

  return (
    <AuthContext.Provider value={{ ...values }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
