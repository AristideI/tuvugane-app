import { View, Text, StyleSheet, Pressable } from "react-native";
import AuthTextInput from "../../components/ui/AuthInput";
import { useState } from "react";
import Button from "../../components/ui/Button";
import { useAuthContext } from "../../context/AuthContext";
import { authLogin } from "../../utils/login";
import { User, UserResp } from "../../interfaces/models.interfaces";

export default function Login({ navigation }: { navigation: any }) {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const { login } = useAuthContext();

  async function handleLogin() {
    try {
      const logUser = await authLogin(userInfo);
      if (logUser) {
        const token = logUser.token;
        const user: UserResp = {
          fullname: logUser.fullname,
          username: logUser.username,
          email: logUser.email,
          _id: logUser._id,
          bio: logUser.bio,
          profilePic: logUser.profilePic,
          gender: logUser.gender,
        };
        login({ user, token });
      }
    } catch (error) {
      setError(true);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.text, styles.title]}>Hey, </Text>
        <Text style={[styles.text, styles.title]}>Welcome </Text>
        <Text style={[styles.text, styles.title]}>Back</Text>
      </View>
      <View style={styles.inputContainer}>
        <AuthTextInput
          name="Username"
          value={userInfo.username}
          onUpdateValue={(text) =>
            setUserInfo((prev) => ({ ...prev, username: text }))
          }
          secure={false}
        />
        <AuthTextInput
          name="Password"
          value={userInfo.password}
          onUpdateValue={(text) =>
            setUserInfo((prev) => ({ ...prev, password: text }))
          }
          secure={true}
        />
      </View>
      <View style={styles.loginContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <Text style={styles.text}>
        Don't have an account?{" "}
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.option}>Sign Up</Text>
        </Pressable>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    padding: 20,
  },
  text: {
    color: "white",
  },
  inputContainer: {
    width: "100%",
    gap: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  titleContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  loginContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  option: {
    color: "white",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
