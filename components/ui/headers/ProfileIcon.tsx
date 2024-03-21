import { View, Image, StyleSheet } from "react-native";

export default function ProfileIcon({
  uri,
  focused,
}: {
  uri: string;
  focused: boolean;
}) {
  return (
    <View style={[styles.imageContainer, focused && styles.focused]}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  focused: {
    borderColor: "red",
    borderWidth: 1,
  },
});
