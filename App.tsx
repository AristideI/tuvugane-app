import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthHome from "./screens/auth/AuthHome";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";
import Feeds from "./screens/Logged/Feeds";
import People from "./screens/Logged/People";
import Messages from "./screens/messages/Messages";
import Conversation from "./screens/messages/Conversation";
import PeopleProfile from "./screens/Logged/PeopleProfile";
import AuthContextProvider, { useAuthContext } from "./context/AuthContext";

const Stacks = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stacks.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Stacks.Screen
        name="AuthHome"
        component={AuthHome}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <Stacks.Screen
        name="Login"
        component={Login}
        options={{
          title: "",
        }}
      />
      <Stacks.Screen name="Signup" component={Signup} />
    </Stacks.Navigator>
  );
}

function MainTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Feeds" component={Feeds} />
      <Tabs.Screen name="People" component={People} />
      <Tabs.Screen name="Post" component={Signup} />
      <Tabs.Screen name="Profile" component={Signup} />
    </Tabs.Navigator>
  );
}

function LoggedStack() {
  return (
    <Stacks.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Stacks.Screen name="MainTabs" component={MainTabs} />
      <Stacks.Screen name="Messages" component={Messages} />
      <Stacks.Screen name="Conversation" component={Conversation} />
      <Stacks.Screen name="PeopleProfile" component={PeopleProfile} />
    </Stacks.Navigator>
  );
}

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
        <Navigation></Navigation>
      </AuthContextProvider>
    </>
  );
}
