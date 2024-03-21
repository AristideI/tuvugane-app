import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAuthContext } from "../../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import Feeds from "../Logged/Feeds";
import Logo from "../../components/ui/headers/Logo";
import PressableIcon from "../../components/ui/headers/PressableIcon";
import People from "../Logged/People";
import Post from "../Logged/Post";
import Profile from "../Logged/Profile";
import ProfileIcon from "../../components/ui/headers/ProfileIcon";

const Tabs = createBottomTabNavigator();

export default function MainTabs() {
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
