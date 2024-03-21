import { Text, StyleSheet, View, Image } from "react-native";
import UserProfile from "./UserProfile";
import PressableIcon from "../ui/headers/PressableIcon";

export default function PostComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <UserProfile uri="https://i.imgur.com/nPPe0Dt.jpg" />
        <View>
          <Text style={[styles.text, styles.name]}>Aristide Isingizwe</Text>
          <Text style={[styles.text]}>2 hours ago</Text>
        </View>
      </View>
      <Image
        style={styles.postImage}
        source={{ uri: "https://i.imgur.com/wUcF82z.jpeg" }}
      />
      <View style={styles.iconsContainer}>
        <PressableIcon name="heart-outline" onPress={() => {}} />
        <PressableIcon name="chatbubble-ellipses-outline" onPress={() => {}} />
      </View>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veniam at
        distinctio officia eveniet, maxime corrupti incidunt harum quia ex quam
        sunt omnis velit aliquid voluptas expedita non. Sed, ullam?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 30,
  },
  text: {
    color: "white",
  },
  profileContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 250,
    objectFit: "cover",
  },
  iconsContainer: {
    flexDirection: "row",
  },
});
