import { View, Image, StyleSheet } from "react-native";

export default function UserProfile({ uri }: { uri: string }) {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
