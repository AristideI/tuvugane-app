import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProps } from "../interfaces/propsInterfaces";
import { User, UserResp } from "../interfaces/models.interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  isLogged: false,
  login: ({ user, token }: { user: UserResp; token: string }) => {},
  logout: () => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserResp | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  async function login({ user, token }: { user: UserResp; token: string }) {
    setUser(user);
    setToken(token);
    setIsLogged(true);
    await AsyncStorage.setItem("token", token as string);
    await AsyncStorage.setItem("user", JSON.stringify(user));
  }

  async function logout() {
    setUser(null);
    setToken(null);
    setIsLogged(false);
    await AsyncStorage.removeItem("token");
  }

  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem("token");
      const user = JSON.parse((await AsyncStorage.getItem("user")) as string);
      if (token && user) {
        setToken(token);
        setUser(user);
        setIsLogged(true);
      } else {
        setUser(null);
        setToken(null);
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
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
