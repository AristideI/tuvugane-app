import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../../components/ui/Button";

export default function AuthHome({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/authLog.png")}
        />
        <Text style={[styles.text, styles.title]}>Chit ~ Chat</Text>
        <Text style={[styles.text, styles.smallText]}>
          Welcome to Chit Chat, your go-to platform for connecting, sharing, and
          sparking conversations! Whether you're looking to express yourself,
          engage with others heard!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Signup")}
          isFlat
        />
      </View>
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
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    gap: 40,
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    marginBottom: -20,
  },
  text: {
    color: "white",
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    gap: 20,
  },
});
