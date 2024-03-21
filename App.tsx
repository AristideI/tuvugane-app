import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider, { useAuthContext } from "./context/AuthContext";
import LoggedStack from "./screens/Navigations/LoggedStack";
import AuthStack from "./screens/Navigations/AuthStack";

function Navigation() {
  const { token } = useAuthContext();
  return (
    <NavigationContainer>
      {token ? <LoggedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
