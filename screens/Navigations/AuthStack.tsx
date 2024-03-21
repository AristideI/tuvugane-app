import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthHome from "../auth/AuthHome";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const Stacks = createNativeStackNavigator();

export default function AuthStack() {
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
