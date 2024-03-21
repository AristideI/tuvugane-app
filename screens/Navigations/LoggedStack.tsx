import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stacks = createNativeStackNavigator();
import MainTabs from "./MainTabs";
import Messages from "../messages/Messages";
import Conversation from "../messages/Conversation";
import PeopleProfile from "../Logged/PeopleProfile";

export default function LoggedStack() {
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
