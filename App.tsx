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
import Logo from "./components/ui/headers/Logo";
import Post from "./screens/Logged/Post";
import Profile from "./screens/Logged/Profile";
import PressableIcon from "./components/ui/headers/PressableIcon";
import { Ionicons } from "@expo/vector-icons";
import ProfileIcon from "./components/ui/headers/ProfileIcon";

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
  const { user } = useAuthContext();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Feeds"
        component={Feeds}
        options={({ navigation }) => ({
          headerLeft: () => <Logo />,
          headerRight: () => (
            <PressableIcon
              onPress={() => navigation.navigate("Messages")}
              name="logo-wechat"
            />
          ),
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={30} color="red" />
            ) : (
              <Ionicons name="home-outline" size={30} color="white" />
            ),
        })}
      />
      <Tabs.Screen
        name="People"
        component={People}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="people" size={30} color="red" />
            ) : (
              <Ionicons name="people-outline" size={30} color="white" />
            ),
        }}
      />
      <Tabs.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="add-circle" size={30} color="red" />
            ) : (
              <Ionicons name="add-circle-outline" size={30} color="white" />
            ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ProfileIcon uri={user?.profilePic as string} focused={true} />
            ) : (
              <ProfileIcon uri={user?.profilePic as string} focused={false} />
            ),
        }}
      />
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
        headerShown: false,
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
