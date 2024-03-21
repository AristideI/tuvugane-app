import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import AuthTextInput from "../../components/ui/AuthInput";
import { useState } from "react";
import Button from "../../components/ui/Button";
import { KeyboardAvoidingView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { ACCESS_TOKEN, IMG_UR } from "../../env";
import { signup } from "../../utils/signup";

export default function Signup({ navigation }: { navigation: any }) {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
  });
  // Upload the image using the fetch and FormData APIs
  let formData = new FormData();

  async function handleFilePicker() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.assets[0].uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename as string);
    let type = match ? `image/${match[1]}` : `image`;

    // Assume "photo" is the name of the form field the server expects
    formData.append("image", { uri: localUri, name: filename, type });
    console.log(formData);
  }

  async function handleSignup() {
    try {
      const profile = await axios.post(IMG_UR, formData, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      const imageLink = profile.data.data.link;
      const user = await signup({ ...userInfo, profilePic: imageLink });
      return navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.title]}>Hey, </Text>
          <Text style={[styles.text, styles.title]}>Let's Get </Text>
          <Text style={[styles.text, styles.title]}>Started</Text>
        </View>
        <View style={styles.inputContainer}>
          <AuthTextInput
            name="Full Name"
            value={userInfo.fullname}
            onUpdateValue={(text) =>
              setUserInfo((prev) => ({ ...prev, fullname: text }))
            }
            secure={false}
          />
          <AuthTextInput
            name="Username"
            value={userInfo.username}
            onUpdateValue={(text) =>
              setUserInfo((prev) => ({ ...prev, username: text }))
            }
            secure={false}
          />
          <AuthTextInput
            name="Email"
            value={userInfo.email}
            onUpdateValue={(text) =>
              setUserInfo((prev) => ({ ...prev, email: text }))
            }
            secure={false}
          />
          <AuthTextInput
            name="Gender"
            value={userInfo.gender}
            onUpdateValue={(text) =>
              setUserInfo((prev) => ({ ...prev, gender: text }))
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
          <Pressable
            style={({ pressed }) => [
              styles.chooseContainer,
              pressed && styles.pressed,
            ]}
            onPress={handleFilePicker}
          >
            <Ionicons name="image" size={30} color="white" />
            <Text style={{ color: "white" }}>Profile picture</Text>
          </Pressable>
        </View>
        <View style={styles.loginContainer}>
          <Button title="Signup" onPress={handleSignup} />
        </View>
        <Text style={(styles.text, { textAlign: "center", color: "white" })}>
          Don't have an account?{" "}
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.option}>Login</Text>
          </Pressable>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    gap: 40,
    width: "100%",
    padding: 20,
  },
  text: {
    color: "white",
  },
  inputContainer: {
    width: "100%",
    gap: 20,
    marginBottom: 20,
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
  chooseContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  pressed: {
    opacity: 0.75,
  },
});
