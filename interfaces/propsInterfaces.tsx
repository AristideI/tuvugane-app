import { ReactNode } from "react";
import { UserResp } from "./models.interfaces";

export interface NavigationProps {
  children: ReactNode;
}

export interface AuthContextProps {
  user: UserResp | null;
  token: string | null;
  isLogged: boolean;
  login: ({ user, token }: { user: UserResp; token: string }) => void;
  logout: () => void;
}
