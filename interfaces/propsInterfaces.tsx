import { ReactNode } from "react";
import { User } from "./models.interfaces";

export interface NavigationProps {
  children: ReactNode;
}

export interface AuthContextProps {
  user: User | null;
  token: string | null;
  isLogged: boolean;
  login: ({ user, token }: { user: User; token: string }) => void;
  logout: () => void;
}
